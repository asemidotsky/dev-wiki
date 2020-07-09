https://www.saltstack.com/

## Popular commands

```bash
# execute module function
salt \*minon_name_pattern <module>.<func_name> -l debug

# execute remote command
salt \*minion cmd.run 'docker ps'

# apply state
salt \*minion state.apply utils.sync_all

# show all minions
ls -1 /var/cache/salt/master/minions

# or
salt-run manage.up
salt-run manage.status
salt-run manage.down

# will list all minions that whose public keys you've accepted on your master.
salt-key -L

# minion versions
salt-run manage.versions
```

## What is Salt ?

Salt is for:
* System Management (install packages)
* Configuration Management

Terminology:
* Master - the centrilized machine
* Syndication master
* Minions - all host (master is minion too)
* Targeting options
* Globs to matching targets

_States_ are a way to manage configurations across all of your minions. A salt state defines how you want a given host to be configured.

This data coming from the minion (e.g., operating system) is called _grains_. But there is another type of data: _pillar_ data. While grains are advertised by the minion back to the master, pillar data is stored on the master and is made available to each minion individually; that is, a minion cannot see any pillar data but its own. For the moment, you can think of grains as metadata about the host (e.g., number of CPUs), while pillar is data the host needs (e.g., a database password). In other words, a minion tells the master what its grains are,while the minion asks the master for its pillar data.

- Grains are data about the minions, stored on the minions.
- Pillar is data about the minion stored on the master.


The central master can distribute files that describe how a system should be configured. As we’ve discussed, these descriptions are called _states_, and they are stored in simple YAML files called _SLS_ (salt states).

## Configuration Management

```yaml
webserver_main_index_file:
  file.managed:
    - name: /var/www/index.html
    - source: salt://webserver/main.html
```

Salt comes with a number of built-in state modules to help create the descriptions that define how an entire host should be configured. The _file_ state module is just a simple introduction.

You may have noticed that when we installed the package using the execution module directly, we gave a target host: every host (*). But when we showed the state, there was no target minion given. In the state system, there is high-level abstraction that specifies which host should have which states. This is called the **top file**. While the states give a _recipe_ for how a host should look, the top file says which hosts should have which recipes.

## Topology Options

Thus far, we have discussed Salt only as a single master with a number of connected minions. However, this is not the only option. You can divide up your minions and have them talk to an intermediate host called a _syndication master_.

You may even decide that you only want to use Salt’s execution modules and states without any master at all. It is a masterless minion setup.

Lastly, you may want to allow some users to harness the power Salt provides without giving them access directly to the main master. The _peer publisher_ system allows you to give special access to some minions. This could allow you to let developers run deployment commands without giving them access to the entire set of tools that Salt provides.