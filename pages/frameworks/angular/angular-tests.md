# Angular tests

Suppose application located in **project_folder/apps/jrs/src**

Project structure is:

```
project_folder
|- apps
|    |- jrs
|        |- src
|            |- karma.conf.js
|            |- polyfills.ts
|            |- test.ts
|            |- vendor.ts
|            |- main.ts
|            |- index.html
|- e2e
|- node_modules
|- .npmrc
|- angular.json
|- package.json
```

## angular.json
```json
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "apps/jrs/src/test.ts",
            "polyfills": "apps/jrs/src/polyfills-test.ts",
            "tsConfig": "apps/jrs/src/tsconfig.spec.json",
            "karmaConfig": "apps/jrs/src/karma.conf.js",
            "sourceMap": true,
            "scripts": [],
            "styles": [
              "apps/jrs/src/styles.scss"
            ],
          }
        },
```

## karma.conf.js

```js
// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: [ 'html', 'lcovonly', "text-summary" ],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeDebugging'],
    customLaunchers: {
      ChromeDebugging: {
        base: "Chrome",
        flags: [
          '--no-sandbox',
          "--remote-debugging-port=9222",
        ],
        debug: true,
      },
    },
    singleRun: false,
    restartOnFileChange: true,
  });
};
```

## launch.json (VS Code)

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Karma Tests",
            "url": "http://localhost:9876/debug.html",
            "webRoot": "${workspaceFolder}",
            "pathMapping": {
                "/_karma_webpack_/": "${workspaceRoot}/"
            }
        }
    ]
}
```

* [microsoft/vscode-recipes](https://github.com/microsoft/vscode-recipes/tree/master/Angular-CLI)
* [Debug Angular 10 Karma Tests in VSCode](https://medium.com/nextfaze/debug-angular-10-karma-tests-in-vscode-9685b0565e8)