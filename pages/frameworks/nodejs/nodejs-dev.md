
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

Integration testing:
* SuperTest
* 

# Deploy

[Setup for production](https://ru.godaddy.com/help/set-up-nodejs-application-for-production-ubuntu-17352)

# Run

When port is accessed in the code as `process.env.PORT` you can run app with selected port using 

```PORT=7878 node app.js```
