# JavaScript

[Callback Hell](http://callbackhell.com/)

## Data Types

* Primitive Data
  * string
  * number
  * boolean
* Objects
  * Object
  * Array
  * Date
  * Function
  * RegExp
* Other
  * null
  * undefined

```js
typeof "John"  // Returns "string"
typeof 3.14    // Returns "number"
typeof (3)     // Returns "number"
typeof (3 + 4) // Returns "number"
```

| typeof()  |   return    |
|-----------|-------------|
| string    | "string"    |
| number    | "number"    |
| NaN       | "number"    |
| boolean   | "boolean"   |
| object    | "object"    |
| date      | "object"    |
| array     | "object"    |
| null      | "object"    |
| function  | "function"  |
| undefined | "undefined" |

### Undefined

Variable without a value, has the value undefined. The typeof is also undefined

### Null

In JavaScript null is "nothing". It is supposed to be something that doesn't exist.

Unfortunately, in JavaScript, the data type of null is an object.

#### Difference Between Undefined and Null

Undefined and null are equal in value but different in type:

```js
typeof undefined   // undefined
typeof null        // object

null === undefined // false
null == undefined  // true
```

### String

#### Properties

**length** - `var txt="abc"; var len = txt.length;`

#### Methods

> All string methods return a new string. They don't modify the original string.
>
> Formally said: Strings are immutable: Strings cannot be changed, only replaced

**indexOf(str, fromPos)** - returns the index of (the position of) the first occurrence of a specified text in a string

**lastIndexOf(str, fromPos)** - returns the index of the last occurrence of a specified text in a string

Both the indexOf(), and the lastIndexOf() methods return -1 if the text is not found.

**search(value)** - searches a string for a specified value and returns the position of the match

```js
var str = "Please locate where 'locate' occurs!";

var pos = str.indexOf("locate"); // pos = 7

pos = str.lastIndexOf("locate"); // pos = 21

// Both methods accept a second parameter as the starting position for the search

pos = str.lastIndexOf("locate", 15);

pos = str.search("locate");
```

The indexOf and search are NOT equal. These are the differences:

* The search() method cannot take a second start position argument.
* The indexOf() method cannot take powerful search values (regular expressions)

#### Extracting String Parts

* **slice(start, end)** - extracts a part of a string and returns the extracted part in a new string. If a parameter is negative, the position is counted from the end of the string
* **substring(start, end)** - is similar to slice(). The difference is that substring() cannot accept negative indexes
* **substr(start, length)** - is similar to slice(). The difference is that the second parameter specifies the length of the extracted part. If the first parameter is negative, the position counts from the end of the string. The second parameter can not be negative, because it defines the length

```js
var str = "Apple, Banana, Kiwi";

var res = str.slice(7, 13); // Banana
res = str.slice(-12, -6);   // Banana
res = str.slice(7);         // Banana, Kiwi

res = str.substring(7, 13); // Banana

res = str.substr(7, 6);     // Banana
```

#### Replacing String Content

**replace()** - replaces a specified value with another value in a string

```js
str = "Please visit Apple!";
var n = str.replace("Apple", "Google"); // n = "Please visit Google!"
```

* The replace() method does not change the string it is called on. It returns a new string
* By default, the replace() function replaces only the first match
* By default, the replace() function is case sensitive
* To replace case insensitive, use a **regular expression** with an **/i** flag (insensitive)

```js
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "Apple");
```

* To replace all matches, use a **regular expression** with a **/g** flag (global match)

#### Converting to Upper and Lower Case

* toUpperCase()
* toLowerCase()

#### Concat

**concat()** joins two or more strings

```js
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

// same with plus operator
text3 = text1 + " " + text2;
```

#### Extracting String Characters

* **charAt(position)** - returns the character at a specified index (position) in a string
* **charCodeAt(position)** - returns the unicode of the character at a specified index in a string

```js
var str = "Hello";
str.charAt(0);     // returns H
str.charCodeAt(0); // returns 72
```

#### Accessing a String as an Array is Unsafe

```js
var str = "Hello";
str[0]; // returns H
```

This is **unsafe** and **unpredictable**:

* It does not work in all browsers (not in IE5, IE6, IE7)
* It makes strings look like arrays (but they are not)
* str[0] = "H" does not give an error (but does not work)

If you want to read a string as an array, convert it to an array first.

#### Converting a String to an Array

A string can be converted to an array with the **split()** method.

If the separator is omitted, the returned array will contain the whole string in index [0].

If the separator is "", the returned array will be an array of single characters:

```js
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe

var txt2 = "Hello";
txt2.split("");          // Split in characters
```

### Numbers

```js
var x = 3.14;    // A number with decimals
var y = 3;       // A number without decimals

var x = 123e5;   // 12300000
var y = 123e-5;  // 0.00123

// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x
var x = 0xFF;    // x will be 255
```

* JavaScript Numbers are Always 64-bit Floating Point
* **NaN** is a JavaScript reserved word indicating that a number is not a legal number

You can use the global JavaScript function **isNaN()** to find out if a value is a number

```js
var x = 100 / "Apple";
isNaN(x);              // returns true because x is Not a Number

typeof NaN;            // returns "number"
```

#### Infinity

Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

```js
var myNumber = 2;
while (myNumber != Infinity) {          // Execute until Infinity
    myNumber = myNumber * myNumber;
}

// Division by 0 (zero) also generates Infinity:
var x =  2 / 0;  // x will be Infinity
var y = -2 / 0;  // y will be -Infinity

typeof Infinity; // returns "number"
```

By default, JavaScript displays numbers as base 10 decimals.

But you can use the toString() method to output numbers as base 16 (hex), base 8 (octal), or base 2 (binary)

```js
var myNumber = 128;
myNumber.toString(16);  // returns 80
myNumber.toString(8);   // returns 200
myNumber.toString(2);   // returns 10000000
```

#### Number methods

* **toExponential()** returns a string, with a number rounded and written using exponential notation
* **toFixed()** returns a string, with the number written with a specified number of decimals
* **toPrecision()** returns a string, with a number written with a specified length

```js
var x = 9.656;
x.toExponential(2);  // returns 9.66e+0
x.toExponential(4);  // returns 9.6560e+0
x.toExponential(6);  // returns 9.656000e+0

// toFixed()
var x = 9.656;
x.toFixed(0);        // returns 10
x.toFixed(2);        // returns 9.66
x.toFixed(4);        // returns 9.6560
x.toFixed(6);        // returns 9.656000

// toPrecision()
var x = 9.656;
x.toPrecision();     // returns 9.656
x.toPrecision(2);    // returns 9.7
x.toPrecision(4);    // returns 9.656
x.toPrecision(6);    // returns 9.65600
```

#### Converting Variables to Numbers

There are 3 JavaScript methods that can be used to convert variables to numbers:

* The Number() method
* The parseInt() method
* The parseFloat() method

These methods are not **number** methods, but **global** JavaScript methods

```js
// Number()
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number("10 20");       // returns NaN
Number("John");        // returns NaN

// parseInt()
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN

// parseFloat()
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN
```

#### Number properties

* MAX_VALUE
* MIN_VALUE
* NEGATIVE_INFINITY
* NaN
* POSITIVE_INFINITY

```js
var x = Number.MAX_VALUE;

// not as below
var x = 6;
var y = x.MAX_VALUE;    // y becomes undefined
```

Number properties belongs to the JavaScript's number object wrapper called **Number**.

These properties can only be accessed as Number.MAX_VALUE

### Random

**Math.random()** returns a random number between 0 (inclusive),  and 1 (exclusive)

```js
// returns a random number between min (included) and max (excluded)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
// returns a random number between min and max (both included)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
```

### Boolean

Everything With a "Value" is True:

```js
100
3.14
-15
"Hello"
"false"
7 + 1 + 3.14
```

Everything Without a "Value" is False

```js
// all expressions below returns false
Boolean(0);
Boolean(-0);
Boolean("");
Boolean(undefined);
Boolean(null);
Boolean(NaN);
```

### Dates

* Dates written as numbers, specifiy the number of milliseconds since January 1, 1970, 00:00:00
* JavaScript counts months from 0 to 11. January is 0. December is 11
* In JavaScript, the first day of the week (0) means "Sunday", even if some countries in the world consider the first day of the week to be "Monday"

```js
new Date()
new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)
```

#### Date Formats

There are generally 4 types of JavaScript date input formats:

* ISO Date - "2015-03-25" (The International Standard)
* Short Date - "03/25/2015"
* Long Date - "Mar 25 2015" or "25 Mar 2015"
* Full Date - "Wednesday March 25 2015"

```js
// ISO dates can be written without specifying the day (YYYY-MM)
var d = new Date("2015-03");
// ISO dates can be written without month and day (YYYY)
var d = new Date("2015");
// (YYYY-MM-DDTHH:MM:SSZ)
var d = new Date("2015-03-25T12:00:00Z");

/*
UTC time is defined with a capital letter Z.

If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead
*/
var d = new Date("2015-03-25T12:00:00-06:30");

// Short dates are written with an "MM/DD/YYYY"
var d = new Date("03/25/2015");

// Long dates are most often written with a "MMM DD YYYY"
var d = new Date("Mar 25 2015");
// Month and day can be in any order
var d = new Date("25 Mar 2015");
// And, month can be written in full (January), or abbreviated (Jan)
var d = new Date("January 25 2015");
var d = new Date("Jan 25 2015");
// Commas are ignored. Names are case insensitive
var d = new Date("JANUARY, 25, 2015");
```

#### Date Methods

* getDate() - Get the day as a number (1-31)
* getDay() - returns the weekday as a number (0-6)
* getFullYear() - Get the four digit year (yyyy)
* getHours() - Get the hour (0-23)
* getMilliseconds() - Get the milliseconds (0-999)
* getMinutes() - Get the minutes (0-59)
* getMonth() - Get the month (0-11)
* getSeconds() - Get the seconds (0-59)
* getTime() - Get the time (milliseconds since January 1, 1970)
* getUTCDate() - Same as getDate(), but returns the UTC date
* getUTCDay() ...

Date object has equivalent *Set Methods* in format setDate(), setTime(), ...

```js
var d = new Date();
d.setFullYear(2020, 0, 14);

/*
The setDate() method can be used to add days to a date:
If adding days, shifts the month or year, the changes are handled automatically by the Date object.
*/
d.setDate(d.getDate() + 50);
```

#### Date Input - Parsing Dates

If you have a valid date string, you can use the **Date.parse()** method to convert it to milliseconds.

Date.parse() returns the number of milliseconds between the date and January 1, 1970

```js
var msec = Date.parse("March 21, 2012");
var d = new Date(msec);
```

#### Compare Dates

```js
var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
}
```

### Arrays

```js
var cars = ["Saab", "Volvo", "BMW"];
// You can do
var cars = new Array("Saab", "Volvo", "BMW"); // bad
/*
The two examples above do exactly the same. There is no need to use new Array().
For simplicity, readability and execution speed, use the first one (the array literal method).
*/

var x = cars.length;  // The length property returns the number of elements

cars[1] = "Fiat"; // change "Volvo" element to "Fiat"

cars[cars.length] = "Ford"; // Appends "Ford" to cars
```

* Array indexes start with 0
* The **typeof** operator in JavaScript returns "object" for arrays

#### How to Recognize an Array

The problem is that the JavaScript operator typeof returns "object".

* To solve this problem ECMAScript 5 defines a new method **Array.isArray()**

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
typeof fruits;             // returns object

// solution 1
Array.isArray(fruits);     // returns true

// solution 2 - for older browsers
function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}

// solution 3
fruits instanceof Array     // returns true
```

#### Array methods

* **join()** - joins all array elements into a string
* **push()** - adds a new element to an array (at the end)
* **pop()** - removes the last element from an array
* **shift()** - removes the first array element and "shifts" all other elements to a lower index
* **unshift()** - adds a new element to an array (at the beginning), and "unshifts" older elements
* **splice()** - can be used to add new items to an array
* **concat()** - creates a new array by merging (concatenating) existing arrays
* **slice()** - slices out a piece of an array into a new array
* **sort()** - sorts an array alphabetically
* **reverse()** - reverses the elements in an array.
* **find()** - find item in array (JS6)

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];

// join()
var res = fruits.join(" * "); // Banana * Orange * Apple * Mango

// pop()
var x = fruits.pop();   // Removes the last element ("Mango") from fruits, the value of x is "Mango"

// push()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var newLen = fruits.push("Kiwi");    //  Adds a new element ("Kiwi") to fruits, newLen = 5

// shift()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();             // Returns "Banana" -shifted element

// unshift()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Returns 5 - new array length

// splice() for Add Elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); // Banana,Orange,Lemon,Kiwi,Apple,Mango

// splice() to Remove Elements
fruits.splice(0, 1);        // Removes the first element of fruits

// concat()
var arr = ["AB", "CD"];
var arr1 = ["FG", "WE", "sd"];
var arr2 = ["DS", "SS"];
var result = arr.concat(arr1, arr2); // Concatenates arr1 with arr2 and arr3

// slice()
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3); // new array: Apple,Mango
// selects elements from the start argument, and up to (but not including) the end argument.
var citrus1 = fruits.slice(1, 3); // new array: Orange,Lemon

// find()
let obj = arr.find(o => o.name === 'Alex');
```

#### Sorting an Array

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Apple,Banana,Mango,Orange

fruits.reverse(); // Orange,Mango,Banana,Apple

// numeric - with using compare function
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

// sort an array descending
points.sort(function(a, b){return b - a});

// sorting in random order
points.sort(function(a, b){return 0.5 - Math.random()});

// sort objects
var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}];

cars.sort(function(a, b){return a.year - b.year});

cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});
```

#### Min and Max values

```js
function arrayMax(arr) {
  return Math.max.apply(null, arr);
}
// Math.max.apply([1, 2, 3]) is equivalent to Math.max(1, 2, 3)

function arrayMin(arr) {
    return Math.min.apply(null, arr);
}

// The fastest solution is to use a "home made" method
function findArrayMax(arr) {
    var len = arr.length
    var max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

function findArrayMin(arr) {
    var len = arr.length
    var min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}
```

### RegExp

Regexp syntax: `/pattern/modifiers;`

Regexp are often used with the two **string methods: search()** and **replace()**:

```js
var str = "Visit School";
var n = str.search(/school/i); // n = 6

var res = str.replace(/school/i, "Google");
// res = 'Visit Google'
```

#### RegExp Object

```js
/*
test() method - it searches a string for a pattern,
and returns true or false, depending on the result
*/
var patt = /e/;
var isMatch = patt.test("Hello!"); // = true

/*
exec() method - it searches a string for a specified pattern, and returns the found text.
If no match is found, it returns null.
*/
```

[JavaScript RegExp Reference - W3Schools](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)

## Operators

Here is not full list of operators, only interesting.

For examples consider that:

* **x = 5**.
* **y = 3**

Operator | Description | Example | Result |
---------| ----------- |-------- | ------ |
==       | equal to    | x == 8  | true   |
===      | equal value and equal type | x === 5; x === "5" | true; false |
!=       | not equal   | x != 8  | true   |
!==      | not equal value or not equal type | x !== 5; x !== "5" | false; true |
&&       | AND    | (x < 10 && y > 1)    | true   |
\|\|     | OR     | (x == 6 \|\| y == 5) | false   |
!        | NOT    | !(x == y) | true     |
cond ? v1 : v2 | Ternary operator    | var v = (age < 18) ? "Young":"Old"; |  |

## Control flow

```js
// If-Else

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// Switch

switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is Weekend";
        break;
    case 6:
        text = "Saturday";
        break;
    case 0:
        text = "Sunday";
        break;
    // ! does not have to be the last case in a switch block
    default:
        text = "Waiting for the Weekend";
}
```

JavaScript supports different kinds of loops:

* **for** - loops through a block of code a number of times
* **for/in** - loops through the properties of an object
* **while** - loops through a block of code while a specified condition is true
* **do/while** - also loops through a block of code while a specified condition is true

```js
// For Loop

for (i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i] + "<br>";
}

// all FOR parts are optional
var i = 0;
var len = cars.length;
for (;;) {
    text += cars[i] + "<br>";
    if(++i >= len) {
        break;
    }
}

// For/In Loop

var person = {name:"Alex", lastname:"Wu", age:32};

var text = "";
for (var x in person) {
    text += person[x];
}

// While

while (i < 10) {
    text += "The number is " + i;
    i++;
}

// Do/While

do {
    text += "The number is " + i;
    i++;
}
while (i < 10);
```

> The **break** statement "jumps out" of a loop.
>
> The **continue** statement "jumps over" one iteration in the loop.

## Errors

```js
try {
    // Block of code to try

    // you can throw a custom exception
    if(isNaN(x)) throw "not a number";
}
catch(err) {
    // Block of code to handle errors
    // err - Error object with two properties: name and message
}
finally {
    // Block of code to be executed regardless
    // of the try / catch result
}
```

## Functions

## Objects

## Scopes

* Local scope
* Global scope

JavaScript has function scope: Each function creates a new scope - LOCAL scope.

In HTML, the global scope is the *window* object. *All global variables belong to the window object*

**Variables lifetime**:

The lifetime of a JavaScript variable starts when it is declared.

Local variables are deleted when the function is completed.

In a web browser, global variables are deleted when you close the browser window (or tab), but remain available to new pages loaded into the same window.

**Strict mode**:

Strict mode is declared by adding `"use strict";` to the beginning (ONLY) of a script or a function.

*Not Allowed in Strict Mode*:

* Using a variable/object, without declaring it (global variables are not created automatically)
* Deleting a variable (or object)
* Deleting a function
* Duplicating a parameter name in function args
* Octal numeric literals - `var x = 010;`
* Octal escape characters - `var x = "\010";`
* Writing to a read-only property
* Writing to a get-only property
* Deleting an undeletable property - `delete Object.prototype;`
* The string "eval" cannot be used as a variable - `var eval = 3.14;`
* The string "arguments" cannot be used as a variable
* The `with` statement

## Hoisting

**Hoisting** is JS's default behavior of moving declarations to the top of the current scope.

In JS a variable can be used before it has been declared.

```js
var y;
x = 5; // Assign 5 to x
y = x;
var x; // Declare x
```

> JavaScript only hoists declarations, not initializations

```js
var x = 5; // Initialize x
var res;

res = y; // y - undefined

var y = 7; // Initialize y
```

## Best Practices

1. Always declare all variables at the beginning of every scope

**Style guides**:

* [W3Schools - JavaScript Style Guide and Coding Conventions](https://www.w3schools.com/js/js_conventions.asp)

## HTML DOM

### Events

`<button onclick="displayDate()">The time is?</button>`
