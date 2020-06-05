[Azure Data Explorer](https://dataexplorer.azure.com/clusters/help/databases/Samples)

```sql
StormEvents
| where StartTime >= datetime(2007-11-01) and StartTime < datetime(2007-12-01)
| where State == "FLORIDA"
| count
```

[Find and diagnose performance issues with Azure Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/learn/tutorial-performance)
[Application Insights API for custom events and metrics](https://docs.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics#trackmetric)