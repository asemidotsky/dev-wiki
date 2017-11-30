# Components

**Purpose:** The main building block for application. The user interface (application) is built by combining components.

Component consists of three main parts:
1. ViewModel class on TypeScript (user-info.component.ts) - defines model for view with properties and some logic
1. View template (user-info.component.html)
1. Styles (user-info.component.css)

**user-info.component.ts**
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './users/user-info.component.html',
  styleUrls: ['./users/user-info.component.css']
})

export class UserInfoComponent {
  private address: string;

  // constructor
  constructor(public name: string, public email: string, age?: number) {}

  // method
  public getEmail(): string {
      return this.email;
  }

  // getter property
  get address(): string {
      return address;
  }
}
```

In examples below I will refer to this `user-component`.

# Decorators

**Purpose:** Allows to attach some additional information to a class. `@Component(..)` - it is a decorator.

*[Decorator is a TypeScript feature](https://www.typescriptlang.org/docs/handbook/decorators.html).*

```ts
@Component({
  selector: 'app-user-info',
  ...
})
```

# String interpolation

**Purpose:** Display model's data in view

**user-info.component.html**

```html
<div>
    <p>{{ name }}</p>
    <p>{{ getEmail() }}</p>
    <p>{{ address }}</p>
</div>
```

# Templates and Styles

TODO:

# Two-Way-Binding

# Property Binding

# Event Binding