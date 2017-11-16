# Tools

## [Microsoft SQL Operations Studio](https://docs.microsoft.com/en-us/sql/sql-operations-studio/download)

``` bash
cd ~
cp ~/Downloads/sqlops-linux-0.23.6.tar.gz ~
tar -xvf ~/sqlops-linux-0.23.6.tar.gz

echo 'export PATH="$PATH:~/sqlops-linux-x64"' >> ~/.bashrc
source ~/.bashrc
sqlops
```