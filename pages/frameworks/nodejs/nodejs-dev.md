
# Stack

* TypeScript
* Express - web api
* Winston - logger

Language features:

* ES6
* Promises

# Project structure

```bash
.
|-- config
|   |-- components
|   |   |-- common.js
|   |   |-- logger.js
|   |   |-- rabbitmq.js
|   |   |-- server.js
|   |-- index.js
|   |-- social-preprocessor-worker.js
|   |-- twitter-stream-worker.js
|   `-- web.js
|-- models
|   |-- redis
|   |   |-- index.js
|   |   `-- redis.js
|   |-- tortoise
|   |   |-- index.js
|   |   `-- tortoise.js
|   `-- twitter
|       |-- index.js
|       `-- twitter.js
|-- scripts
|-- test
|   `-- setup.js
|-- web
|   |-- middleware
|   |   |-- index.js
|   |   `-- parseQuery.js
|   |-- router
|   |   |-- api
|   |   |   |-- tweets
|   |   |   |   |-- get.js
|   |   |   |   |-- get.spec.js
|   |   |   |   `-- index.js
|   |   |   `-- index.js
|   |   `-- index.js
|   |-- index.js
|   `-- server.js
|-- worker
|   |-- social-preprocessor
|   |   |-- index.js
|   |   `-- worker.js
|   `-- twitter-stream
|       |-- index.js
|       `-- worker.js
|-- index.js
`-- package.json
```


# Web api

# Unit testing

# Integration testing

# Deploy

# Run

When port is accessed in the code as `process.env.PORT` you can run app with selected port using 

```PORT=7878 node app.js```
