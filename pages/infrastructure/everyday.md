# Everyday

## Powershell

```powershell
# show services
gsv *slb*
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