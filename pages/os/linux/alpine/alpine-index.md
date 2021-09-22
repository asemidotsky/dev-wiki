* [Download](https://alpinelinux.org/downloads/)
* [Alpine pacakges](https://pkgs.alpinelinux.org/packages)

## Configure network

Config file `/etc/network/interfaces`

DHCP configuration:
```bash
auto eth0
iface eth0 inet dhcp
```

Changes made to `/etc/network/interfaces` can be activated by running:
```
/etc/init.d/networking restart
```

[more](https://wiki.alpinelinux.org/wiki/Configure_Networking)

## SSH server

[Setting up a ssh-server](https://wiki.alpinelinux.org/wiki/Setting_up_a_ssh-server)