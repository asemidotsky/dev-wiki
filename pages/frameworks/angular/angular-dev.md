{% raw %}
# CLI


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

## Selectors

Selector actually works like a CSS selector.

```html
<!-- Element selector - selector: 'app-user-info' -->
<app-user-info></app-user-info>
<!-- Attribute selector - selector: '[app-user-info]' -->
<div app-user-info></div>
<!-- Class selector - selector: '.app-user-info' -->
<div class="app-user-info"></div>

<!-- Not work in Angular 
 - id selector
 - pseudo
-->
```

# Decorators

**Purpose:** Allows to attach some additional information to a class. `@Component(..)` - it is a decorator.

*[Decorator is a TypeScript feature](https://www.typescriptlang.org/docs/handbook/decorators.html).*

```ts
@Component({
  selector: 'app-user-info',
  ...
})
```

# Templates and Styles

TODO:

# Databinding

Databinding = Communication between TypeScript code (Business Logic) and Template (HTML).

**Code -> Template (Output Data)**:
* String interpolation: `{{ data }}`
* Property Binding: `[property]="data"`

**Template -> Code (React to (User) Events)**:
* Event Binding: `(event)="expression"`

**Combination of Both: Two-Way-Binding**
* `[(ngModel)]="data"`

## String interpolation

**Purpose:** Display model's data in view

**user-info.component.html**

```html
<div>
    <p>{{ name }}</p>
    <p>{{ getEmail() }}</p>
    <p>{{ address }}</p>
</div>
```

## Property Binding

```html
<button [disabled]="!allowAddUser">Add user</button>
```
```ts
export class UsersComponent {
  allowAddUser = false;
}
```

## Event Binding

```ts
export class UsersComponent {
  userCreationStatus = 'No user was created!';
  userName = '';

  onCreateUser() {
    this.userCreationStatus = 'User was created!'
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
```
```html
<input type="text" (input)="onUpdateUserName($event)">
<button (click)="onCreateUser()">Add user</button>
```

## Two-Way-Binding

```ts
export class UsersComponent {
  userName = 'User name';
}
```
```html
<input type="text" [(ngModel)]="userName">
```

# Directives

{% endraw %}