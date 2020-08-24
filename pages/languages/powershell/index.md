# PowerShell

| Command | Description |
|-----|------|
| $Env:windir or Get-ChildItem Env:Computername | To display the value of the WINDIR environment variable |
| Get-ChildItem Env: | To display the values of all the environment variables |
| Get-ChildItem Env: \| Sort Name | Sort Name | Display variables sorted |
| Set-Location Env: | You can also go into the Env: drive |

## Usefull script

```powershell
# get file MD5 hash (checksum)
get-FileHash -algorithm MD5 <Filename>
```