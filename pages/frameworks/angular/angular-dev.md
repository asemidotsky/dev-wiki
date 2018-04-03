# Angular Fundamentals

{% raw %}

## Components

**Purpose:** The main building block for application. The user interface (application) is built by combining components.

Component consists of three main parts:

1. ViewModel class on TypeScript (user-info.component.ts) - defines model for view with properties and some logic
1. View template (user-info.component.html)
1. Styles (user-info.component.css)

user-info.component.ts:

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

### Selectors

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

## Decorators

**Purpose:** Allows to attach some additional information to a class. `@Component(..)` - it is a decorator.

*[Decorator is a TypeScript feature](https://www.typescriptlang.org/docs/handbook/decorators.html).*

```ts
@Component({
  selector: 'app-user-info',
  ...
})
```

## Templates and Styles

Template expressions guidelines:

* No visible side effects
* Quick execution
* Simplicity
* Idempotence

### View encapsulation

View encapsulation defines how styles will be applied to the component: component styles only applied to component template or spread out to other parts.

```ts
@Component({
  selector: 'app-user',
  encapsulation: ViewEncapsulation.Emulated
})
```

ViewEncapsulation:

* Emulated - default, Angular approach (when you see some strange attributes on html elements, like `_ngcontent-c2`)
* Native - uses Shadow DOM technology
* None - no view encapsulation

### Local references

```html
<input
  type="text"
  class="form-control"
  #serverNameInput>

<button
  (click)="onAddServer(serverNameInput.value)">Add Server</button>
```

`#serverNameInput` - is a *Local Reference*

## Databinding

### New mental model

HTML attribute vs. DOM property

> The distinction between an HTML attribute and a DOM property is crucial to understanding how Angular binding works.

The HTML attribute and the DOM property are not the same thing, even when they have the same name.

**Attributes are defined by HTML. Properties are defined by the DOM (Document Object Model).**

* A few HTML attributes have 1:1 mapping to properties. *id* is one example.
* Some HTML attributes don't have corresponding properties. *colspan* is one example.
* Some DOM properties don't have corresponding attributes. *textContent* is one example.
* Many HTML attributes appear to map to properties ... but not in the way you might think!

That last category is confusing until you grasp **this general rule**:

> Attributes initialize DOM properties and then they are done. Property values can change; attribute values can't.

**Databinding = Communication between TypeScript code (Business Logic) and Template (HTML)**.

#### Code -> Template (Output Data)

* String interpolation: `{{ data }}`
* Property Binding: `[property]="data"`

#### Template -> Code (React to (User) Events)

* Event Binding: `(event)="expression"`

#### Combination of Both: Two-Way-Binding

* `[(ngModel)]="data"`

### String interpolation

**Purpose:** Display model's data in view

user-info.component.html:

```html
<div>
    <p>{{ name }}</p>
    <p>{{ getEmail() }}</p>
    <p>{{ address }}</p>
</div>
```

### Property Binding

```html
<button [disabled]="!allowAddUser">Add user</button>
```

```ts
export class UsersComponent {
  allowAddUser = false;
}
```

Some people prefer the `bind-` prefix alternative, known as the *canonical form*:

```html
<img bind-src="carImageUrl">
```

Element properties may be the more common targets, but Angular looks first to see if the name is a property of a known directive:

```html
<div [ngClass]="classes">[ngClass] binding to the classes property</div>
```

#### Custom property binding

```ts
// app-server-element
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string, name: string };
}
```

and then in parent component template:

```html
<app-server-element [srvElement]="serverElement"></app-server-element>
```

`srvElement` is an alias - a property name outside of the component.

### Event Binding

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

#### Custom event binding

Child component:

```ts
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
```

`srvCreated` is an alias - a event name outside of the component.

```html

<label>Server Name</label>
<input type="text" [(ngModel)]="newServerName">

<label>Server Content</label>
<input type="text" [(ngModel)]="newServerContent">

<button (click)="onAddServer()">Add Server</button>
```

Parent component:

```ts
export class AppComponent {
  serverElements = [];

  onServerAdded(serverData: { name: string, content: string }) {
    this.serverElements.push({
      name: serverData.name,
      content: serverData.content
    });
  }
}
```

```html
<div>
  <app-cockpit
    (srvCreated)="onServerAdded($event)">
  </app-cockpit>
  ...
<div>
```

### Two-Way-Binding

```ts
export class UsersComponent {
  userName = 'User name';
}
```

```html
<input type="text" [(ngModel)]="userName">
```

## Directives

Directives are Instructions in the DOM!

```ts
@Directive({
  selector: '[appTurnGreen]'
})
export class TurnGreenDirective {

}
```

Directive types:

* **Structural directives** - change the DOM, add or remove elements
* **Attribute directives** - only change the element they were placed on

### ngIf

It is structural directive.

```html
<p *ngIf="expression to evaluate">Some text</p>
```

The p element added or removed from the DOM (not hided) based on provided expression.

#### ngIf with an Else Condition

```html
<p *ngIf="serverCreated; else noServer">Server {{ serverName }} was created</p>
<ng-template #noServer>
  <p>No server was created</p>
</ng-template>
```

### ngFor

It is structural directive.

```html
<app-server *ngFor="let server of servers"></app-server>
```

servers - array property in TypeScript class.

#### Getting the Index when using ngFor

```html
<div *ngFor="let log of logs; let i = index">
 Log number {{ i }}
</div>
```

*index* - like a reserved expresssion

### ngStyle

It is attribute directive.

```html
<p [ngStyle]="{backgroundColor: getColor()}">Server {{ serverId }} is {{ getServerStatus() }}</p>
```

### ngClass

It only adds a CSS class if a certain condition is true. It is attribute directive.

```html
<p [ngClass]="{online: serverStatus === 'online'}">Server {{ serverId }} is {{ getServerStatus() }}</p>
```

*online* is a CSS class name.

{% endraw %}