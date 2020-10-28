## Books & Resources

* [Python Recipes](python-recipes)
* [Python OOP](python-oop)

Docs
* [Type hints cheat sheet (Python 3)](https://mypy.readthedocs.io/en/latest/cheat_sheet_py3.html)
* [Data Structures](https://docs.python.org/3/tutorial/datastructures.html)
* [The Python Standard Library](https://docs.python.org/3/library/)
* [Idioms and Anti-Idioms in Python](https://docs.python.org/3.1/howto/doanddont.html)
* [Python Design Patterns](https://www.geeksforgeeks.org/python-design-patterns/?ref=lbp)

Books
* Python Succinctly book

Surveys
* [Python Developers Survey 2018](https://www.jetbrains.com/research/python-developers-survey-2018/#development-tools)

## Frameworks, libs

* [Django](https://www.djangoproject.com/)
* [FastAPI](https://fastapi.tiangolo.com/)

## Environment

PYTHONPATH env var

Add Pyhton path and python\Scripts to the Path variable.

pip install:
```
python -m pip install -U pip
```

## Code Editor

VSCode:
* Install Python extension
* Formatting: "autopep8"

## Pip package manager

```bash
# show packages
pip list -v
# show package info
pip show <package_name>
```

## Tests

Mocks
* [Mocking functions Part I: Better Unit Testing in Python with pytest-mock](https://medium.com/analytics-vidhya/mocking-in-python-with-pytest-mock-part-i-6203c8ad3606)
* [Mocking Functions Part II: Writing Better Tests in Python with pytest-mock](https://medium.com/@durgaswaroop/writing-better-tests-in-python-with-pytest-mock-part-2-92b828e1453c)
* [pytest: How to mock in Python](https://changhsinlee.com/pytest-mock/)
* [Python – Getting Started with Python Mock](https://myadventuresincoding.wordpress.com/2011/02/26/python-python-mock-cheat-sheet/)
* [An Introduction to Mocking in Python](https://www.toptal.com/python/an-introduction-to-mocking-in-python)
* [unittest.mock — mock object library](https://docs.python.org/3/library/unittest.mock.html)

## Variables & Types

```python
vegetable = 'onion'
sentence_in_double = "He said, \"That's some great tasting asparagus!\""

String indexes started from 0
first_char = vegetable[0]
```

### Strings

* Concatenation +
* upper()
* lower()
* print('-' * 12) - repeating string
* str()
* slice, a part of the string `'whale'[1:3]`
* rstrip() - remove any trailing white space

Formatting

* `print('{} {} {}'.format('Python', 'is', 'fun.'))`
* `print('{0:9} | {1:8}'.format('Onions', 10))` - format specification
* `print('{0:9} | {1:<8}'.format('Vegetable', 'Quantity'))` - use < for left, ^ for center, and > for right
* `print('{0:9} | {1:<8.2f}'.format('Asparagus', 2.33333))` - floats formatting

Functions

* print()
* len()
* str()
* `vegetable = input('Enter a name of a vegetable: ')` - getting user input

### Numbers, Math

* `temperature = 98.6`
* `3 % 2 = 1` - modulo operator
* `2**4 = 16` - exponentiate, raising to the power of

Functions

* int()
* float()

### Boolean

```python
True or False

and, Or, Not
# the order is Not, And, Or

==, >, >=, <, <=, !=

if age >= 35:
    print('Too old')
elif age > 25:
    print('More than 25')
else:
    print('Young')
```

### Comments

```python
# Single line comment

""" The comment starts here
This is another line
Here is the last line """
```

## Functions

[Built-in functions](https://docs.python.org/3/library/functions.html#func-list)

```python
# function defenition
def say_hello(firstName, lastName):
    print('Hello {} {}'.format(lastName, firstName))

# function call
say_hello('Alex', 'King')

# call with named parameters, the order of parameters is not important
say_hello(lastName = 'Carberry', firstName = 'Hank')

# default parameters
def say_hello(firstName, lastName = 'Petrov'):

# docstring - info about function
def say_hello(first, last='Carberry'):
    """Say hello."""
    print('Hello {} {}!'.format(first, last))

# using in help
help(say_hello)

# return statement for functions
def even_or_odd(number):
    """Determine if a number is odd or even."""
    if number % 2 == 0:
        return 'Even'
    else:
        return 'Odd'

even_or_odd_string = even_or_odd(9)
```

## [Lists](https://docs.python.org/3/tutorial/datastructures.html)

```python
animals = ['toad', 'lion', 'seal']
print(animals[0])

animals[0] = 'sheep'

# list length
len(animals)

# the last item in the list
animals[-1]

# add item
animals.append('fox')

# add many items
animals.extend(['fox', 'owl'])

# insert to the position
animals.insert(2, 'owl')

# slice
some_animals = animals[1:4]
first_two_again = animals[:2]
last_two_again = animals[-2:]

# finding item
# then animals.index('lion') would return the index of the first occurrence of lion. If the value is not discovered on the list, then Python will raise an exception.
lion_index = animals.index('lion')

# sort
sorted_animals = sorted(animals)

animals.sort()

# list concatenation
animals = ['toad', 'lion', 'seal']
more_animals = ['fox', 'owl', 'whale']
all_animals = animals + more_animals

# ranges (output 2,3)
for number in range(2, 4):
    print(number)

# range with the step equals 2
for number in range(0, 10, 2):
```

## Dictionaries

[more](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)

```python
contacts = {
    'David': '555-0123',
    'Tom': '555-5678'
}
contacts['David'] = '555-0000'
davids_phone = contacts['David']

# remove item
del contacts['David']

# check key existence in the dictionary
if 'David' in contacts.keys():

# find value in the dictionary
'555-5678' in contacts.values()

# loop through
for contact in contacts
for key_variable, value_variable in dictionary_name.items():

# nesting dictionaries
contacts = {
 'David': {
   'phone': '555-0123',
   'email': 'david@gmail.com'
 },
 'Tom': {
   'phone': '555-5678',
   'email': 'tom@gmail.com'
 }
}

# looping 1
for k, v in contacts.items():
    print(k, v)
```

## Tuples

A tuple is an immutable list, which means that once it has been defined the values in the tuple cannot be changed.

```python
tuple_name = (item_1, item_2, item_N)
tuple_name = (item_1,)

# creating tuple from list
tuple_name = tuple([1, 2, 3])

# creating list from tuple
list = list((1, 2, 3))

# loop through
for month in months_of_the_year:

# tuple assigment
(jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec) = months_of_the_year

def high_and_low(numbers):
  ....
  return (highest, lowest)

(highest, lowest) = high_and_low(lucky_numbers)

contacts = [('David', '555-0123'), ('Tom', '555-5678')]
for (name, phone) in contacts:
  print("{}'s phone number is {}.".format(name, phone))
```

## Sets

A set is an unordered collection with no duplicate elements. Basic uses include membership testing and eliminating duplicate entries. Set objects also support mathematical operations like union, intersection, difference, and symmetric difference.

```python
basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
>>> 'orange' in basket # fast membership testing

>>> # Demonstrate set operations on unique letters from two words
...
>>> a = set('abracadabra')
>>> b = set('alacazam')
>>> a                                  # unique letters in a
{'a', 'r', 'b', 'c', 'd'}
>>> a - b                              # letters in a but not in b
{'r', 'd', 'b'}
>>> a | b                              # letters in a or b or both
{'a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'}
>>> a & b                              # letters in both a and b
{'a', 'c'}
>>> a ^ b                              # letters in a or b but not both
{'r', 'd', 'b', 'm', 'z', 'l'}

# list comprehensions
>>> a = {x for x in 'abracadabra' if x not in 'abc'}
>>> a
{'r', 'd'}
```

## Exceptions

* [HandlingExceptions](https://wiki.python.org/moin/HandlingExceptions)
* [Exceptions](https://docs.python.org/3/library/exceptions.html)

```python
animals = ['toad', 'lion', 'seal']
try:
    sheep_index = animals.index('sheep')
except:
    sheep_index = 'No sheep found.'
print(sheep_index)
```

## Flow

### Conditions

```python
if age >= 35:
    print('Too old')
elif age > 25:
    print('More than 25')
else:
    print('Young')
```

### For, While

* [ForLoop](https://wiki.python.org/moin/ForLoop)
* [WhileLoop](https://wiki.python.org/moin/WhileLoop)
* [Sorted](https://docs.python.org/3/library/functions.html#sorted)

```python
animals = ['toad', 'lion', 'seal']

# For Loop
for animal in animals:
    print(animal.upper())

# While
index = 0
while index < len(animals):
    print(animals[index])
    index += 1

# Python does not have a “++” increment operator.
```

## File I/O

[Core tools for working with streams](https://docs.python.org/3/library/io.html)

`open(path_to_file, mode)`

File open modes:

| Mode | Description |
|------|-------------|
| r    | Open for reading (default) |
| w    | Open for writing, truncating the file first |
| x    | Create a new file and open it for writing |
| A    | Open for writing, appending to the end of the file if it exists |
| b    | Binary mode |
| t    | Text mode (default) |
| +    | Open a disk file for updating (reading and writing) |

```python
hosts = open('/etc/hosts')
hosts_file_contents = hosts.read()

# current position in the file
hosts.tell()

# move position
hosts.seek(0)

# close file
hosts.close()

# closed attribute of the file object
if not hosts.closed:
    hosts.close()

# automatically closing file
with open('/etc/hosts') as hosts:
    print('File closed? {}'.format(hosts.closed))
    print(hosts.read())

# reading one line at a time
with open('file.txt') as the_file:
    for line in the_file:
        print(line)

# check open mode
the_file.mode

# writing to file
with open('file2.txt', 'w') as the_file:
    the_file.write('This text will be written to the file.')
```

## Modules

```python
import time
print(time.asctime())

# import specific method
from time import asctime
print(asctime())

from time import asctime, sleep

# Peeking Inside a Module
import time
dir(time)

# The Module Search Path
import sys
for path in sys.path:
    print(path)

# add new path
sys.path.append('/Users/david/python')

# Using main
def say_hello():
    print('Hello!')

def main():
    print('Hello from say_hello3.py!')
    say_hello()

if __name__ == '__main__':
    main()
```
