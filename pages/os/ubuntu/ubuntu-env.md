# Ubuntu

## Command line tools

* gnome-system-monitor - system monitor like task manager in Windows

## UI Tools

* Nautilus file manager

## Proxy configuration

Install `dconf-editor` and open `dconf-editor -> system -> proxy`, than add your hosts to `ignore-hosts` on this window and that's all.

Another way with gconftool

```bash
gconftool --recursive-list /system/http_proxy

# get the current contents of the /system/http_proxy/ignore_hosts
gconftool -g  /system/http_proxy/ignore_hosts

# Next copy its contents into the next command and add the host you want to add.
gconftool  --type list --list-type string  -s /system/http_proxy/ignore_hosts '[localhost,127.0.0.0/8,myhost]'
```

## Powershell

Install via snap
```bash
# Install PowerShell
sudo snap install powershell --classic
```

[Install on Ubuntu 16.04](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7#ubuntu-1604)

## Applications

### RDP to Windows

```bash
sudo apt install snapd
sudo snap install remmina
```

### RDP from Windows

```bash
sudo apt install xrdp
sudo systemctl enable --now xrdp
# firewall
sudo ufw allow from any to any port 3389 proto tcp
```

[guide](https://linuxconfig.org/ubuntu-20-04-remote-desktop-access-from-windows-10)

### Skype

```bash
wget https://go.skype.com/skypeforlinux-64.deb
sudo dpkg -i skypeforlinux-64.deb
apt-get update
sudo apt-get install skype
```

### Mail client

#### Outlook calendar

[Sync my Exchange calendar](https://askubuntu.com/questions/562498/how-do-i-sync-my-exchange-calendar-in-ubuntu-thunderbird-lightning)