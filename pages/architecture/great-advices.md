# Great advices about software design

## How to write software

### The UNIX philosophy

According to Doug McIlroy, inventor of the Unix pipe (head of the Bell
Labs CSRC) the Unix philosophy is the following:
* Write programs that do one thing and do it well.
* Write programs to work together.
* Write programs to handle text streams, because that is a universal interface.

## Project structure
> Organize your Files Around Features, Not Roles

## Configuration management

> Load your deployment specific configurations from environment variables and never add them to the codebase as constants. These are the configurations that can vary between deployments and runtime environments, like CI, staging or production. Basically, you can have the same code running everywhere.

> You should never group your config together into "environment" specific files, like config/production.js for production. It doesn't scale well as your app expands into more deployments over time

## Tests

> Your tests should live together with the tested modules, keeping them in sync.

# Links

* [12factor](https://12factor.net/)