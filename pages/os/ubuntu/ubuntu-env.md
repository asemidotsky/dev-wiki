# Command line tools

* gnome-system-monitor - system monitor like task manager in Windows

# Proxy configuration

Install `dconf-editor` and open `dconf-editor -> system -> proxy`, than add your hosts to `ignore-hosts` on this window and that's all.

Another way with gconftool

```bash
gconftool --recursive-list /system/http_proxy 

# get the current contents of the /system/http_proxy/ignore_hosts
gconftool -g  /system/http_proxy/ignore_hosts  

# Next copy its contents into the next command and add the host you want to add.
gconftool  --type list --list-type string  -s /system/http_proxy/ignore_hosts '[localhost,127.0.0.0/8,myhost]'
```

# Applications

## RDP to Windows

```bash
sudo apt install snapd
sudo snap install remmina
```

## Skype

## Mail client

### Outlook calendar

https://askubuntu.com/questions/562498/how-do-i-sync-my-exchange-calendar-in-ubuntu-thunderbird-lightning

