# Great design guidelines

## The UNIX philosophy

According to Doug McIlroy, inventor of the Unix pipe (head of the Bell
Labs CSRC) the Unix philosophy is the following:

* Write programs that do one thing and do it well.
* Write programs to work together.
* Write programs to handle text streams, because that is a universal interface.

## Project structure guidelines

1. Organize your Files Around Features, Not Roles
1. Don't get hung up on an exact like-for-like structure but do **justify your structure using consistency, maintainability, and efficiency in mind**

## Configuration management

* Load your deployment specific configurations from environment variables and never add them to the codebase as constants. These are the configurations that can vary between deployments and runtime environments, like CI, staging or production. Basically, you can have the same code running everywhere.
* You should never group your config together into "environment" specific files, like config/production.js for production. It doesn't scale well as your app expands into more deployments over time

## Tests

* Your tests should live together with the tested modules, keeping them in sync.

## Security

* One of the best practices around handling configuration is to have secret injected via an environment variable into your application

## Links

* [12factor](https://12factor.net/)
* [Architecture decision record (ADR)](https://github.com/joelparkerhenderson/architecture_decision_record)