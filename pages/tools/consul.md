
## Install as Windows service

```powershell
sc.exe create "Consul" binPath= "C:\tools\consul\consul.exe agent -config-dir=C:
\tools\consul\config" start= auto
```

## Simple config file

```json
{
    "data_dir": "C:\\tools\\consul\\data",
    "log_level": "INFO",
    "server": true,
    "bootstrap": true,
    "ui": true,
    "addresses": {
      "http": "127.0.0.1"
    },
    "bind_addr": "100.106.184.181"
}
```