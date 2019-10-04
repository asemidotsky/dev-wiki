[Azure Data Explorer](https://dataexplorer.azure.com/clusters/help/databases/Samples)

```sql
StormEvents
| where StartTime >= datetime(2007-11-01) and StartTime < datetime(2007-12-01)
| where State == "FLORIDA"
| count
```