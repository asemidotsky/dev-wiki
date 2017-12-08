[Tools](linux-tools)

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

# Work with programms, packages


```bash
dpkg-query -L nodejs
```
will list the full path to every file belonging to the nodejs package

# Links

* [SSH/TransferFiles](https://help.ubuntu.com/community/SSH/TransferFiles)
