# Linux tools

* ssh-keygen - ssh keys generator
* ssh-keyscan 163.185.10.12 - show ssh keys
* xclip - command line copy & paste tool
* [sftp](https://linuxconfig.org/how-to-setup-sftp-server-on-ubuntu-20-04-focal-fossa-linux) - file transfer
* [How to Set up SSH Tunneling (Port Forwarding)](https://linuxize.com/post/how-to-setup-ssh-tunneling/)

## Linux - Windows

* [WinSCP](https://winscp.net/eng/index.php)

## Snap

```bash
sudo apt update
sudo apt install snapd
# to check
$ sudo snap install hello-world
hello-world 6.4 from Canonical✓ installed
$ hello-world
Hello World!
```

## Powershell

Install via snap
```bash
# Install PowerShell
sudo snap install powershell --classic
```

[Install on Ubuntu 16.04](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7#ubuntu-1604)

## Docker

[Install on Ubuntu 18.04](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)

Docker Compose install:
```bash
sudo curl -L https://github.com/docker/compose/releases/download/1.25.4/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

## Terminal managers

### Tmux

Install

```bash
sudo apt-get install tmux
tmux
```

![Tmux terms](tmux-terms.png)


[Basic hot keys](https://github.com/var-bin/terminalForCoder__WSD/blob/master/tmux/hotkey.md)

Config file `.tmux.conf` (must be placed in user home directory)

#### Windows

* Ctrl + b, c - create new window
* Ctrl + b, , - rename window
* Ctrl + b, int - switch between windows (int - window number 0,1,2..)

#### Panes

* Ctrl + b and Shift + 5 - split current region into two vertical panesx
* Ctrl + b and Shift + " - split horizontally
* Ctrl + b, ← ↑ → ↓ - moving between panes
* Ctrl + b and o - toggle between panes
* Ctrl + b and x - close current pane
* Ctrl + b, w - interactive pane selection

Connect to closed session: `tmux attach`

[Official site](https://github.com/tmux/tmux/wiki) | [Great cheatsheet](https://gist.github.com/MohamedAlaa/2961058)

### Screen

Install

```bash
sudo apt-get install screen
screen
```

Create config file [.screenrc](configs/.screenrc) in user's home directory.

#### Tab operations

* Ctrl + a, c - create new tab
* Ctrl + a, A - rename tab
* Ctrl + a, int - switch between tabs (int - tab number 0,1,2..)
* Ctrl + a, " - interactive tab selection

#### Screen - Regions

* Ctrl + a, | - split current region into two vertical regions
* Ctrl + a, Tab - change focus to the next region
* Ctrl + a :remove - remove region

Connect to previous closed session: `screen -r`

## Tar

```bash
# archive folder package-dir to file package.tar.gz
tar -czvf "package.tar.gz" package-dir

# archive folder without folder name in archive, -C option + *
tar -czvf "package.tar.gz" -C package-dir *

# extract to C:/
tar -C C:/ -xvf package.tar.gz
```

## Less

**less** is a program that lets us view text files.

| Command |	Action |
|---------|--------|
| Page Up or b | Scroll back one page |
| Page Down or space | Scroll forward one page |
| G	| Go to the end of the text file |
| 1G	| Go to the beginning of the text file |
| /characters | Search forward in the text file for an occurrence of the specified characters |
| n	| Repeat the previous search |
| h	| Display a complete list less commands and options |
| q	| Quit |

## Rsync

`rsync options source destination`

* -h : human-readable, output numbers in a human-readable format
* --include 'R*' --exclude '*'
* --delete - removing files at the destination
* --dry-run
* --stats - give some file-transfer stats
* -r, --recursive - recurse into directories
-t, --times - preserve modification times
* -h, --human-readable - output numbers in a human-readable format
* --partial - By default, rsync will delete any partially transferred file if the transfer is interrupted. In some circumstances it is more desirable to keep partially transferred files. Using the --partial option tells rsync to keep the partial file which should make a subsequent transfer of the rest of the file much faster.

[rsync - man page](https://linux.die.net/man/1/rsync)
[11 simple rsync examples that you can use to be more productive](https://www.lostsaloon.com/technology/11-simple-rsync-examples-that-you-can-use-to-be-more-productive/)

`sudo rsync -ra --info=progress2 /var/www/localhost/htdocs/ /media/usb`

## Chrome

```
sudo apt update
sudo apt upgrade
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
```

## Curl

* You can see the request that curl sent by adding the `-v` option

```bash
# GET
curl -i -H "Accept: application/json" -H "Content-Type: application/json" http://hostname/resource

# Disable SSL checks
-k, --insecure

# POST
curl --data "param1=value1&param2=value2" http://hostname/resource

# FILE UPLOAD
curl --form "fileupload=@filename.txt" http://hostname/resource

# RESTful HTTP Post:
curl -X POST -d @filename http://hostname/resource

# For logging into a site (auth):
curl -d "username=admin&password=admin&submit=Login" --dump-header headers http://localhost/Login
curl -L -b headers http://localhost/

# POST 2
curl -k -X POST https://100.124.79.6:5131/login \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "u",
    "password": "p",
    "eauth": "pam"
}'

curl --location --request POST 'https://server:9000' \
--header 'X-Auth-Token: b26433169229f8890a1982e3b5b7bdf652740afe' \
--header 'Content-Type: application/json' \
--header 'Cookie: session_id=b26433169229f8890a1982e3b5b7bdf652740afe' \
--data-raw '{
    "fun": "cmd.run",
    "client": "local",
    "tgt": "*local-cm",
    "arg": ["sudo tool.exe check >/dev/null 2>&1; echo $?"]
}'
```

## WGET

```bash
wget --no-check-certificate https://10.1.0.100:5131/login
```

## Alpine Linux

Install app - `sudo apk add pciutils`