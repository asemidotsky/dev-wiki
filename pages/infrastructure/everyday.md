# Everyday

## Powershell

```powershell
# show services
gsv *slb*

# version
$PSVersionTable.PSVersion
```

## Linux

```bash
# adding path to PATH
PATH=$PATH:~/opt/bin

# check traffic
sudo iftop

# check folder size
watch -d du -m <folder_path>

#check files size
ls -lh <folder_path>

# count files in folder

ls | wc -l
find <directory> -type f | wc -l
tree <directory>
tree --du -h
tree -hF
```

## Debian

apt-get update
apt-get install mlocate
updatedb # for locate