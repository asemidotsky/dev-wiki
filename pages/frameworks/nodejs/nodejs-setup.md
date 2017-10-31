# Ubuntu setup

## Install Using a PPA

```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

# The PPA will be added into your APT configuration, and your local package cache will be automatically updated. After you run the setup script from NodeSource, you can then use the previous steps to install the Node.js package with APT

sudo apt-get install nodejs
```

**Note:** The Node.js package contains the Node.js binary as well as npm, so you don't need to install npm separately. However, in order for some npm packages to work (such as those that require building from source), you will need to install the build-essentials package.

```bash
sudo apt-get install build-essential
```

# Windows setup