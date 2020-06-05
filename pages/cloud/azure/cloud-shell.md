```powershell
az account list --output table

az group list --output table

az resource list \
    --resource-group learn-36019119-1e39-46f6-97bd-6be679574629 \
    --resource-type Microsoft.Web/sites

az webapp stop \
    --resource-group learn-36019119-1e39-46f6-97bd-6be679574629 \
    --name <web app name>
```