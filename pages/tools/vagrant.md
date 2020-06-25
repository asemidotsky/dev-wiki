Vagrant is a tool for building and managing virtual machine environments in a single workflow.

```bash
vagrant init hashicorp/bionic64
vagrant up

vagrant ssh
vagrant destroy

# provision
vagrant reload --provision

vagrant share
# before share install plugin:
vagrant plugin install vagrant-share

# teardown
vagrant suspend
vagrant halt
vagrant destroy
```

[Configure synced folders](https://www.vagrantup.com/docs/synced-folders/basic_usage)