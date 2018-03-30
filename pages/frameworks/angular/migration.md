# Migration to Angular

## Preparation

For successfull migration you should prepare you AngularJS application.

1. Refactor your app to follow [AngularJS Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) - *...following the style guide helps make your AngularJS app more closely aligned with Angular*
1. [One component per file](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#single-responsibility): each controller, component, service, and filter is in its own source file
1. The [Folders-by-Feature Structure](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#folders-by-feature-structure) and [Modularity](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#modularity) rules define similar principles on a higher level of abstraction: Different parts of the application should reside in different directories and NgModules
1. Use a Module Loader such as SystemJS, Webpack, or Browserify
1. Migrating to TypeScript

## Links

* [Preparing for Migration from AngularJS (1.x) to Angular (2+)](https://www.pluralsight.com/courses/migrating-applications-angular-2)
* [Migrating Applications from AngularJS to Angular](https://www.pluralsight.com/courses/migrating-applications-angularjs-angular)
