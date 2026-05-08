# Everyday

## Powershell

```powershell
# show services
gsv *slb*

# version
$PSVersionTable.PSVersion

# ssh
ssh -i ~/.ssh/ssh_private_key.pem username@100.1.2.3

# test connection
Test-NetConnection -ComputerName "www.contoso.com" -Port 80 -InformationLevel "Detailed" -TraceRoute
```

## Linux

```bash
# adding path to PATH
PATH=$PATH:~/opt/bin

# check traffic
sudo iftop

# check folder size
watch -d du -m <folder_path>
sudo du -hxd 1 /  # top level
du -hs /path/to/directory
du -h --max-depth=1 ./
sudo du -h --max-depth=1 / | sort -h # from root /

sudo du -sh /var/log/journal # system logs

# find the top 50 biggest files on the system
sudo find / -type f -printf "%s %p\n" 2>/dev/null | sort -nr | head -50

# docker related space
docker system df
sudo du -h --max-depth=1 /var/lib/docker | sort -h


#check files size
ls -lh <folder_path>
ls -l --block-size=M


# count files in folder

ls | wc -l
find <directory> -type f | wc -l
tree <directory>
tree --du -h
tree -hF

# open ports
sudo apt-get install netcat
nc -zv <remote_ip> <port_number>

sudo apt-get install nmap
nmap -p <port_number> <remote_ip>

sudo apt-get install telnet
telnet <remote_ip> <port_number>
```

## Debian

apt-get update
apt-get install mlocate
updatedb # for locate