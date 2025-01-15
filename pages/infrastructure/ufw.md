# UFW - Uncomplicated Firewall

## UFW integration with Docker

* https://github.com/moby/moby/issues/4737#issuecomment-419705925
* https://stackoverflow.com/questions/30383845/what-is-the-best-practice-of-docker-ufw-under-ubuntu
* https://gist.github.com/rubot/418ecbcef49425339528233b24654a7d

Append the following at the end of `/etc/ufw/after.rules` (replace eth0 with your external facing interface):

```bash
# Put Docker behind UFW
*filter
:DOCKER-USER - [0:0]
:ufw-user-input - [0:0]

-A DOCKER-USER -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT
-A DOCKER-USER -m conntrack --ctstate INVALID -j DROP
-A DOCKER-USER -i eth0 -j ufw-user-input
-A DOCKER-USER -i eth0 -j DROP
COMMIT
```

And undo any and all of:

* Remove `"iptables": "false"` from `/etc/docker/daemon.json`
* Revert to `DEFAULT_FORWARD_POLICY="DROP"` in `/etc/default/ufw`
* Remove any docker related changes to `/etc/ufw/before.rules`

Be sure to test that everything comes up fine after a reboot.

I still believe Docker's out of the box behavior is dangerous and many more people will continue to unintentionally expose internal services to the outside world due to Docker punching holes in otherwise safe iptables configs.

## Allow rules

```bash
# allow traffic from 10.0.0.46 on TCP port 3308.
sudo ufw allow from 10.0.0.46 proto tcp to any port 3308
# to delete this rule
sudo ufw delete allow from 10.0.0.46 proto tcp to any port 3308
sudo ufw delete allow from 100.107.135.155 proto tcp to any port 3308
sudo ufw status
```

## Deny rules

## Logs

`/var/log/ufw.log`
