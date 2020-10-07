# Python Recipes

## Invoke super constructor

```python
class Car(object):
    condition = "new"

    def __init__(self, model, mpg):
        self.model = model
        self.mpg = mpg

class ElectricCar(Car):
    def __init__(self, battery_type, model, mpg):
        self.battery_type=battery_type
        super().__init__(model, mpg)

car = ElectricCar('battery', 'ford', 10)
print car.__dict__
```
## Tests

### Mock a class

module_a.py
```python
class B():
    def __init__(self):
        print("The awful B class!!!")

    def get_name(self):
        print("The awful B.get_name() method!!!")


class A():
    def __init__(self):
        self.b = B()

    def is_authorized(self):
        name = self.b.get_name()
        if name == 'admin':
            return True
        else:
            return False
```

module_a_test.py

```python
import unittest
from unittest.mock import patch
from module_a import A

class MyTestCase(unittest.TestCase):

    # patch B class in a_module by a MagicMock instance
    # mock_b_constructor passed to test method
    @patch("module_a.B")
    def test_a(self, mock_b_constructor):
        # B() return value will be the B() instance assigned to a.b property
        mock_b = mock_b_constructor.return_value
        # Now start test:
        a = A()
        # Ok! b is our mock...
        self.assertIs(a.b, mock_b)
        # Not authorized
        self.assertFalse(a.is_authorized())
        mock_b.get_name.return_value = 'admin'
        # Yeah!!! we are admin
        self.assertTrue(a.is_authorized())
        # Sanity check
        mock_b.get_name.return_value = 'guest'
        self.assertFalse(a.is_authorized())
```