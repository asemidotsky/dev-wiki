## Resources

* [IoT 101 Channel 9](https://channel9.msdn.com/Series/IoT-101/?WT.mc_id=EducationalIoT-c9-niner)

## Glossary

The Internet of Things (IoT) is a network of Internet connected devices that communicate sensor data to the cloud for centralized processing. These sensors are typically embedded in monitoring devices. These devices, known as _IoT devices_, have some processing power to control communications. The stream of data they generate is known as _telemetry_.

**Telemetry**: Telemetry is the process of recording and transmitting values received by an IoT device. Telemetry is an essential function of an IoT solution.

**Provisioning**: The act of provisioning a device to the cloud uniquely identifies the device to the cloud. Provisioning also establishes the security protocols for the device and its access rights and privileges.

**Routing**: Message routing enables you to send messages from your devices to cloud services in an automated, scalable, and reliable manner. You can send either device telemetry messages or events (for example device lifecycle events).

**Scaling**: For cloud solutions, scaling involves the need to ramp up or down the scope of the solution. The ability to scale a solution up or down gives the developer the flexibility to deploy different kinds of solutions.

**Service availability**: Service availability aims to ensure an agreed level of operational performance (typically uptime) for a cloud service. Service availability is defined by the service level agreement (SLA).

**IoT hub enables you to**:

**Secure your communications**: IoT Hub enables secure communications for your devices to send data providing per-device authentication with multiple authentication types.

**Scale your solution**: IoT Hub allows you to scale to millions of simultaneously connected devices and millions of events per second to support your IoT workloads. There are two considerations to determining how to scale your solution: the features you plan to use and the amount of data you plan to move daily.

Azure IoT Hub offers two tiers: the basic tier and the standard tier. To develop full-featured and bi-directional communication capabilities, you should use the standard tier. The basic tier provides a subset of features and is intended for solutions that only need uni-directional communication from devices to the cloud. Both basic and standard tiers offer the same security and authentication features.

Data throughput is the second consideration in determining how to scale your solution. Each IoT Hub tier is available in three sizes, numerically identified as 1, 2, and 3. Each unit of a level 1 IoT hub can handle 400 thousand messages a day, while a level 3 unit can handle 300 million.

**Route device data**: IoT Hub enables you to send messages based on automated rules to optimize data traffic.

**Send commands to devices**: IoT Hub can also send Cloud-to-device messages. Cloud-to-device messages enable you to send commands and notifications to your connected devices.

**Monitor your IoT solution's health**: IoT Hub allows tracking events such as device creation, device communication failures, and device connections.

**Integrate with other services**: You can seamlessly integrate IoT Hub with other Azure services to build an end-to-end solution. For example, you can incorporate IoT Hub with Azure Logic Apps and Event Grid to automate business processes.

**Manage and configure your devices**: Using IoT Hub, you can manage your connected devices at scale. You can set and query the device status and automatically respond to a change in state for devices.

**Create highly available and resilient solutions**: Create solutions, which are highly available as per a specified service level agreement and benefit from built-in failover capabilities.

**Connect virtually any devices**: Using Azure IoT open-source device SDKs, you can build solutions, which run on connected devices and interact with IoT Hub. You can also connect devices natively to the IoT Hub using protocols such as MQTT, HTTPS 1.1, or AMQP.

IoT Hub is a managed service, hosted in the cloud, that acts as a central message hub for bi-directional communication between your IoT solutions and the devices it manages.

## How IoT Hub works

**Protocols supported**: IoT Hub allows devices to use the following protocols for device-side communications: MQTT, MQTT over WebSockets, AMQP, AMQP over WebSockets and HTTPS

**Device Identity Registry**: IoT Hub maintains an identity registry. The identity registry stores information about the devices and modules permitted to connect to the IoT Hub. An identity registry entry for the device or module must exist before the entity can connect to the IoT Hub. A device or module must also authenticate with the IoT Hub based on credentials stored in the identity registry.

**Authentication**: Azure IoT Hub grants access to endpoints by verifying a token against the shared access policies and identity registry security credentials. You can use any X.509 certificate to authenticate a device with IoT Hub. Supported certificates include an existing X.509 certificate; CA-signed X.509 certificate; a self-generated and self-signed X-509 certificate.

**Device twins**: Device twins are JSON documents that store device state information, including metadata, configurations, and conditions. Azure IoT Hub maintains a device twin for each device that you connect to IoT Hub. Device twins store device-related information that Device and back ends can use to synchronize device conditions and configuration.

**Endpoints that IoT Hub exposes**: For each device in the identity registry, IoT Hub exposes a set of endpoints: Send device-to-cloud messages; Receive cloud-to-device messages; Initiate file uploads; Retrieve and update device twin properties; Receive direct method requests. IoT Hub currently supports the following Azure services as additional (custom) endpoints: Azure Storage containers, Event Hubs, Service Bus Queues, Service Bus Topics.

**Provisioning devices with Azure IoT Hub Device Provisioning Service**: The IoT Hub Device Provisioning Service is a helper service for IoT Hub. The device provisioning service enables zero-touch, just-in-time provisioning to the right IoT Hub without requiring human intervention, allowing the customers to provision millions of devices in a secure and scalable manner.

![When to use IoT](when-to-use-iot.png)

## IoT strategy and solutions

IoT can be envisioned as a set of technologies connected across three main areas:

* Things: Physical "things," with embedded sensors, that are connected to the Internet. These things send telemetry data.
* Insights: The results from processing and analyzing the data. IoT real-time analysis, machine learning, and other backend processes, produce these insights.
* Actions: The automated, or manual, response to the insights. Actions include the automated changing of device settings, a manual intervention to repair a piece of equipment, or an update to a computer system that is not working optimally.

![IoT Solution Architecture](iot-solution-arch.png)

## IoT services

* IoT Hub
* IoT Central
* IoT Security
    * Azure Sphere
    * Azure Device Provisioning Service (DPS)
    * Azure Security Center for IoT
* Azure IoT Edge devices
* Azure IoT data analysis
    * Azure Time Series Insights - ability to view anomalies in data, which can be hard to detect visually.
    * Azure Maps
    * Azure Digital Twins
* Azure IoT Hub SDKs
    * Azure IoT Device SDKs
    * Azure IoT Service SDKs
    * Provisioning Device SDKs
    * Provisioning Service SDKs

> IoT Hub was developed to address the unique requirements of connecting IoT devices to the Azure cloud, while Event Hubs was designed for big data streaming. Microsoft recommends using Azure IoT Hub to connect IoT devices to Azure.

## IoT Edge

Azure IoT Edge is a combination of a cloud service running in the cloud and a runtime that runs on the device. The runtime starts and manages workflows on the device. The workflow comprises a set of containers that you link together in a specific order to create an end-to-end scenario. IoT Edge is managed by the IoT Hub. The Azure IoT Edge enables you to run workloads on the edge device, which are developed using cloud services. The workload is a module deployed using docker compatible containers. The modules could be artificial intelligence applications, Azure and third-party services, or your business logic.

IoT Edge enables you to:
* React in near real time to local changes
* Manage edge devices
* Deploy using Containers
* Deploy using secure and certified hardware
* Distribute AI and analytics workloads to the edge
* Use existing developer skillsets and code
* Manage data to reduce costs
* Reliably operate in offline or intermittent mode
* Provide security for edge deployments
* Ensure privacy for IoT deployments
* Act as a gateway
* Availability of third-party modules

Azure IoT Edge comprises three components:
* IoT Edge modules
* IoT Edge runtime
* IoT Edge cloud interface

## IoT Storages

It's common to use the familiar terms hot, warm, cool, and cold in data analysis. Hot clearly means a real-time approach is needed. Warm can have the same meaning, though perhaps the data is "near" real time, or at least, recent. Cool means the flow of data is slow. Cold means that the data is stored and not "flowing". The cooler the path, the more the data can be batched.

The _Lambda architecture_ of Azure IoT enables multiple paths.

**The hot path**

The IoT remote device pumps out specific telemetry. This telemetry is sent in its own message, routed by the IoT Hub for instant analysis and visualization. The analysis could be done by a human operator, say, using Azure Time Series Insights. This approach is described in this module.

Alternatively, the analysis could be handled by Azure Stream Analytics, which supports simple SQL language queries, and is extensible via C# or JavaScript UDFs (User-defined functions).

The hot path requires storage optimized for data availability. Data services that provide this speed of access are the more expensive services.

**The cold path**

The IoT remote device also sends out all telemetry, and logging, data. The IoT Hub directs these messages down a route to an Azure storage account. The key point about cold path storage is that it's optimized for size (that is, it's compressed), long-term storage, and low cost. _The cold path is not optimized for availability_.

Having an understanding of your own data is important. If it consists of files, images, recordings, and similar disparate items, then it's considered **unstructured** storage. If your data neatly divides into similar database-like objects, then it's considered **structured**.

**Storages**

Blob storage is your _go to_ solution for cloud IoT storage.

**Blob storage** - unstructured data

* Block blob - When you have a large volume of data, it can be more efficient to access that data if it's divided into blocks. Each block has a unique ID. You have access to this ID, and can use it to read from, and write to, a specific block. Block blobs can be written to in parallel, and can be uploaded in any order. Basically, block blobs are for handling large amounts of data over a network. There isn't really an equivalent type of storage on your personal PC.
* Page blob - are there for data that needs frequent read/write access
* Append blob - can only be appended to, and is ideal for log files.

**Azure Data Lake**

The time to consider upgrading from Azure Blob to Azure Data Lake storage comes when you have an enormous amount of data, big data in cloud terminology. Blob storage is easily accessible, secure, and low-cost. However, with big data, data organization becomes an issue. A Data Lake provides additional features to help organize, and secure, vast amounts of data.

To help organize data, a concept called _hierarchical namespaces_ is available in a Data Lake. A hierarchical namespace can be used to encapsulate a collection, large or small, of data objects and files. It basically adds another level of reference, that is used to make access to the data more efficient.

Security in Azure Data Lake is on the file, or folder, level, or greater granularity if needed. All the security, and API access, features of Blob storage apply to Data Lake storage.

Finally, Data Lake analytics, available through REST APIs, are optimized for big data. Your queries should still run in a decent amount of time, even if they're trawling through a sea of data.