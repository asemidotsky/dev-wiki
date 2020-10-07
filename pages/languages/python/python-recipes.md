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