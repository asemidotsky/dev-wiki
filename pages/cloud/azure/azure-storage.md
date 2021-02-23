# Azure Storage

* **Structured data** - Structured data, sometimes referred to as relational data, is data that adheres to a strict schema, so all of the data has the same fields or properties. The shared schema allows this type of data to be easily searched with query languages such as SQL (Structured Query Language).
* **Semi-structured data / NoSQL** - Semi-structured data is less organized than structured data, and is not stored in a relational format, as the fields do not neatly fit into tables, rows, and columns. Semi-structured data contains tags that make the organization and hierarchy of the data apparent - for example, key/value pairs. Semi-structured data is also referred to as non-relational or _NoSQL data_. The expression and structure of the data in this style is defined by a _serialization language: XML, JSON, YAML_.
    * Key-value databases (Redis)
    * Document databases
    * Graph databases
* **Unstructured data** - media files (photo, video), office files, text files, logs

Ask yourself these questions:

* Will you be doing simple lookups using an ID?
* Do you need to query the database for one or more fields?
* How many create, update, and delete operations do you expect?
* Do you need to run complex analytical queries?
* How quickly do these operations need to complete?

## Transactions

Transactions are often defined by a set of four requirements, referred to as _ACID guarantees_. ACID stands for Atomicity, Consistency, Isolation, and Durability:

* **Atomicity** means a transaction must execute exactly once and must be atomic; either all of the work is done, or none of it is. Operations within a transaction usually share a common intent and are interdependent.
* **Consistency** ensures that the data is consistent both before and after the transaction.
* **Isolation** ensures that one transaction is not impacted by another transaction.
* **Durability** means that the changes made due to the transaction are permanently saved in the system. Committed data is saved by the system so that even in the event of a failure and system restart, the data is available in its correct state.

## OLTP vs OLAP

Transactional databases are often called OLTP (Online Transaction Processing) systems. OLTP systems commonly support lots of users, have quick response times, and handle large volumes of data. They are also highly available (meaning they have very minimal downtime), and typically handle small or relatively simple transactions.

On the contrary, OLAP (Online Analytical Processing) systems commonly support fewer users, have longer response times, can be less available, and typically handle large and complex transactions.

## Azure Storage account

The settings that are controlled by a storage account are:
* Subscription
* Location
* Performance: Standard, Premium
* Replication
* Access tier
* Secure transfer required
* Virtual networks

![Typical storage arrangement](storage/2-typical-subscription-organization.png)

**How many storage accounts do you need?**

A storage account represents a collection of settings like location, replication strategy, and subscription owner. You need one storage account for every group of settings that you want to apply to your data. The following illustration shows two storage accounts that differ in one setting; that one difference is enough to require separate storage accounts.

Azure storage includes four types of data:
* Blobs: A massively scalable object store for text and binary data. Can include support for Azure Data Lake Storage Gen2.
* Files: Managed file shares for cloud or on-premises deployments.
* Queues: A messaging store for reliable messaging between application components.
* Table Storage: A NoSQL store for schema-less storage of structured data. Table Storage is not covered in this module.

To access storage:
1. Storage account keys (full access to storage, primary and secondary keys)
1. Shared access signatures
   - You can use a service-level shared access signature to allow access to specific resources in a storage account.
   - Use an account-level shared access signature to allow access to anything that a service-level shared access signature can allow, plus additional resources and abilities.

### Blob storage

Azure Blob storage is an object storage solution optimized for storing massive amounts of unstructured data, such as text or binary data. Blob storage is ideal for:

* Serving images or documents directly to a browser, including full static websites.
* Storing files for distributed access.
* Streaming video and audio.
* Storing data for backup and restoration, disaster recovery, and archiving.
* Storing data for analysis by an on-premises or Azure-hosted service.

Azure Storage supports three kinds of blobs:
* Block blobs
* Page blobs
* Append blobs

