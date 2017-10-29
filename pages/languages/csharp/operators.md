It is not complete reference of the c# operators.
I dump here only operators you can often forget or don't remember how they are called.

# Operators

## Primary Operators

Expression   | Description
------------ | -------------
x?.y | Conditional member access
a?[x]| Conditional array and indexer access
new T(...){...}|Object creation with initializer
new {...}|Anonymous object initializer
new T[...]|Array creation
typeof(T)|Obtain System.Type object for T
default (T)|Obtain default value of type T
delegate {}|Anonymous function (anonymous method)
x is T|Return true if x is a T, false otherwise
x as T|Return x typed as T, or null if x is not a T
(T x) => y | Anonymous function (lambda expression)

## Logical, Conditional, and Null Operators

Category     | Expression   | Description
------------ | -------------| ------------
Logical AND | x & y |	Integer bitwise AND, Boolean logical AND
Logical XOR | x ^ y | Integer bitwise XOR, boolean logical XOR
Logical OR | x \| y	| Integer bitwise OR, boolean logical OR
Conditional AND | x && y | Evaluates y only if x is true
Conditional OR | x \|\| y | Evaluates y only if x is false
Null coalescing | x ?? y | Evaluates to y if x is null, to x otherwise
Conditional | x ? y : z | Evaluates to y if x is true, z if x is false
Bitwise negation | ~x | Bitwise negation


## Math operators

Operator     | Description
------------ | -------------
% | Remainder

## Shift operators

Operator     | Description
------------ | -------------
x << y | Shift left
x >> y | Shift right

## Sole ternary operator

```csharp
var success = x == 10 ? true: false;
```

# Overloadable Operators

[Read in C# Guide](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/overloadable-operators)
