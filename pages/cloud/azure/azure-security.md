# Azure Security

* Azure Security Center provides visibility of your security posture across all of your services, both on Azure and on-premises.
* Azure Sentinel aggregates security data from many different sources and provides additional capabilities for threat detection and response.
* Azure Key Vault stores your applications' secrets, such as passwords, encryption keys, and certificates, in a single, central location.
* Azure Dedicated Host provides dedicated physical servers to host your Azure VMs for Windows and Linux.

## Azure Security Center

Azure Security Center is a monitoring service that provides visibility of your security posture across all of your services, both on Azure and on-premises. The term security posture refers to cybersecurity policies and controls, as well as how well you can predict, prevent, and respond to security threats.

Security Center can:

* Monitor security settings across on-premises and cloud workloads.
* Automatically apply required security settings to new resources as they come online.
* Provide security recommendations that are based on your current configurations, resources, and networks.
* Continuously monitor your resources and perform automatic security assessments to identify potential vulnerabilities before those vulnerabilities can be exploited.
* Use machine learning to detect and block malware from being installed on your virtual machines (VMs) and other resources. You can also use adaptive application controls to define rules that list allowed applications to ensure that only applications you allow can run.
* Detect and analyze potential inbound attacks and investigate threats and any post-breach activity that might have occurred.
* Provide just-in-time access control for network ports. Doing so reduces your attack surface by ensuring that the network only allows traffic that you require at the time that you need it to.

## Azure Sentinel

Azure Sentinel is Microsoft's cloud-based SIEM system. It uses intelligent security analytics and threat analysis.
Capabilities:
- Collect cloud data at scale
  - Collect data across all users, devices, applications, and infrastructure, both on-premises and from multiple clouds.
- Detect previously undetected threats
  - Minimize false positives by using Microsoft's comprehensive analytics and threat intelligence.
- Investigate threats with artificial intelligence
  - Examine suspicious activities at scale, tapping into years of cybersecurity experience from Microsoft.
- Respond to incidents rapidly
  - Utilize built-in orchestration and automation of common tasks.

## Azure Key Vault

Azure Key Vault can help you:
- Manage secrets
  - You can use Key Vault to securely store and tightly control access to tokens, passwords, certificates, API keys, and other secrets.
- Manage encryption keys
   - You can use Key Vault as a key management solution. Key Vault makes it easier to create and control the encryption keys that are used to encrypt your data.
- Manage SSL/TLS certificates
  - Key Vault enables you to provision, manage, and deploy your public and private Secure Sockets Layer / Transport Layer Security (SSL/TLS) certificates for both your Azure resources and your internal resources.
- Store secrets backed by hardware security modules (HSMs)
  - These secrets and keys can be protected either by software or by FIPS 140-2 Level 2 validated HSMs.

Benefits of Azure Key Vault:
- Centralized application secrets
- Securely stored secrets and keys
- Access monitoring and access control
- Simplified administration of application secrets
- Integration with other Azure services

There are three primary concepts used in an Azure Key Vault: vaults, keys, and secrets.

Here are some security best practices for using Azure Key Vault:
* Grant access to users, groups, and applications at a specific scope.
* Control what users have access to.
* Store certificates in your key vault.
* Ensure that you can recover a deletion of key vaults or key vault objects.

Key Vault access has two facets: the management of the Key Vault itself, and accessing the data contained in the Key Vault. Documentation refers to these facets as the _management plane_ and the _data plane_.

## Azure Dedicated Host

 Azure Dedicated Host provides dedicated physical servers to host your Azure VMs for Windows and Linux.

## Top 5 security items to consider before pushing to production

### Inputs and Outputs

* **Always validate any input**. Treat ALL data as untrusted and you will protect yourself from most of the common web app vulnerabilities.
   * [Validating User Input in ASP.NET Web Pages (Razor) Sites](https://docs.microsoft.com/en-us/aspnet/web-pages/overview/ui-layouts-and-themes/validating-user-input-in-aspnet-web-pages-sites)
   * [OWASP Input Validation Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
* **Always use parameterized queries**
* **Always encode your output**
  * [OWASP Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

### Secrets in Key Vault

Manage secrets in Key Vault.

### Framework Updates

Make sure to keep your frameworks and libraries up-to-date.

How do I update my framework?
Much like updating the core framework, branching your code, updating the components and testing is a good technique to validate a new version of a dependency.

Whenever possible, choose a modern framework to build your apps, always use the built-in security features, and make sure you keep it up-to-date. These simple rules will help to ensure your application starts on a solid foundation.

### Safe Dependencies

When you use libraries or other third-party components as part of your application, you are also taking on any risks they may have. The best way to reduce this risk is to ensure that you are only using components that have no known vulnerabilities associated with them.

## Data classification

Digital data always exists in one of three states: at **rest**, in **process**, and in **transit**.

All three states require unique technical solutions for data classification, but the applied principles of data classification should be the same for each. Data that is classified as confidential needs to stay confidential in each state.

Data can also be either structured or unstructured. Typical classification processes for structured data found in databases and spreadsheets are less complex and time-consuming to manage than those for unstructured data such as documents, source code, and email. Generally, organizations will have more unstructured data than structured data.

Regardless of the type of data, organizations need to manage data sensitivity.

Protect data at rest
* Data encryption at rest is a mandatory step toward data privacy, compliance, and data sovereignty.
* Apply disk encryption to help safeguard your data
* Encrypt your drives before you write sensitive data to them.

Protect data in transit
* Secure access from multiple workstations located on-premises to an Azure virtual network - Use site-to-site VPN
* Secure access from an individual workstation located on-premises to an Azure virtual network - Use point-to-site VPN
* Move large data sets over a dedicated high-speed wide-area network (WAN) link - Use Azure ExpressRoute
* Interact with Azure Storage through the Azure portal - All transactions occur via HTTPS

## Data sovereignty

Digital information is always subject to the laws of the country or region where it's stored. This concept is known as data sovereignty.

Azure operates in multiple geographies around the world. Azure geography is a defined area of the world that contains at least one **Azure Region**. An Azure region is an area containing one or more data centers.

Each Azure region is paired with another region within the same geography, forming a **region pair**.

## Azure RBAC