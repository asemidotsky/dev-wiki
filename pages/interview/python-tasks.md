# Python Interview Tasks

## 1. Network manager

You need to design program with next python modules:

- Network module
- Firewall module
- Router module
- Main module

Use https://vscode.dev/ as your IDE.

Modules

- Network module:
  - Define abstract interface of NetworkDevice.
  - This entity should have name, manufactured date and type properties. Type can have only next values: Router, Firewall, Switch
  - Network entity has next operations:
    - `deploy` with one parameter - environment name
    - `start` with delay parameter, what specify delayed start time
    - `restart`
  - Implement simple `NetworkRuleValidator` service what has one method `validate` with single parameter of type `NetworkRule`. Simulate validation as summarazing all numbers between 1 and length of the rule name. return this value from validate method.
- Firewall module:
  - Define Firewall class which is NetworkDevice
  - Implement network entity operations and add one more abstract operation - `apply firewall rules`
  - Implement 2 different type of firewalls: PaloAlto and OpnSense
  - Firewall has to use NetworkRuleValidator for rule validation when `deploy` method is called
- Router module:
  - Implement a few different routers as you wish. Router must have routing table.

In main module create 5 firewalls (different type) and 3 routers. Store them in dictionary where dictionary key is network entity name and value is whole network instance.
Loop and print type and name of each network entity. Convert dictionary to array of objects in most elegant way.
