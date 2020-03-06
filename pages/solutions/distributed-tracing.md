* [Distributed tracing from Azure Docs](https://docs.microsoft.com/en-us/azure/azure-monitor/app/distributed-tracing)
* [Open Census](https://opencensus.io/)

Azure

* [Telemetry correlation in Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/correlation)
* [Unified cross-component transaction diagnostics](https://docs.microsoft.com/en-us/azure/azure-monitor/app/transaction-diagnostics)
* [Application Insights telemetry data model](https://docs.microsoft.com/en-us/azure/azure-monitor/app/data-model)
* [Telemetry context: Application Insights data model](https://docs.microsoft.com/en-us/azure/azure-monitor/app/data-model-context)
* [Track custom operations with Application Insights .NET SDK](https://docs.microsoft.com/en-us/azure/azure-monitor/app/custom-operations-tracking)

### Get telemetry OperationId

```csharp

var operationId = System.Diagnostics.Activity.Current.RootId;

// or another approach
var telemetry = new RequestTelemetry();

TelemetryConfiguration
    .Active
    .TelemetryInitializers
    .OfType<OperationCorrelationTelemetryInitializer>()
    .Single()
    .Initialize(telemetry);

operationId = telemetry.Context.Operation.Id;
```