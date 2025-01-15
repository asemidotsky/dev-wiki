# Azure Application Gateway

* [Application gateway components](https://learn.microsoft.com/en-us/azure/application-gateway/application-gateway-components)
* [FAQ](https://learn.microsoft.com/en-us/azure/application-gateway/application-gateway-faq)

## Backend pools

A backend pool routes request to backend servers, which serve the request. Backend pools can contain:

* NICs
* Virtual machine scale sets
* Public IP addresses
* Internal IP addresses
* FQDN
* Multitenant backends (such as App Service)

Application Gateway backend pool members aren't tied to an availability set. An application gateway can communicate with instances outside of the virtual network that it's in. As a result, the members of the backend pools can be across clusters, across datacenters, or outside Azure, as long as there's IP connectivity.

If you use internal IPs as backend pool members, you must use [virtual network peering](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview) or a [VPN gateway](https://learn.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways). Virtual network peering is supported and beneficial for load-balancing traffic in other virtual networks.

An application gateway can also communicate with on-premises servers when they're connected by Azure ExpressRoute or VPN tunnels if traffic is allowed.

You can create different backend pools for different types of requests. For example, create one backend pool for general requests, and then another backend pool for requests to the microservices for your application.

After you add virtual machine scale sets as a backend pool member, you need to upgrade virtual machine scale sets instances. Until you upgrade scale sets instances, the backend will be unhealthy.
