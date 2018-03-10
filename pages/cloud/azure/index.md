* Azure - Public Cloud
* Azure Stack - Private Cloud

Azure versions (co-existence):
* Azure v1 - Azure Service Management (ASM), Classic portal
* Azure v2 - Azure Resource Management (ARM), New portal/API's/Tooling

# Azure 2

* Building Blocks
* Individual Resources
   * Belongs only to one Resource Group
* Resource *Groups*
   * Contains many resources
* ARM Templates (JSON)
   * Defines resources, dependencies, all configuration
* Tags
   * Group resources by one or more tags
* RBAC (Role based access control)

# Account & Subscriptions

Account:
* has a single user by default - account administrator.
* has no billing info attached to it.
* has no resources.

Subscription:
* has a billing info
* has a payment method
* belongs to single directory

![Azure account and subscription](azure-account-and-subscription.png)

# Global Infrastructure

* Geos
    * 1+ Region
    * 1+ Region Pair
* Regions
    * 1+ DC's
* Region Pairs
    * 2 Regions 

# Role Based Access Control (RBAC)

* Roles
* Scopes
* Assignments

Role is a **policy** document.
A list of **actions**.

* Built-in roles. Owner, Contributor, Reader
* Specific roles: Backup Operator & Website Contributor
* Custom Roles

![Assignment role to scope](role-scope-assignment.png)

# Azure Compute

* Virtual Machines
    * Type
    * Size
* App Service
    * Runtime environments
* Cloud Services
    * Web Roles
    * Worker Roles
    * Have much more flexibility in configuration of underlying infrastructure
* Container Service
    * Docker
    * Kubernetes
* Azure Functions
* Service Fabric
* Batch

# Azure Storage

* Blob Storage
    * For unstructured data
    * Massive data: media files, images, etc.
    * Stores objects. Object is like a file.
    * Object has: key (name), data, metadata
* Queue Storage
* File Storage
* Disk Storage

Charges by two factors: amount of storage or amount of accessing the data

Storage extras:
* StorSimple
* Archive Storage
* Data Lake Store - large scale objects for big data analysis

[Azure Storage Explorer](https://azure.microsoft.com/en-au/features/storage-explorer/)

# Azure Networking

* Virtual Networks (vNet)
* VPN Gateway
* ExpressRoute
* Content Delivery Network

Products:
* Load Balancer
* Application Gateway
* Traffic Manager
* Azure DNS

# Databases

Relational:
* SQL Database
* Azure Database MySql
* Azure Database PostgreSQL
* SQL Data warehouse

NoSQL:
* Table Storage
* Azure Cosmos DB
* Stretch Database
* Redis Cache
* Data factory

# AI & Cognitive Services

* Machine Learning
* Azure Bot Service
* Cognitive Services
    * Vision
    * Knowledge
    * Language
    * Speech
    * Search

# Resources

## Virtual Networks

* *Isolated* Network
* Has an *address space* for the network
* Can be 'subnetted' into smaller *sub-networks*
* Each of those can have an *IP range*
* Can be *connected* together