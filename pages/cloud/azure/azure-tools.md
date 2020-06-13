## Azure CLI

Install
```powershell
Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'; rm .\AzureCLI.msi
```

Azure IoT extensions
```powershell
az extension add --name azure-iot

az extension list

# removing extension
az extension remove --name azure-cli-iot-ext
```

Common commands

```powershell
az group create --name MyResourceGroup --location eastus

az group delete --name MyResourceGroup

az group list
```

### IoT

```powershell
# create IoT hub
az iot hub create --resource-group MyResourceGroup --name {YourIoTHubName}

# create simulated device
az iot hub device-identity create --device-id simDevice --hub-name {YourIoTHubName}

# start simulation
az iot device simulate -d simDevice -n {YourIoTHubName}

# monitor events
az iot hub monitor-events --output table --hub-name {YourIoTHubName}

# send message to device
az iot device c2d-message send -d simDevice --data "Hello World" --props "key0=value0;key1=value1" -n {YourIoTHubName}
```