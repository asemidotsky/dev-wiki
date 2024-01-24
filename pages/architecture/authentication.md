## Authentication Method Protocols

* [OpenID Connect & OAuth 2.0 API](https://developer.okta.com/docs/reference/api/oidc/)
* OAuth 2.0
* [OpenId](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth)
* OpenID Connect - OpenID Connect 1.0 is a simple identity layer on top of the OAuth 2.0 protocol
* SAuth
* [SAML](https://developer.okta.com/docs/concepts/saml/)

## Tokens

Token types:
* [JSON Web Tokens (JWT)](https://auth0.com/learn/json-web-tokens/)
* Simple Web Tokens (SWT)
* Security Assertion Markup Language Tokens (SAML)

As JSON is less verbose than XML, when it is encoded its size is also smaller, making JWT more compact than SAML. This makes JWT a good choice to be passed in HTML and HTTP environments.

Security-wise, SWT can only be symmetrically signed by a shared secret using the HMAC algorithm. However, JWT and SAML tokens can use a public/private key pair in the form of a X.509 certificate for signing. Signing XML with XML Digital Signature without introducing obscure security holes is very difficult when compared to the simplicity of signing JSON.

JSON parsers are common in most programming languages because they map directly to objects. Conversely, XML doesn't have a natural document-to-object mapping. This makes it easier to work with JWT than SAML assertions.

Regarding usage, JWT is used at Internet scale. This highlights the ease of client-side processing of the JSON Web token on multiple platforms, especially mobile.

## OAuth 2.0 Scopes

* Scopes are a way for an application to request limited access to someone’s account.
* Scopes are not a way to build a permission system.
* It’s a way to limit what an access token can do within the context of what a user can already do.

## Links

* [Microsoft identity platform documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/)
* [The Ultimate Authentication Playbook](https://www.okta.com/blog/2019/02/the-ultimate-authentication-playbook/)
* [User Authentication and Authorization in modern Web Development](https://www.ryadel.com/en/user-authentication-authorization-web-development-login-auth-identity/)