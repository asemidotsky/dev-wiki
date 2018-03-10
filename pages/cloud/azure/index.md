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

# Resources

## Virtual Networks

* *Isolated* Network
* Has an *address space* for the network
* Can be 'subnetted' into smaller *sub-networks*
* Each of those can have an *IP range*
* Can be *connected* together