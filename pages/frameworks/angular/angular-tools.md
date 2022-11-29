# Angular toolset

* Install [Angular CLI](https://cli.angular.io/) - `npm install -g @angular/cli@latest`

## CLI

In order to update the angular-cli package installed globally in your system, you need to run:

```bash
npm uninstall -g angular-cli
npm cache clean
npm install -g @angular/cli@latest
```

Most likely you also want to update your local project version, because inside your project directory it will be selected with higher priority than the global one:

```bash
npm uninstall --save-dev angular-cli
npm install --save-dev @angular/cli@latest
npm install
```

### Common CLI commands

* `ng g c dir/componentName --skip-tests true --module moduleName` - create component `componentName` in directory `dir` and prevent creation of the test file.

## Debugging

1. Chrome dev tools
1. Source maps
1. [Augury](https://augury.angular.io/)
1. [Debugging in Visual Studio Code](https://www.digitalocean.com/community/tutorials/how-to-debug-angular-cli-applications-in-visual-studio-code)