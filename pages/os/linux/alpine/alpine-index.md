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

## Check ports

To check if a remote port is open from an Alpine Linux system, use the `nc (netcat)` command with the `-zv` flags,
followed by the target IP address and the port number you want to check; for example, to check if port 80 is open on "example.com", run: `nc -zv example.com 80`. Range of ports can be used to, e.g. `80-83`

Explanation:

* `nc`: This is the netcat command used to open network connections.
* `-z`: This flag tells nc to only attempt a connection and not send any data, effectively just checking if the port is open.
* `-v`: This flag enables verbose output, which will show you a message confirming if the connection was successful.

If need to install `apk add netcat`
