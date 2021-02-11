## Network

[OSI Model](https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/)

TCP/IP model is another model.

Segments (Transport) -> Packets (Network) -> Frames (Data Link)

* [What is the network layer? | Network vs. Internet layer](https://www.cloudflare.com/learning/network-layer/what-is-the-network-layer/)
* [Router](https://www.cloudflare.com/learning/network-layer/what-is-routing/)
* [Switch](https://www.cloudflare.com/learning/network-layer/what-is-a-network-switch/)
* [What are layer 3 DDoS attacks?](https://www.cloudflare.com/learning/ddos/layer-3-ddos-attacks/)
* [Understanding IP Addresses, Subnets, and CIDR Notation for Networking](https://www.digitalocean.com/community/tutorials/understanding-ip-addresses-subnets-and-cidr-notation-for-networking)

## Subnet

[What is a subnet? | How subnetting works](https://www.cloudflare.com/learning/network-layer/what-is-a-subnet/)

## IP address

Every IP address has two parts. The first part indicates which network the address belongs to. The second part specifies the device within that network. However, the length of the "first part" changes depending on the network's class.

Networks are categorized into different classes, labeled A through E. Class A networks can connect millions of devices. Class B networks and Class C networks are progressively smaller in size. (Class D and Class E networks are not commonly used.)

**Class A network**: Everything before the first period indicates the network, and everything after it specifies the device within that network. Using 203.0.113.112 as an example, the network is indicated by "203" and the device by "0.113.112."

**Class B network**: Everything before the second period indicates the network. Again using 203.0.113.112 as an example, "203.0" indicates the network and "113.112" indicates the device within that network.

**Class C network**: For Class C networks, everything before the third period indicates the network. Using the same example, "203.0.113" indicates the Class C network, and "112" indicates the device.