# Azure messaging

**Message or Event ?**

Sender -> Receiver

**Message**

* Contains raw data (not only reference to data)
* Produced by sender
* Consumed by receiver

Details:
* A message contains raw data, produced by one component, that will be consumed by another component.
* A message contains the data itself, not just a reference to that data.
* The sending component expects the message content to be processed in a certain way by the destination component. The integrity of the overall system may depend on both sender and receiver doing a specific job.

For example, suppose a user uploads a new song by using the mobile music-sharing app. The mobile app must send that song to the web API that runs in Azure. The song media file itself must be sent, not just an alert that indicates that a new song has been added. The mobile app expects that the web API will store the new song in the database and make it available to other users. This is an example of a message.

**Event**
* Light weight notification
* Does not contain raw data
* May reference where the data lives
* Sender has no expectation about receiver side

Events are lighter weight than messages, and are most often used for broadcast communications. The components sending the event are known as **publishers**, and receivers are known as **subscribers**.

With events, receiving components will generally decide in which communications they are interested, and will "subscribe" to those events. The subscription is managed by an intermediary, like Azure Event Grid or Azure Event Hubs. When publishers send an event, the intermediary will route that event to interested subscribers. This pattern is known as a "publish-subscribe architecture." It's not the only way to deal with events, but it is the most common.

Events have the following characteristics:
* An event is a lightweight notification that indicates that something happened.
* The event may be sent to multiple receivers, or to none at all.
* Events are often intended to "fan out," or have a large number of subscribers for each publisher.
* The publisher of the event has no expectation about the action a receiving component takes.
* Some events are discrete units and unrelated to other events.
* Some events are part of a related and ordered series.

For example, suppose the music file upload has been completed, and the new song has been added to the database. In order to inform users of the new file, the web API must inform the web front end and mobile app users of the new file. The users can choose whether to listen to the new song, so the initial notification does not include the music file but only notifies users that the song exists. The sender does not have a specific expectation that the event receivers will do anything particular in responsiveness of receiving this event.

This scenario is an example of a discrete event.

For each communication, consider the following question: **Does the sending component expect the communication to be processed in a particular way by the destination component?**

If the answer is _yes_, choose to use a message. If the answer is _no_, you may be able to use events.

## Choose a message-based delivery with queues

Benefits of queues
* Increased reliability
* Message delivery guarantees
* Transactional support

Message delivery guarantees:

Queuing systems usually guarantee delivery of each message in the queue to a destination component. However, these guarantees can take different approaches:

* **At-Least-Once Delivery**: In this approach, each message is guaranteed delivery to at least one of the components that retrieve messages from the queue. Note, however, that in certain circumstances, it is possible that the same message may be delivered more than once. For example, if there are two instances of a web app retrieving messages from a queue, ordinarily each message goes to only one of those instances. However, if one instance takes a long time to process the message, and a time-out expires, the message may be sent to the other instance as well. Your web app code should be designed with this possibility in mind.
* **At-Most-Once Delivery**: In this approach, each message is not guaranteed for delivery, and there is a small chance that it may not arrive. However, unlike At-Least-Once delivery, there is no chance that the message will be delivered twice. This is sometimes referred to as automatic duplicate detection.
* **First-In-First-Out (FIFO)**: In most messaging systems, messages usually leave the queue in the same order in which they were added, but you should consider whether this delivery is guaranteed. If your distributed application requires that messages are processed in precisely the correct order, you must choose a queue system that includes a FIFO guarantee.

## Storage queue

Queue storage isn't quite as feature rich as Service Bus, but if you don't need any of those features, it can be a simpler choice. In addition, it's the best solution if your app has any of the following requirements:
* Need an audit trail of all messages that pass through the queue.
* Expect the queue to exceed 80 GB in size.
* Want to track progress for processing a message inside of the queue.

A queue is a simple, temporary storage location for messages sent between the components of a distributed application. Use a queue to organize messages and gracefully handle unpredictable surges in demand.

Use Storage queues when you want a simple and easy-to-code queue system. For more advanced needs, use Service Bus queues. If you have multiple destinations for a single message, but need queue-like behavior, use Service Bus topics.

To access a queue, you need three pieces of information:
1. Storage account name
1. Queue name
1. Authorization token

![Messages flow](messaging/queue-message-flow.png)

```csharp
CloudStorageAccount account = CloudStorageAccount.Parse(connectionString);

CloudQueueClient client = account.CreateCloudQueueClient();

CloudQueue queue = client.GetQueueReference("myqueue");

// on the sender side
await queue.CreateIfNotExistsAsync();

var message = new CloudQueueMessage("your message here");
await queue.AddMessageAsync(message);

// receiver side
CloudQueueMessage message = await queue.GetMessageAsync();

if (message != null)
{
    // Process the message
    //...

    await queue.DeleteMessageAsync(message);
}
```

**Note:**

While the total queue size can be up to 500 TB, the individual messages in it can only be up to 64 KB in size (48 KB when using Base64 encoding). If you need a larger payload you can combine queues and blobs – passing the URL to the actual data (stored as a Blob) in the message. This approach would allow you to enqueue up to 200 GB for a single item.

## Event Grid

Use Event Grid when you need these features:

* Simplicity: It is straightforward to connect sources to subscribers in Event Grid.
* Advanced filtering: Subscriptions have close control over the events they receive from a topic.
* Fan-out: You can subscribe to an unlimited number of endpoints to the same events and topics.
* Reliability: Event Grid retries event delivery for up to 24 hours for each subscription.
* Pay-per-event: Pay only for the number of events that you transmit.

What if we want to deliver a large stream of events? In this scenario, **Event Grid isn't a great solution because it's designed for one-event-at-a-time delivery**. Instead, we need to turn to another Azure service: Event Hubs.

## Event Hubs

Choose Event Hubs if:
* You need to support authenticating a large number of publishers.
* You need to save a stream of events to Data Lake or Blob storage.
* You need aggregation or analytics on your event stream.
* You need reliable messaging or resiliency.

An entity that sends data to the Event Hubs is called a _publisher_, and an entity that reads data from the Event Hubs is called a _consumer_ or a _subscriber_.

An event is a small packet of information (a datagram) that contains a notification. Events can be published individually, or in batches, but a single publication (individual or batch) can't exceed 1 MB.

### Publishers and subscribers

Event publishers are any app or device that can send out events using either HTTPS or Advanced Message Queuing Protocol (AMQP) 1.0.

For publishers that send data frequently, AMQP has better performance. However, it has a higher initial session overhead, because a persistent bidirectional socket and transport-level security (TLS) or SSL/TLS has to be set up first.

For more intermittent publishing, HTTPS is the better option. Though HTTPS requires additional overhead for each request, there isn't the session initialization overhead.

Event subscribers are apps that use one of two supported programmatic methods to receive and process events from an Event Hub.
* EventHubReceiver - A simple method that provides limited management options.
* EventProcessorHost - An efficient method that we'll use later in this module.

**Consumer groups**
An Event Hub consumer group represents a specific view of an Event Hub data stream. By using separate consumer groups, multiple subscriber apps can process an event stream independently, and without affecting other apps. However, the use of many consumer groups isn't a requirement, and for many apps, the single default consumer group is sufficient.

## Service Bus

Azure Service Bus **topics** are like queues, but can have multiple subscribers. When a message is sent to a topic instead of a queue, multiple components can be triggered to do their work.

Use Service Bus topics if you:
* Need multiple receivers to handle each message

Use Service Bus queues if you:
* Need an At-Most-Once delivery guarantee.
* Need a FIFO guarantee.
* Need to group messages into transactions.
* Want to receive messages without polling the queue.
* Need to provide a role-based access model to the queues.
* Need to handle messages larger than 64 KB but less than 256 KB.
* Queue size will not grow larger than 80 GB.
* Want to publish and consume batches of messages.

Azure Service Bus can exchange messages in three different ways: queues, topics, and relays.

A **queue** is a simple temporary storage location for messages. A sending component adds a message to the queue. A destination component picks up the message at the front of the queue. Under ordinary circumstances, each message is received by only one receiver.

A **topic** is similar to a queue but can have multiple subscriptions. This means that multiple destination components can subscribe to a single topic, so each message is delivered to multiple receivers. Subscriptions can also filter the messages in the topic to receive only messages that are relevant.

A **relay** is an object that performs synchronous, two-way communication between applications. Unlike queues and topics, it is not a temporary storage location for messages. Instead, it provides bidirectional, unbuffered connections across network boundaries such as firewalls. Use a relay when you want direct communications between components as if they were located on the same network segment but separated by network security devices.