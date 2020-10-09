# Linux tools

* ssh-keygen - ssh keys generator
* xclip - command line copy & paste tool
* [sftp](https://linuxconfig.org/how-to-setup-sftp-server-on-ubuntu-20-04-focal-fossa-linux) - file transfer

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