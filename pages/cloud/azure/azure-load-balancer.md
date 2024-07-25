# Azure Load Balancing options

* [How to choose](https://devblogs.microsoft.com/premier-developer/azure-load-balancing-solutions-a-guide-to-help-you-choose-the-correct-option/)
* [Load balancing overview](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/load-balancing-overview)

Options to choose:

* Traffic Manager
* Azure Load Balancer
* Azure Application Gateway
* Azure Front Door

Sometimes the combination of all three can be used in Azure solutions.

## Azure Load Balancer

* SKU: Basic and Standard
* Can be used as public or internal load balancer

The Azure load balancer is used to balance traffic between Azure VMs only and more specifically Azure VMs in the same availability set and Scale sets. Also, the Azure VMs are within the same Azure region.

## Azure Application Gateway

* For applications that span both the Azure cloud and on-premise resources, Application Gateway does not apply to just Azure cloud resources, it can be used for applications running on-premise.

>Application Gateway can talk to instances outside of the virtual network that it is in as long as there is IP connectivity. If you plan to use internal IPs as backend pool members, then it requires VNET Peering or VPN Gateway.

[Generate your Private Root and Server (aka Leaf) certificates](https://appgwbackendcertgenerator.azurewebsites.net/)

## Azure Traffic Manager

Unlike the Application Gateway and the Azure Load Balancer that routes traffic using the TCP/IP protocol, the Traffic Manager uses DNS to direct traffic to the appropriate backend pool. The backend pool supports any public DNS CNAME, hence it is suitable for scenarios where requests are targeted to both the on-premise application and cloud application.

Because the Azure Traffic Manager operates at the DNS level, there is no concept of “IP Address” for Traffic Manager, in order word, the Traffic Manager is not aware of the IP address of the endpoint because it works with DNS CNAME records. The CNAME record does not map to IP addresses, instead it maps to one DNS name to another. A better description from Jonathan Tuliani is the [forum post](https://learn.microsoft.com/en-us/archive/msdn-technet-forums/7ba33228-c3e8-44a3-b0e2-c69d150a5535) that described Traffic Manager as follows:

> "Traffic Manager provides DNS-level traffic routing. It works using ‘CNAME’ records. A ‘CNAME’ record is like an ‘alias’, it maps one DNS name to another. It does not map names to IP addresses (that is done by DNS ‘A’ records). Therefore, when using Traffic Manager with Azure services, the name resolution path is typically configured like this:

>1. Your service domain name in your vanity domain, e.g. www.contoso.com, CNAME to:
>1. The Traffic Manager domain name, e.g. contoso.trafficmanager.net, CNAME to
>1. The ‘A’ record for each service endpoint, e.g. contoso-eu.cloudapp.net and contoso-us.cloudapp.net, which are A records pointing to their respective service IP addresses

> Traffic Manager doesn’t directly consume the IP address (static or not). It is only configured with the DNS name of the A record which points to the service IP address. From a Traffic Manager viewpoint, it makes no difference whether the IP address behind that A record is static or not"

You may consider that Azure traffic manager is the solution you can have endpoints which include on-premise services. But Traffic Manager endpoint should be any internet facing service hosted inside or outside of Azure.

> If you have endpoints that are inside a private network, Traffic manager cannot be used for that traffic.

[FAQs](https://learn.microsoft.com/en-us/azure/traffic-manager/traffic-manager-faqs#what-types-of-traffic-can-be-routed-using-traffic-manager)
