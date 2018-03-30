# Jest

## Global setup/teardown

In package.config

```js
"jest": {
    "globalSetup": "./jest-setup.js",
    "globalTeardown": "./jest-teardown.js"
}

// in jest-setup.js and jest-teardown.js
module.exports = async function() {

}
```

## jest.config.js

```js
module.exports =
{
    globalSetup: "./dist/tests/jest.setup.js",
    moduleFileExtensions: ["js", "json"],
    testMatch: [
      "**/dist/**/*.(test|spec).js"
    ],
    testEnvironment: "node",
    testResultsProcessor: "./node_modules/jest-bamboo-formatter"
}
```

## Links

* [How to debug Jest tests with VSCode](https://medium.com/@mattmazzola/how-to-debug-jest-tests-with-vscode-48f003c7cb41)