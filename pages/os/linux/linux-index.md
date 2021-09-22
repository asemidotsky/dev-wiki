# Linux basics

* [Linux for Beginners Book](http://www.linuxtrainingacademy.com/linux)
* [Learning the Shell](http://linuxcommand.org/lc3_learning_the_shell.php)
    * [File system structure](http://linuxcommand.org/lc3_lts0040.php)
* [Tools](linux-tools)
* [Ubuntu desktop](ubuntu-desktop)

## Get test environment

* https://webminal.org/ - it has CentOS distribution
* Use VirtualBox

```bash
# check Ubuntu version
lsb_release -a
cat /etc/os-release

# create file
touch data/file.txt
```

## Connect

```bash
ssh remote_username@remote_host

# to exit back into your local session
exit
```

## Generate SSH Keys

SSH keys should be generated on the computer you wish to log in from. This is usually your local computer.

```bash
ssh-keygen -t rsa
# or
ssh-keygen -m PEM -t rsa -b 4096
```

Press enter to accept the defaults. Your keys will be created at ~/.ssh/id_rsa.pub and ~/.ssh/id_rsa.

Change into the .ssh directory by typing:

```bash
cd ~/.ssh
```

You can copy the public key to the remote server by issuing this command:

```bash
ssh-copy-id remote_username@remote_host
#
ssh-copy-id -i ~/.ssh/id_rsa.pub azureuser@myserver
```

### Adding SSH key to the ssh-agent

Start the ssh-agent in the background.

```bash
eval "$(ssh-agent -s)"
```

Add your SSH private key to the ssh-agent. If you created your key with a different name, or if you are adding an existing key that has a different name, replace *id_rsa* in the command with the name of your private key file.

```bash
ssh-add ~/.ssh/id_rsa
```

## SSH

```bash
# if you changed the port number in your sshd configuration
$ ssh user@remote_host -p port_number

# execute a single command on a remote system
$ ssh user@remote_host command_to_run

# pass ssh password from file (not secure)
sshpass -f /path/to/myfile ssh user@remote_host
```

## Commands

### Command chaining

**The Semicolon (;) Operator**: `ls ; pwd ; whoami` -  allows you to execute multiple commands in succession, regardless of whether each previous command succeeds

**The Logical AND Operator (&&)** - If you want the second command to only run if the first command is successful, separate the commands with the logical AND operator: `mkdir MyFolder && cd MyFolder`

**The Logical OR Operator (||)** - Sometimes you might want to execute a second command only if the first command does not succeed. `[ -d ~/MyFolder ] || mkdir ~/MyFolder`

 * A ; B  – Run A and then B, regardless of the success or failure of A
 * A && B  – Run B only if A succeeded
 * A || B  – Run B only if A failed

Combination:
```bash
[ -f ~/sample.txt ] && echo “File exists.” || touch ~/sample.txt
```

### Repeat command

```bash
# 1 - watch
watch -n 10 -t free -m
# -n - interval, -t - hide header, -d – highlights the changes in the command output

# monitoring copy process
cp ubuntu-15.10-desktop-amd64.iso /home/tecmint/ & watch -n 0.1 du -s /home/tecmint/ubuntu-15.10-desktop-amd64.iso

# 1
while true; do echo -n "This is a test of while loop";date ; sleep 5; done

# 2
for i in {1..10}; do sudo service salt-minion status | grep Active ; date ; sleep 5; done
```

## Manipulating Files

* [mv](https://man7.org/linux/man-pages/man1/mv.1.html)
* `sudo apt-get install rename` for renaming

```bash
mv oldfile.txt newfile.txt
```

## Get Directory size

```
$ du -sh
$ sudo du -h --max-depth=1 /var
$ du -hd 1 /

# 5 largest directories in the /var
$ sudo du -h /var/ | sort -rh | head -5
```

* s - Display only the total size of the specified directory, do not display file size totals for subdirectories.
* h - Print sizes in a human-readable format (h).
* c - to print a grand total of all sizes
* --max-depth - to get a report about the disk usage of the first-level subdirectories
* --apparent-size - the “apparent size” of a file is how much data is actually in the file

## Users

## Groups

Linux groups are organization units that are used to organize and administer user accounts in Linux. The primary purpose of groups is to define a set of privileges such as reading, writing, or executing permission for a given resource that can be shared among the users within the group.

There are two types of groups in Linux operating systems:

* **Primary group** – When a user creates a file, the file’s group is set to the user’s primary group. Usually, the name of the group is the same as the name of the user. The information about the user’s primary group is stored in the _/etc/passwd_ file.
* **Secondary or supplementary group** - Useful when you want to grant certain file permissions to a set of users who are members of the group. For example, if you add a specific user to the docker group, the user will inherit the access rights from the group, and be able to run docker commands.

Each user can belong to exactly one primary group and zero or more secondary groups.

Only root or users with sudo access can add a user to a group.

```bash
# create user group
sudo groupadd <group_name>
# delete user group
sudo groupdel groupname

# add user to group
sudo usermod -a -G <group_name> <user_name>
# to multiple groups
sudo usermod -a -G group1,group2 username

# remove user from the group
sudo gpasswd -d username groupname

# change user primary group
sudo usermod -g groupname username

# show user groups
id username

# see who is in group
grep <group_name> /etc/group
# or
sudo apt-get install members
members <group_name>

# change group for directory
chgrp <group_name> sales.report
```

## Permissions

[Linux File Permissions and Ownership Explained with Examples](https://linuxhandbook.com/linux-file-permissions/)

`-rw-rw-r--`

A representation of the file's access permissions. The first character is the type of file. A "-" indicates a regular (ordinary) file. A "d" indicates a directory. The second set of three characters represent the read, write, and execution rights of the file's owner. The next three represent the rights of the file's group, and the final three represent the rights granted to everybody else.

Commands:

* chmod – change permissions
* chown – change ownership

```bash
# see folder items permissions
ls -la
```

If Bethany and Jacob are the only users on the system (and you know your network is safe – very important), you can change the permissions of the folder to give them access. One way to do this would be to issue the command:
```bash
sudo chmod -R ugo+rw /DATA/SHARE
```

The `-R` swith (recursive) - the same permissions are applied all the way to the deepest folder, contained within the parent.

The breakdown of permissions looks like this:
* u – user
* g – group
* o – other

The ‘other’ entry is the dangerous one, as it effectively gives everyone permission for the folder/file.
The permissions you can give to a file or folder are:
* r – Can view or copy file contents
* w – Can modify file content
* x – Can run the file (if its executable)

Usefull commands:
- `groups` to show user groups

**Change ownership**
```
sudo chown -R bethany /DATA/SHARE
```
bethany- is a user name

## Kill process

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

## Get process exit code

```
command && echo $?
```

[more](https://www.cyberciti.biz/faq/stop-process-ubuntu-linux-command/)

## Run script as another user

```bash
su - anotherusername -c "<command>"

```

## Mount windows network share folder

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

## Extract zip

```bash
tar -xvzf robomongo-0.9.0-linux-x86_64-0786489.tar.gz
```

## Transfer files to server

[Using SFPT](https://www.computerhope.com/unix/sftp.htm)

Copy file.txt from current directory to home dir for *semidotsky* user

```bash
sftp semidotsky@192.168.1.1
put file.txt
```

## Get listing on a specific TCP port

Type the following command to see IPv4 port(s), enter:

```bash
lsof -Pnl +M -i4
# or
sudo lsof -i -P -n | grep LISTEN
sudo netstat -tulpn | grep LISTEN
sudo lsof -i:22 ## see a specific port such as 22 ##
sudo nmap -sTU -O IP-address-Here

# in latest versions
ss -tulw
```

Type the following command to see IPv6 listing port(s), enter:

`lsof -Pnl +M -i6`

```bash
netstat -tulpn
netstat -npl
```

[more](https://www.cyberciti.biz/faq/find-out-which-service-listening-specific-port/)

## Work with programms, packages

```bash
dpkg-query -L nodejs
```

will list the full path to every file belonging to the nodejs package

### Move programs to background

* CTRL+Z puts a job to the background and you get a bash prompt back
* type `jobs` to seeall jobs
* `bg #` - run job # in background
* `fg #` - bring job with # number to foreground

## Links

* [SSH/TransferFiles](https://help.ubuntu.com/community/SSH/TransferFiles)

## Device mounting

* **df** command – Shoe file system disk space usage.
* **mount** command – Show all mounted file systems.
* **/proc/mounts or /proc/self/mounts** file – Show all mounted file systems.

```bash
cat /proc/mounts
cat /proc/self/mounts

mount
mount -l

df -aTh

# device - mount folder mapping
lsblk

# device name - UUID mapping
blkid
lsblk -f
```

## Services

```bash
sudo service --status-all
sudo service docker start

# to start service
sudo service ssh start

# On Ubuntu 16.04 you can use systemctl, the systemd command for managing services:
sudo systemctl start ssh

systemctl list-units
```

## Environment variables

```bash
# show all
printenv
# or
set

# show single value
printenv <var_name>
echo $NAME

# set variable for user session
export NAME=VALUE

# persisting env var for a user
vi ~/.bash_profile
export JAVA_HOME=/opt/openjdk11
## apply changes
source ~/.bash_profile

# to permanently add a new environment variable in Ubuntu
sudo nano /etc/environment
if you want to add FOO=bar, then just write FOO=bar in a new line
Once saved, logout and login again

# remove
unset VARIABLE_NAME
```

[How to Set Environment Variables in Linux](https://www.serverlab.ca/tutorials/linux/administration-linux/how-to-set-environment-variables-in-linux/)

## Disks

```bash
# Initialize the disk
(echo n; echo p; echo 1; echo ; echo ; echo w) | sudo fdisk /dev/sdc

# Write a file system to the partition
sudo mkfs -t ext4 /dev/sdc1
# or
mkfs.ext4 /dev/sda1 -b 1024

# Finally, we need to mount the drive to the file system. Let's assume we will have a data folder. Let's create the mount point folder and mount the drive
sudo mkdir /data && sudo mount /dev/sdc1 /data
```

Again
```bash
# Show all disks and partitions
lsblk
# Show partitions
blkid

# 1. Create a partition of the disk
sudo fdisk /dev/sdc
```

## MEAN stack install

```bash
# mongo
sudo apt update && sudo apt upgrade -y
sudo apt-get install -y mongodb
sudo systemctl status mongodb

# nodejs
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt install nodejs
```

## Find and replace text within a file

Use Stream EDitor (sed) as follows:
`sed -i 's/old-text/new-text/g' input.txt`

Another examples:
```bash
sed 's/word1/word2/g' input.file
## *bsd/macos sed syntax#
sed 's/word1/word2/g' input.file > output.file
sed -i 's/word1/word2/g' input.file
sed -i -e 's/word1/word2/g' -e 's/xx/yy/g' input.file
## use + separator instead of / ##
sed -i 's+regex+new-text+g' file.txt
sed 's+http://+https://www.cyberciti.biz+g' input.txt
# or
sed 's/http:\/\//https:\/\/www.cyberciti.biz/g' input.txt
```

Options:
* `-i` - update file
* The `g/` means global replace i.e. find all occurrences of foo and replace with bar using sed. If you removed the /g only first occurrence is changed
*

## Popular command list

| Task | Command |
|------|---------|
| Find and replace text within a file | `sed -i 's/old-text/new-text/g' input.txt` |