# Data Types

```js
typeof "John"              // Returns "string"
typeof 3.14                // Returns "number"
typeof (3)                 // Returns "number"
typeof (3 + 4)             // Returns "number"
```

## Primitive Data

The typeof operator can return one of these primitive types:

* string
* number
* boolean
* undefined

The typeof operator can return one of two complex types:

* function
* object

The typeof operator returns object for both objects, arrays, and null.

The typeof operator does not return object for functions.

## Undefined 
Variable without a value, has the value undefined. The typeof is also undefined

## Null
In JavaScript null is "nothing". It is supposed to be something that doesn't exist.

Unfortunately, in JavaScript, the data type of null is an object.

**Difference Between Undefined and Null**

Undefined and null are equal in value but different in type:
```js
typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true
```

## String

### Properties

**length** - `var txt="abc"; var len = txt.length;`

### Methods

> All string methods return a new string. They don't modify the original string.

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
res = str.slice(-12, -6); // Banana
res = str.slice(7); // Banana, Kiwi

res = str.substring(7, 13); // Banana

res = str.substr(7, 6); // Banana
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

## Numbers

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
var x =  2 / 0;         // x will be Infinity
var y = -2 / 0;         // y will be -Infinity

typeof Infinity;        // returns "number"
```

By default, JavaScript displays numbers as base 10 decimals.

But you can use the toString() method to output numbers as base 16 (hex), base 8 (octal), or base 2 (binary)

```js
var myNumber = 128;
myNumber.toString(16);  // returns 80
myNumber.toString(8);   // returns 200
myNumber.toString(2);   // returns 10000000
```

### Methods

* **toExponential()** returns a string, with a number rounded and written using exponential notation
* **toFixed()** returns a string, with the number written with a specified number of decimals
* **toPrecision()** returns a string, with a number written with a specified length

```js
var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0

// toFixed()
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000

// toPrecision()
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600
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

## Random

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

## Dates

* Dates written as numbers, specifiy the number of milliseconds since January 1, 1970, 00:00:00
* JavaScript counts months from 0 to 11. January is 0. December is 11
* In JavaScript, the first day of the week (0) means "Sunday", even if some countries in the world consider the first day of the week to be "Monday"

```js
new Date()
new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)
```

### Date Formats

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

### Date Methods

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

## Arrays

# Functions

# Objects

# Scopes

* Local scope
* Global scope

JavaScript has function scope: Each function creates a new scope - LOCAL scope.

**Strict mode** - Global variables are not created automatically in "Strict Mode".

In HTML, the global scope is the *window* object. *All global variables belong to the window object*

**The Lifetime of JavaScript Variables**

The lifetime of a JavaScript variable starts when it is declared.

Local variables are deleted when the function is completed.

In a web browser, global variables are deleted when you close the browser window (or tab), but remain available to new pages loaded into the same window.

# HTML DOM

## Events

`<button onclick="displayDate()">The time is?</button>`
