* [What Is and How Does Single Sign-On Authentication Work?](https://auth0.com/blog/what-is-and-how-does-single-sign-on-work/)
* [How does SO's new auto-login feature work?](https://meta.stackexchange.com/questions/64260/how-does-sos-new-auto-login-feature-work/64274#64274)
* [How does SSO (Single Sign On) work](https://stackoverflow.com/questions/35663357/how-does-sso-single-sign-on-work?rq=1)
* [SSO authentication angular application with service gateway call](https://stackoverflow.com/questions/57105396/sso-authentication-angular-application-with-service-gateway-call?rq=1)
* [External Provider Authentication using OAuth2 Implicit and Explicit Flow](https://www.ryadel.com/en/third-party-authentication-oauth2-implicit-explicit-flow-grant-types-tutorial-guide/)
* [OAuth 2.0 authentication with Azure Active Directory](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/auth-oauth2)
* [OAuth 2.0 official](https://oauth.net/2/)

Consider two apps on different subdomains:

- The Fine Corinthian Turkey Shop (turkey.example.com)
- Rent a Baboon (monkey.example.com)

These two web apps want to share signon, and arrange for a third hosted website for their single sign-on:

- sso.example.com

Then the flow is:

1. Frank visits http://turkey.example.com/orders/12
1. Turkey redirects to https://sso.example.com/login
1. SSO presents user with login form, validates and issues token
1. The token is saved in a cookie on SSO.
1. User is now validated on SSO, but needs to get the token back to turkey.
1. SSO stores a combination of (Guid, Token, Expiry) on the server, where Guid is a random guid and Expiry is something like 30 seconds.
1. SSO sets a secure cookie on *.example.com containing the Guid
1. SSO redirects back to http://turkey.example.com/orders/12
1. Turkey can now retrieve the ticket from the cookie
1. Turkey calls SSO server and exchanges the ticket for the token.
1. Turkey stores token in the browser (typically a cookie)

Now let's imagine that Frank wants some nice juicy baboons to go with that turkey:

1. Frank visits: http://monkey.example.com/order-in-bulk
1. Monkey sees that Frank has no stored token and redirects to https://sso.example.com/login
1. SSO sees that Frank is already logged in as he has a stored token.
1. SSO stores a new (Guid, token, expiry) triple on the server
1. Process is identical to the initial login the rest of the way