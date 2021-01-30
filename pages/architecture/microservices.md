## The needs

* This shift often happened in concert with the move to improve the autonomy of those teams, allowing them to develop new ideas, implement them, and then ship them, all while reducing the need for coordination with other parts of the organization.
But highly coupled architectures require heavy coordination between systems and the teams that maintain them—they are the enemy of any organization that wants to optimize autonomy.


## Challenges

Microservices architectures can also present challenges, such as:

* Client apps are coupled to microservices. If you want to change the location or definition of the microservice, you may have to reconfigure or update the client app.
* Each microservice may be presented under different domain names or IP addresses. This presentation can give an impression of inconsistency to users and can negatively affect your branding.
* It can be difficult to enforce consistent API rules and standards across all microservices. For example, one team may prefer to respond with XML and another may prefer JSON.
* You're reliant on individual teams to implement security in their microservice correctly. It's difficult to impose these requirements centrally.

Solution is: **API Management, API Gateway**

Composing an API using API Management has advantages that include:

* Client apps are coupled to the API expressing business logic, not the underlying technical implementation with individual microservices. You can change the location and definition of the services without necessarily reconfiguring or updating the client apps.
* API Management acts as an intermediary. It forwards requests to the right microservice, wherever it is located, and returns responses to users. Users never see the different URIs where microservices are hosted.
* You can use API Management policies to enforce consistent rules on all microservices in the product. For example, you can transform all XML responses into JSON, if that is your preferred format.
* Policies also enable you to enforce consistent security requirements.

## Links

* https://microservices.io/
* https://martinfowler.com/articles/microservices.html
* https://aws.amazon.com/microservices/