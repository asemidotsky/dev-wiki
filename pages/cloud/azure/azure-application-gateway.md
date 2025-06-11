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

## Multi-site hosting

It is possible to use a single Azure Application Gateway to handle traffic for multiple public DNS names and route it to different backend pools based on the DNS name. This is achieved through multi-site hosting.

Here's a brief overview of how you can set it up:

1. **Create Listeners**: Configure multiple listeners on the Application Gateway, each associated with a different public DNS name.
1. **Define Backend Pools**: Create separate backend pools for each DNS name.
1. **Set Up Routing Rules**: Create routing rules that direct traffic from each listener to the appropriate backend pool based on the DNS name.

For example, you can have `www.contoso.com` and `www.fabrikam.com` both pointing to the same Application Gateway IP address. You'd create two listeners, one for each DNS name, and then set up routing rules to forward traffic to different backend pools12.

[Official docs](https://learn.microsoft.com/en-us/azure/application-gateway/multiple-site-overview)