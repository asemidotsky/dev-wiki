## SQL Guidelines fro microservices and cloud

* Design for cloud-first, on-prem second
* Optimize for high performance, multi-tenancy, and online upgrades
* Database only accessed from trusted AT / JA
* All access through SQLResourceComponent and Stored Procedures
* Transaction managed in SQL code (not in mid-tier)
* Security is enforced on the middle tier
* Schemas used for separate subsystems
* PartitionID column used to partition tenants