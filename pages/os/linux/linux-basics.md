[Tools](linux-tools)

# Connect

```bash
ssh remote_username@remote_host

# to exit back into your local session
exit
```

# Generate SSH Keys

SSH keys should be generated on the computer you wish to log in from. This is usually your local computer.

```bash
$ ssh-keygen -t rsa
```

Press enter to accept the defaults. Your keys will be created at ~/.ssh/id_rsa.pub and ~/.ssh/id_rsa.

Change into the .ssh directory by typing: 

```
cd ~/.ssh
```

You can copy the public key to the remote server by issuing this command:

```
ssh-copy-id remote_username@remote_host
```

## Adding SSH key to the ssh-agent

Start the ssh-agent in the background.

```bash
eval "$(ssh-agent -s)"
```

Add your SSH private key to the ssh-agent. If you created your key with a different name, or if you are adding an existing key that has a different name, replace *id_rsa* in the command with the name of your private key file.

```bash
ssh-add ~/.ssh/id_rsa
```

# SSH

```bash
# if you changed the port number in your sshd configuration
$ ssh -p port_number remote_host

# execute a single command on a remote system
$ ssh remote_host command_to_run
```

# Users

# Groups
```bash
# create user group
sudo groupadd sales

# add user to group
sudo usermod -a -G sales alex

# see who is in group
grep sales /etc/group
# or
sudo apt-get install members
members sales

# change group for directory
chgrp sales sales.report
```


# Permissions


```bash
# see folder items permissions
ls -la
```


# Kill process

```bash
# to find out all running processes in the system
$ ps aux | grep firefox

# To end a process, enter:
$ kill -s 15 PID-HERE
$ kill -s 15 2358

#OR send signal 9 (SIGKILL) which is used for forced termination to PID 3553:
$ kill -9 PID-HERE
$ kill -9 3553
```
[more](https://www.cyberciti.biz/faq/stop-process-ubuntu-linux-command/)

# Run script as another user

```bash
su - anotherusername -c "<command>"

```

# Mount windows network share folder

```bash
# 1. mount

sudo mount -t cifs //192.168.1.1/win-share-name /mnt/ubuntu-dir-name -o username=USERNAME,password=PASSWORD,iocharset=utf8,sec=ntlm

# win-share-name - share name on windows
# ubuntu-dir-name - directory on ubuntu

# 2. unmount
umount /mnt/ubuntu-dir-name

# 3. find mounted shares
mount -v | grep 'type cifs'

```
[more](https://wiki.ubuntu.com/MountWindowsSharesPermanently)

# Extract zip

```bash
tar -xvzf robomongo-0.9.0-linux-x86_64-0786489.tar.gz
```

# Transfer files to server

[Using SFPT](https://www.computerhope.com/unix/sftp.htm)

Copy file.txt from current directory to home dir for *semidotsky* user
```bash
sftp semidotsky@192.168.1.1
put file.txt
```

# Get listing on a specific TCP port

Type the following command to see IPv4 port(s), enter: 

`lsof -Pnl +M -i4`

Type the following command to see IPv6 listing port(s), enter: 

`lsof -Pnl +M -i6`

```bash
netstat -tulpn
netstat -npl
```

[more](https://www.cyberciti.biz/faq/find-out-which-service-listening-specific-port/)

# Work with programms, packages


```bash
dpkg-query -L nodejs
```
will list the full path to every file belonging to the nodejs package

## Move programs to background

* CTRL+Z puts a job to the background and you get a bash prompt back
* type `jobs` to seeall jobs
* `bg #` - run job # in background
* `fg #` - bring job with # number to foreground


# Links

* [SSH/TransferFiles](https://help.ubuntu.com/community/SSH/TransferFiles)
