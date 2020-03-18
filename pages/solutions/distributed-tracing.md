* [Distributed tracing from Azure Docs](https://docs.microsoft.com/en-us/azure/azure-monitor/app/distributed-tracing)
* [Open Census](https://opencensus.io/)
* [OpenTelemetry](https://opentelemetry.io/)
* [W3C Trace Context](https://www.w3.org/TR/trace-context/) - net.core moving to it
* [HTTP Protocol for Correlation](https://github.com/dotnet/corefx/blob/master/src/System.Diagnostics.DiagnosticSource/src/HttpCorrelationProtocol.md)
* [Deprecated Flat Request-Id](https://github.com/dotnet/corefx/blob/master/src/System.Diagnostics.DiagnosticSource/src/FlatRequestId.md)

Azure

* [Telemetry correlation in Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/correlation)
* [Unified cross-component transaction diagnostics](https://docs.microsoft.com/en-us/azure/azure-monitor/app/transaction-diagnostics)
* [Application Insights telemetry data model](https://docs.microsoft.com/en-us/azure/azure-monitor/app/data-model)
* [Telemetry context: Application Insights data model](https://docs.microsoft.com/en-us/azure/azure-monitor/app/data-model-context)
* [Track custom operations with Application Insights .NET SDK](https://docs.microsoft.com/en-us/azure/azure-monitor/app/custom-operations-tracking)
* [Correlation with Activity with Application Insights (1) Overview](https://medium.com/@tsuyoshiushio/correlation-with-activity-with-application-insights-1-overview-753a48a645fb)
* [Activity User Guide](https://github.com/dotnet/corefx/blob/master/src/System.Diagnostics.DiagnosticSource/src/ActivityUserGuide.md)

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

"Request-Id" HTTP Header is used to pass root operation id (correlation id) from the upstream service.

```csharp
// Let's create and start RequestTelemetry.
var requestTelemetry = new RequestTelemetry
{
    Name = $"{context.Request.Method} {context.Request.Uri.GetLeftPart(UriPartial.Path)}"
};

// If there is a Request-Id received from the upstream service, set the telemetry context accordingly.
if (context.Request.Headers.ContainsKey("Request-Id"))
{
    var requestId = context.Request.Headers.Get("Request-Id");
    // Get the operation ID from the Request-Id (if you follow the HTTP Protocol for Correlation).
    requestTelemetry.Context.Operation.Id = GetOperationId(requestId);
    requestTelemetry.Context.Operation.ParentId = requestId;
}
```

The HTTP Protocol for Correlation also declares the Correlation-Context header.