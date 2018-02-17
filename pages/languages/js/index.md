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

## Dates

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
