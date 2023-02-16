```python
application.add_middleware(BaseHTTPMiddleware, dispatch=fix_meta_header)
application.add_middleware(SetRequestMetaFieldMiddleware)
```

```python
import json
import typing
from fastapi import Request, FastAPI
from starlette.types import Scope, Receive, Send, Message
from pydantic import BaseModel
from datetime_utils import get_utc_now_timestamp

class OperationInfo(BaseModel):
    by: str
    at: str

async def fix_meta_header(request: Request, call_next):
    body_json = await request.json()
    user_id = request.user.identity
    meta = OperationInfo(at=get_utc_now_timestamp(), by=user_id)
    body_json["meta"] = meta.dict()
    response = await call_next(request)
    return response

class SetRequestMetaFieldMiddleware:

    def __init__(self, app: FastAPI):
        self.app = app

    async def stream(self, receive: Receive) -> typing.AsyncGenerator[bytes, None]:
        while True:
            message = await receive()
            if message["type"] == "http.request":
                body = message.get("body", b"")
                if body:
                    yield body
                if not message.get("more_body", False):
                    break
        yield b""

    async def body(self, receive: Receive) -> bytes:
        chunks = []
        async for chunk in self.stream(receive):
            chunks.append(chunk)
        return b"".join(chunks)

    async def json(self, receive: Receive) -> typing.Any:
        body = await self.body(receive)
        return json.loads(body)

    async def __call__(self, scope: Scope, receive: Receive, send: Send):
        if scope["type"] != "http":
            await self.app(scope, receive, send)
            return

        async def add_meta_field():
            nonlocal receive
            nonlocal scope

            message = await receive()
            if message["type"] == "http.request":
                body = message.get("body", b"")
                if not message.get("more_body", False):
                    json_body = json.loads(body)
                    user_id = scope["user"].user_id
                    timestamp = str(get_utc_now_timestamp())
                    meta = OperationInfo(by=user_id, at=timestamp)
                    json_body["meta"] = meta.dict()
                    json_str = json.dumps(json_body)
                    body_bytes = json_str.encode()
                    message["body"] = body_bytes

            return message

        await self.app(scope, add_meta_field, send)
```