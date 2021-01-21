## Automate and integrate your business processes

Business processes modeled in software are often called **workflows**.

Azure includes four different technologies that you can use to build and implement workflows that integrate multiple systems:

* Logic Apps
* Microsoft Power Automate
* WebJobs
* Azure Functions

Design-first approach: Logic Apps, Microsoft Power Automate
Code-first: WebJobs, Azure Functions

Logic Apps has more than 200 connectors to different services and you can create custom connector.

Microsoft Power Automate is a service that you can use to create workflows even when you have no development or IT Pro experience.
Under the hood, Microsoft Power Automate is built on Logic Apps.

You may choose WebJobs for the following reasons:
* You want the code to be a part of an existing App Service application and to be managed as part of that application, for example in the same Azure DevOps environment.
* You need close control over the object that listens for events that trigger the code. This object in question is the JobHost class, and you have more flexibility to modify its behavior in WebJobs.

How to choose a service

![How to choose a service](workflows/3-service-choice-flow-diagram.png)

## Azure Functions

Benefits:
* no servers to manage
* automatic scaling
* you are charged based on what is used
* support many languages

Drawbacks:
* **Execution time**. By default, functions have a timeout of 5 minutes. This timeout is configurable to a maximum of 10 minutes. If your function requires more than 10 minutes to execute, you can host it on a VM. Additionally, if your service is initiated through an HTTP request and you expect that value as an HTTP response, the timeout is further restricted to 2.5 minutes. Finally, there's also an option called Durable Functions that allows you to orchestrate the executions of multiple functions without any timeout.
* **Execution frequency**. If you expect your function to be executed continuously by multiple clients, it would be prudent to estimate the usage and calculate the cost of using functions accordingly. It might be cheaper to host your service on a VM.
While scaling, only one function app instance can be created every 10 seconds, for up to 200 total instances. Keep in mind, each instance can service multiple concurrent executions, so there is no set limit on how much traffic a single instance can handle. Different types of triggers have different scaling requirements

Functions are _event driven_.

**Triggers** are used to execute function.

**Bindings** are a declarative way to connect data and services to your function. Each binding has a direction - your code reads data from input bindings, and writes data to output bindings.


Service plans:
1. **Consumption service plan**. The Consumption service plan provides automatic scaling and bills you when your functions are running. The Consumption plan comes with a configurable timeout period for the execution of a function. By default, it is 5 minutes, but may be configured to have a timeout as long as 10 minutes.
1. **Azure App Service plan.** The plan allows you to avoid timeout periods by having your function run continuously on a VM that you define. When using an App Service plan, you are responsible for managing the app resources the function runs on, so this is technically not a serverless plan. However, it may be a better choice if your functions are used continuously or if your functions require more processing power or execution time than the Consumption plan can provide.

Call function:
```bash
curl --header "Content-Type: application/json" --header "x-functions-key: cjrX2qERTCjewqv3eiRcAzkSPFazCBjrTLn3ZfSKaEtgAa0lnbXROA==" --request POST --data "{\"name\": \"Azure Function\"}" https://escalator-functions-asem85.azurewebsites.net/api/HttpTrigger1
```

**Triggers**
* Time trigger - CRON expressions are used.
* HTTP trigger
* Blob trigger

**Bindings**
* Blob Storage
* Azure Service Bus Queues
* Azure Cosmos DB
* Azure Event Hubs
* External Files
* External Tables
* HTTP endpoints

### Durable functions

Durable Functions is an extension of Azure Functions that enables you to perform long-lasting, stateful operations in Azure. Azure provides the infrastructure for maintaining state information. You can use Durable Functions to orchestrate a long-running workflow.

You can use three durable function types: _Client, Orchestrator, and Activity_.

**Client** functions are the entry point for creating an instance of a Durable Functions orchestration. They can run in response to an event from many sources, such as a new HTTP request arriving, a message being posted to a message queue, an event arriving in an event stream. You can write them in any of the supported languages.

**Orchestrator** functions describe how actions are executed, and the order in which they are run. You write the orchestration logic in code (C# or JavaScript).

**Activity** functions are the basic units of work in a durable function orchestration. An activity function contains the actual work performed by the tasks being orchestrated.

#### Application patterns

**Function chaining** - In this pattern, the workflow executes a sequence of functions in a specified order. The output of one function is applied to the input of the next function in the sequence. The output of the final function is used to generate a result.

![function chaining](functions/app-patterns/function-chaining.png)

**Fan out/fan in** - This pattern runs multiple functions in parallel and then waits for all the functions to finish. The results of the parallel executions can be aggregated or used to compute a final result.

![fan out/fan in](functions/app-patterns/fan-out-fan-in.png)

**Async HTTP APIs** - This pattern addresses the problem of coordinating state of long-running operations with external clients. An HTTP call can trigger the long-running action. Then, it can redirect the client to a status endpoint. The client can learn when the operation is finished by polling this endpoint.

![async http api](functions/app-patterns/async-http-api.png)

**Monitor** - This pattern implements a recurring process in a workflow, possibly looking for a change in state. For example, you could use this pattern to poll until specific conditions are met.

![monitor](functions/app-patterns/monitor.png)

**Human interaction** - This pattern combines automated processes that also involve some human interaction. A manual process within an automated process is tricky because people aren't as highly available and as responsive as most computers. Human interaction can be incorporated using timeouts and compensation logic that runs if the human fails to interact correctly within a specified response time. An approval process is an example of a process that involves human interaction.

![human interaction](functions/app-patterns/approval.png)

**Aggregator (stateful entities)** The sixth pattern is about aggregating event data over a period of time into a single, addressable entity. In this pattern, the data being aggregated may come from multiple sources, may be delivered in batches, or may be scattered over long-periods of time. The aggregator might need to take action on event data as it arrives, and external clients may need to query the aggregated data.

![aggregator](functions/app-patterns/aggregator.png)

The tricky thing about trying to implement this pattern with normal, stateless functions is that concurrency control becomes a huge challenge. Not only do you need to worry about multiple threads modifying the same data at the same time, you also need to worry about ensuring that the aggregator only runs on a single VM at a time.

You can use [Durable entities](https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-entities) to easily implement this pattern as a single function.

#### Timers in durable functions

Using timers for delay:
```js
const df = require("durable-functions");
const moment = require("moment");

module.exports = df.orchestrator(function*(context) {
    for (let i = 0; i < 10; i++) {
        const deadline = moment.utc(context.df.currentUtcDateTime).add(i, 'd');
        yield context.df.createTimer(deadline.toDate());
        yield context.df.callActivity("SendReminder");
    }
});
```

Using timers for timeout:
```js
module.exports = df.orchestrator(function* (context) {
    const outputs = [];
    const deadline = moment.utc(context.df.currentUtcDateTime).add(20, "s");
    const activityTask = context.df.waitForExternalEvent("Approval");
    const timeoutTask = context.df.createTimer(deadline.toDate());

    const winner = yield context.df.Task.any([activityTask, timeoutTask]);
    if (winner === activityTask) {
        outputs.push(yield context.df.callActivity("Approval", "Approved"));
    }
    else
    {
        outputs.push(yield context.df.callActivity("Escalation", "Head of department"));
    }

    if (!timeoutTask.isCompleted) {
        // All pending timers must be complete or canceled before the function exits.
        timeoutTask.cancel();
    }

    return outputs;
})
```