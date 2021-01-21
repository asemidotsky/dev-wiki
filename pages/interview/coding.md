## Useful functions c#

* Linq, Aggregate functions
* Strings
* Arrays/Lists

**Strings**
```csharp
// string with repeating character
new String(char c, int count)
```

**LINQ**
```csharp
List<int> arr = new List<int>() { 1, 5, 7, 10 } ;

var max = arr.Max();
var min = arr.Min();
var count = arr.Count();

arr.Where(e => e > max).Count();
```

Common hints:
* Beware of integer overflow! Use 64-bit Integer.