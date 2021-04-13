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

## Azure PowerShell

* Connect-AzAccount - connect
* Get-AzContext - get current subscription
* Select-AzSubscription -SubscriptionId '53dde41e-916f-49f8-8108-558036f826ae'
* Get-AzResourceGroup | Format-Table
* New-AzResourceGroup -Name <name> -Location <location>
* Get-AzResource -ResourceGroupName ExerciseResources
* Create VM:
```powershell
New-AzVm
    -ResourceGroupName 4acf3baa-2c33-4884-99e0-8843f050763a
    -Name "testvm-eus-01"
    -Credential (Get-Credential)
    -Location "East US"
    -Image UbuntuLTS -OpenPorts 22

# Query VM
$vm = (Get-AzVM -Name "testvm-eus-01" -ResourceGroupName learn-4acf3baa-2c33-4884-99e0-8843f050763a)

# Ip address
$vm | Get-AzPublicIpAddress

# Shutdown
Stop-AzVM -Name $vm.Name -ResourceGroup $vm.ResourceGroupName

# Remove
Remove-AzVM -Name $vm.Name -ResourceGroup $vm.ResourceGroupName
```

## Azure Resource Manager

A resource group is a logical container for resources deployed on Azure.
Resource groups can't be nested

* Use resource groups to organize Azure resources
* Use tags to organize resources
* Apply policies to enforce standards in your Azure environments
* Use resource locks to protect critical Azure resources from accidental deletion
* Secure resources with role-based access control

**Use resource groups for organization**

* Consistent naming convention
    * You can start with using an understandable naming convention. You named our resource group msftlearn-core-infrastructure-rg. You've given some indication of what it's used for (msftlearn), the types of resources contained within (core-infrastructure), and the type of resource it is itself (rg). This descriptive name gives us a better idea of what it is.

There are a few factors that can play into the strategy you use to organize resources: authorization, resource life cycle, and billing.

**Use policies to enforce standards**

* Policies can enforce things such as only allowing specific types of resources to be created, or only allowing resources in specific Azure regions
* You can enforce naming conventions across your Azure environment.
* You can also enforce that specific tags are applied to resources.

**Secure resources with role-based access control**

RBAC provides fine-grained access management for Azure resources, enabling you to grant users the specific rights they need to perform their jobs. RBAC is considered a core service and is included with all subscription levels at no cost.

Best Practices for RBAC
* Segregate duties within your team and grant only the amount of access to users that they need to perform their jobs. Instead of giving everybody unrestricted permissions in your Azure subscription or resources, allow only specific actions at a particular scope.
* When planning your access control strategy, grant users the lowest privilege level that they need to do their work.
* Use Resource Locks to ensure critical resources aren't modified or deleted (as you'll see in the next unit).

**Use resource locks to protect resources**