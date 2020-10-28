# Python Object Oriented Programming

## Properties

```python

##### Example #1: Using property() method #####

class Alphabet:
    def __init__(self, value):
        self._value = value

    # getting the values
    def getValue(self):
        print('Getting value')
        return self._value

    # setting the values
    def setValue(self, value):
        print('Setting value to ' + value)
        self._value = value

    # deleting the values
    def delValue(self):
        print('Deleting value')
        del self._value

    value = property(getValue, setValue, delValue, )

# passing the value
x = Alphabet('GeeksforGeeks')
print(x.value)

x.value = 'GfG'

del x.value

##### Example #2: Using @property decorator #####

class Alphabet:
    def __init__(self, value):
        self._value = value

    # getting the values
    @property
    def value(self):
        print('Getting value')
        return self._value

    # setting the values
    @value.setter
    def value(self, value):
        print('Setting value to ' + value)
        self._value = value

    # deleting the values
    @value.deleter
    def value(self):
        print('Deleting value')
        del self._value

```

## Abstract classes

By default, Python does not provide abstract classes.

Python comes with a module which provides the base for defining Abstract Base classes(ABC) and that module name is ABC. ABC works by decorating methods of the base class as abstract and then registering concrete classes as implementations of the abstract base. A method becomes abstract when decorated with the keyword `@abstractmethod`

```python
from abc import ABC, abstractmethod

class Human(ABC):
    def do(self):
        print("Abstract Base Class")

    @abstractmethod
    def make(self):
        pass

class Worker(Human):
    def do(self):
        super().do()
        print("subclass ")

    def make(self):
        print('make of the worker')

# Driver code
w = Worker()
w.do()

# Abstract properties

class parent(ABC):
    @abc.abstractproperty
    def geeks(self):
        return "parent class"
class child(parent):

    @property
    def geeks(self):
        return "child class"
```