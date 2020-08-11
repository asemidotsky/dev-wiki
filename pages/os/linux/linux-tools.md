# Linux tools

* ssh-keygen - ssh keys generator
* xclip - command line copy & paste tool
* [sftp](https://linuxconfig.org/how-to-setup-sftp-server-on-ubuntu-20-04-focal-fossa-linux) - file transfer

## Linux - Windows

* [WinSCP](https://winscp.net/eng/index.php)

## Terminal managers

### Tmux

Install

```bash
sudo apt-get install tmux
tmux
```

[Basic hot keys](https://github.com/var-bin/terminalForCoder__WSD/blob/master/tmux/hotkey.md)

Config file `.tmux.conf` (must be placed in user home directory)

#### Panes

* Ctrl + b, c - create new pane
* Ctrl + b, , - rename pane
* Ctrl + b, int - switch between panes (int - pane number 0,1,2..)
* Ctrl + b, w - interactive pane selection

#### Regions

* Ctrl + b, % - split current region into two vertical regions
* Ctrl + b, ← ↑ → ↓ - moving between regions

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