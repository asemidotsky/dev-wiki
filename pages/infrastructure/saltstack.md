## Resources

* https://www.saltstack.com/
* [SaltStack Get Started](https://docs.saltstack.com/en/getstarted/)
* [SaltStack Fundamentals](https://docs.saltstack.com/en/getstarted/fundamentals/)
* [SaltStack Configuration Management](https://docs.saltstack.com/en/getstarted/config/index.html)
* [SALT IN 10 MINUTES](https://docs.saltstack.com/en/master/topics/tutorials/walkthrough.html)
* [Execution Modules](https://docs.saltstack.com/en/latest/ref/modules/all/index.html)

{% raw %}

## Salt files

**Salt master**:
- master config is located in `/etc/salt/`
- salt states base folder `/srv/salt`

## Popular commands

```bash
# execute module function
salt \*minon_name_pattern <module>.<func_name> -l debug

# execute remote command
salt \*minion cmd.run 'docker ps'

# apply state
salt \*minion state.apply utils.sync_all

# show all states
salt '*' state.show_sls '*' # on master
salt-call state.show_sls '*' # on minions

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

# -----------------

salt '*' cmd.run 'ls -l /etc'
salt '*' pkg.install vim

salt '*' network.interfaces

# TARGETING
##  with grains
salt -G 'os:Ubuntu' test.ping
## combined
salt -C 'G@os:Ubuntu and minion* or S@192.168.50.*' test.ping


# Copy file from master to minion
copy_my_files:
  file.managed:
    - name: /etc/nginx/nginx.conf
    - source: salt://nginx.conf
    - makedirs: True

deploy linter configuration:
  file.recurse:
    - name: "/usr/local/linter"
    - source: salt://devtools/files/linter
    - makedirs: True
    - replace: True
    - clean: True

sudo salt-cp '*' /srv/salt/test.txt /home/username/test.txt
```

**Changing command output format**

The default output format used for most Salt commands is called the _nested outputter_, but there are several other outputters that can be used to change the way the output is displayed. For instance, the _pprint outputter_ can be used to display the return data using Python's pprint module:
`salt myminion grains.item pythonpath --out=pprint`

### Salt-call

The examples so far have described running commands from the Master using the **salt** command, but when troubleshooting it can be more beneficial to login to the minion directly and use **salt-call**.

Doing so allows you to see the minion log messages specific to the command you are running (which are not part of the return data you see when running the command from the Master using salt), making it unnecessary to tail the minion log.

`salt-call` does not need the salt-minion process to be running to work. It fetches the states from the master and executes them ad hoc

### Salt master

Uses ports 4505 (Publisher) and 4506 (Request Server).

```bash
# start salt master process
systemctl start salt-master
# or
service salt-master start

# To list the keys that are on the master
salt-key -L

# show minion key
salt-key -f <minion_id>

# approve minion key
salt-key -a <minion_id>

# delete minion keys
salt-key -d <minion_id>
```

### Minion

[Install](https://repo.saltstack.com/#ubuntu)

```bash
# show minion's public key fingerprint
salt-call key.finger --local

# to run minion in debug mode.
# don't forget to stop salt-minion service before:
# sudo systemctl stop salt-minion
sudo salt-minion -l debug
```

Minion config files:
* `/etc/salt/minion`
* `/etc/salt/minion_id` - minion id

Another quick test you can run to test communication between your minion and master is to execute your test from the minion: `sudo salt-call test.ping`

### Debug state

```bash
# inside sls file
{%- do salt.log.error('testing jinja logging') -%}

# debug state
salt \*minion --output=yaml state.show_sls test.nop

#or
salt-call -l debug state.apply yourslsfile test=True
salt-call --output=yaml state.show_sls yourslsfile
```

debug.sls
```yaml
test:
  test.nop:
  - user: {{ grains.username }}
  - nested:
      foo: bar
```

### Salt upgrade

#### Minion upgrade

```bash
# to get a list of what version of salt your minions are running
sudo salt \* test.version
# or
sudo salt-run manage.versions

# to upgrade
sudo salt \* pkg.install salt-minion refresh=True
sudo salt \* cmd.run 'apt-get -y install salt-minion'
```


## What is Salt ?

Salt is for:
* System Management (install packages)
* Configuration Management

Terminology:
* Master - the centrilized machine
* Syndication master
* Minions - all hosts (master is minion too)
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

## Grains

Salt uses a system called [Grains](https://docs.saltstack.com/en/master/topics/targeting/grains.html#targeting-grains) to build up static data about minions. This data includes information about the operating system that is running, CPU architecture and much more. The grains system is used throughout Salt to deliver platform data to many components and to users.

Grains can also be statically set, this makes it easy to assign values to minions for grouping and managing.

A common practice is to assign grains to minions to specify what the role or roles a minion might be. These static grains can be set in the minion configuration file or via the grains.setval function.

## States

## Pillars

```bash
# refresh
salt '*' saltutil.refresh_pillar
```
Salt pillar keys are available in a dictionary in Salt states:

```yaml
vim installed:
  pkg.installed:
    - name: {{ pillar['editor'] }}
```

Pass pillar in command line:
```bash
salt '*' state.apply ftpsync pillar='{"ftpusername": "test", "ftppassword": "12121"}'
```

{% endraw %}

