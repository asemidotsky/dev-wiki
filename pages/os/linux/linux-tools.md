* ssh-keygen - ssh keys generator
* xclip - command line copy & paste tool

# Terminal managers

## Screen

Install

```bash
sudo apt-get install screen
screen

# connect to previous closed session
screen -r
```

Create config file [.screenrc](configs/.screenrc) in user's home directory.

**Tab operations**
* Ctrl + a, c - create new tab
* Ctrl + a, A - rename tab
* Ctrl + a, int - switch between tabs (int - tab number 0,1,2..)
* Ctrl + a, " - interactive tab selection

**Regions**
* Ctrl + a, | - split current region into two vertical regions
* Ctrl + a, Tab - change focus to the next region
* Ctrl + a :remove - remove region