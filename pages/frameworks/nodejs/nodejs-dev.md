
# Stack

* TypeScript
* Express - web api
* Winston - logger
* 

Language features:

* ES6
* Promises

# Project structure

## TypeScript based project

```bash
.
|-- src
|   |-- config
|   |-- public 
|       |-- feature-1
|       |-- feature-2
|       |-- feature-3
|-- test
|-- views
|-- package.json
```

[example](https://github.com/Microsoft/TypeScript-Node-Starter)

## Pure js based project

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

# Client & Server are both in TypeScript, one repository

[Creating a MEAN Stack with Angular 2 and TypeScript](https://medium.com/@tsmith18256/creating-a-mean-stack-with-angular-2-and-typescript-3dd23b3e717f)

# Web api

# Tests

* Jest (.test.ts) - integration, api testing
* Jasmine (.spec.ts)

* test runner: [mocha](https://www.npmjs.com/package/mocha), alternatively [tape](https://www.npmjs.com/package/tape)
* assertion library: [chai](http://chaijs.com/), alternatively the assert module (for asserting)
* test spies, stubs and mocks: [sinon](http://sinonjs.org/) (for test setup).
* code coverage: [istanbul](https://github.com/gotwarlost/istanbul)

[Unit testing - RisingStack](https://blog.risingstack.com/node-hero-node-js-unit-testing-tutorial/)
[Unit testing node applications with TypeScript — using mocha and chai](https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2)
[Debugging Mocha Tests Written in TypeScript with Visual Studio Code](https://saravanaj.github.io/2017/02/05/debugging-mocha-tests-written-in-typescript-with-visual-studio-code/)

Integration testing (end-to-end) for API:
* [SuperTest](https://github.com/visionmedia/supertest)
* [hippie](https://github.com/vesln/hippie)

Frontend applications:

 [Protractor](https://github.com/angular/protractor) for AngularJS applications or [Nightwatch](http://nightwatchjs.org/). To make sure it works in every browser you support, run your end-to-end tests on a Selenium cluster. Or you can use services like [Sauce Labs](https://saucelabs.com/) or [Browserstack](https://www.browserstack.com/).

# Linting


[TypeScript Linting with TSLint – Setup, Configuration, & Rules](https://spin.atomicobject.com/2017/06/05/tslint-linting-setup/)

[TSLint](https://palantir.github.io/tslint/usage/cli/)

```bash
npm install tslint typescript -g
```

Rules extention with [TSLint-ESLint](https://github.com/buzinas/tslint-eslint-rules)

```
npm install --save-dev tslint-eslint-rules
```

# Build

The following steps can occur:

* installing dependencies from NPM (public or private)
* run unit tests
* build assets, like css and javascript
* run integration/end-to-end tests
* creating artifacts (bundle the node_modules directory to it as well, so during deployment, you won't depend on NPM)

# Deploy

[Setup for production](https://ru.godaddy.com/help/set-up-nodejs-application-for-production-ubuntu-17352)
[Automating Node.js Deployments with Docker and Bamboo](https://hnryjms.io/2016/11/automated-deploy/)
[Continuous Deployment of Node.js Applications](https://blog.risingstack.com/continuous-deployment-of-node-js-applications/)
[Package Your Node.js Application for Deployment in an Offline Environment](https://dzone.com/articles/how-to-package-your-nodejs-application-for-deploym)

# Run

When port is accessed in the code as `process.env.PORT` you can run app with selected port using 

```PORT=7878 node app.js```

# Operating in Production

* [Operating Node.js in Production](https://blog.risingstack.com/operating-node-in-production/)
