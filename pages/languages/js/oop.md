# Inheritance In ES5

```js
console.log('PERSON');

function Person (name) {
 this.name = name;
}

//we define properties/methods
Person.prototype = {
   eyes: 2,
   mouth: 1,
   go: function () {
    return 'i am going...';
   }
};

// We create a person
const alex = new Person('Alex');

// and we can do:
console.log(
  `name: ${alex.name}`,
  `eyes: ${alex.eyes}`,
  `mouth: ${alex.mouth}`,
   alex.go()
);

console.log('EMPLOYEE')

// But now, if we have a employee 'class' we can inheritance person's properties.
function Employee (name, salary) {
  this.name = name;
  this.salary = salary;
}

// Prototype Inheritance
Employee.prototype = new Person();

// So now, we just can do the same thing
// We create a employee
const emp = new Employee('Ivan', 1500);

// and we can do:
console.log(
  `name: ${emp.name}`,
  `salary: ${emp.salary} USD`,
  `eyes: ${emp.eyes}`,
  `mouth: ${emp.mouth}`,
   emp.go()
);
```

# In ES6

## Inheritance

We must remember that is just syntactic sugar.

```js
class Person {
  constructor (name) {
    this.name = name;
    this.eyes = 2;
    this.mouth = 1;
  }
  go () {
    return 'i am going...';
  }
}

class Employee extends Person {
  constructor (name, salary) {
    super(name);
    this.salary = salary;
  }
}

const alex = new Person('Alex');
// and we can do:
console.log(
  `name: ${alex.name}`,
  `eyes: ${alex.eyes}`,
  `mouth: ${alex.mouth}`,
   alex.go()
);

// We create a employee
const emp = new Employee('Ivan', 1500);
// and we can do:
console.log(
  `name: ${emp.name}`,
  `salary: ${emp.salary} USD`,
  `eyes: ${emp.eyes}`,
  `mouth: ${emp.mouth}`,
   emp.go()
);
```

## Static methods

```js
class Person {
  static say(word) {
   return `I said: ${word}`;
  }
}

// With static we can access to methods without the need to instantiate a new object of the class.
console.log( Person.say('Hello') );
```

## Private Methods

There is no *private keyword* in JavaScript like in C# and Java. By convention when we want to define *‘private’* values, we use a underscore before the word:

```js
class Person {
 constructor (name, phone) { 
   this.name = name;
   this._phone = phone;
 }
}
const p = new Person('Alex', 792012121);
// But 'phone' is not a 'true private property' because we can do this:
console.log(p._phone);
```

One possible solution in ES6 to use WeakMap:

```js
// Don't use private like variable name because is a reserved word
const secret = new WeakMap();
class Person {
  constructor (name, phone) {
    this.name = name;
    secret.set(this, {_phonenumber: phone});
  }
}
const p = new Person('Alex', 792012121);
// Now the phonenumber is a private propertie.
console.log(p._phone); // Print's undefined
```

## Getters and Setters

```js
const secret = new WeakMap();
class Person {
  constructor (name, phone) {
    this.name = name;
    secret.set(this, {_phonenumber: phone});
  }
  get phoneNumber() {
    return secret.get(this)._phonenumber;
  }
  set phoneNumber(newNumber) {
    secret.get(this)._phonenumber = newNumber;
  }
}
const p = new Person('Alex', 792012121);
// Now we can access to the phone by using the getter: 
console.log(p.phoneNumber); // Print's the number
// Set a new number
p.phoneNumber = 432232323;
console.log(p.phoneNumber); // We get the new number
```

## Polymorphism

Is the ability for an object during execution, to reference either an occurrence of his class or an occurrence of any of his descendants classes. Descendants classes may redefine a method.

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  me() {
    return `My name is ${this.name}`;
  }
}
const alex = new Person('Alex');
console.log(alex.me()); // ->  'My name is Alex'

class Employee extends Person {
  constructor (name, salary) {
    super(name);
    this.salary = salary;
  }
  me() {
    return `My name is ${this.name} and my salary is ${this.salary}`;
  } 
}

const ivan = new Employee('Ivan', 1500);
console.log(ivan.me()); // ->  'My name is Ivan and my salary is 1500'
```

# Concepts

* **class**: Define of a new class/model, abstraction
* **method**: Function inside a class.
* **constructor**: Method that initializes an object when the class is instantiated.
* **extends**: Used for set a inheritance.
* **super**: Method that set the inheritance properties calling the father's constructor. *The super must be in the first line of the constructor method*.
* **get**: Method to return a value.
* **set**: Method to re-define a new existing value.
* **new**: Creation of an object by the class constructor method.