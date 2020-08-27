## What is LDAP?

* LDAP stands for **Lightweight Directory Access Protocol**.
* It is a **standard for storing and accessing “Directory” information**. Directory as in the yellow pages, not the filesystem kind.
* OpenLDAP (unix) and Active Directory (Microsoft) implement LDAP.
* Commonly used to store organisational information such as employee information.
* Queried for access control definitions (logging in, checking access), addressbook information, etcetera.

## How is information stored?

* LDAP is a **hierachical (tree-based) database**.
* Information is stored as **key-value pairs**.
* The tree structure is basically free-form. Every organisation can choose how to arrange the tree for themselves, although there are some commonly used patterns.

## The tree

```
dc=com
    dc=megacorp
        ou=people
            uid=jjohnson
                objectClass=inetOrgPerson,posixAccount
                cn=John Johnson
                uid=jjohnson
                mail=j.johnson@megacorp.com
            uid=ppeterson
                objectClass=inetOrgPerson,posixAccount
                cn=Peter Peterson
                uid=ppeterson
                mail=p.peterson@megacorp.com
```

* Each leaf in the tree has a specific unique path called the **Distinguished Name (DN)**. For example: *uid=ppeterson,ou=people,dc=megacorp,dc=com*
* Unlike file paths and most other tree-based paths which have their roots on the left, **the Distinguished Name has the root of the tree on the right**.
* Instead of the conventional path separators such as the dot ( . ) or forward-slash ( / ), **the DN uses the comma ( , ) to separate path elements**.
* Unlike conventional paths (e.g. /com/megacorp/people/ppeterson), **the DN path includes an attribute type for each element in the path**. For instance: dc=, ou= and uid=. These are abbreviations that specify the type of the attribute. More on attribute types in the Entry chapter.
* It is common to arrange the tree in a globally unique way, using dc=com,dc=megacorp to specify the organisation.
* **Entries are parts of the tree that actually store information**. In this case: uid=jjohnson and uid=ppeterson.

## Entries

An example entry for DN uid=jjohnson,ou=people,dc=megacorp,dc=com

```
objectClass=inetOrgPerson,posixAccount
cn=John Johnson
uid=jjohnson
mail=j.johnson@megacorp.com
```

* An entry has an Relative Distinguished Name (RDN). **The RDN is a unique identifier for the entry in that part of the tree**. For the entry with Distinguished Name (DN) uid=jjohnson,ou=people,dc=megacorp,dc=com, the RDN is *uid=jjohnson*.
* **An entry stores key/value pairs**. In LDAP lingo, these are called **attribute types** and **attribute values**. Attribute types are sometimes abbreviations. In this case, the attribute types are cn= (CommonName), uid= (UserID) and mail=.
* **Keys may appear multiple times**, in which case the are considered as a list of values.
* An entry has one or more objectClasses.
* **Object classes are defined by schemas**, and **they determine which attributes must and may appear in an entry**. For instance, the posixAccount object class is defined in the nis.schema and must include cn, uid, etc.
* Different object classes may define the same attribute types.
* A reference of common object classes can be found in [Appendix E](http://www.zytrax.com/books/ldap/ape/#objectclasses) of the excellent [Zytrax LDAP Guide](http://www.zytrax.com/books/ldap/).
* A reference of common attribute types can also be found in [Appendix E](https://www.zytrax.com/books/ldap/ape/#attributes).

## Connecting and searching LDAP servers

The most common action to perform on LDAP servers is to search for information in the directory. For instance, you may want to search for a username to verify if they entered their password correctly, or you may want to search for Common Names (CNs) to auto-complete names and email addresses in your email client. In order to search an LDAP server, we must perform the following:

1. Connect to the LDAP server
1. Authenticate against the LDAP server so we are allowed to search. This is called **binding**. Basically it’s just logging in. We bind against an LDAP server by specifying a **user’s DN and password**. This can be confusing because there can be DNs/password with which you can bind in the LDAP, but also user/passwords which are merely stored so that other systems can authenticate users using the LDAP server.
1. Specify which sub-part of the tree we wish to search. This is called **the Base DN (Base Distinguished Name)**. For example: ou=people,dc=megacorp,dc=com, so search only people. Different bind DN’s may search different parts of the tree.
1. Specify how deep we want to search in the tree. This is called **the level**. The level can be:
    1. baseObject (search just the named entry, typically used to read one entry)
    1. singleLevel (entries immediately below the base DN)
    1. wholeSubtree (the entire subtree starting at the base DN).
1. Specify what kind of entries we’d like to search for. This is called **the filter**. For example, (objectClass=*) will search for ANY kind of object class. (objectClass=posixAccount) will only search for entries of the posixAccount object class.

Here’s an example of connecting, binding and searching an LDAP server using the ldapsearch commandline util:

```bash
$ ldapsearch -W -h ldap.megacorp.com -D "uid=ldapreader,dc=megacorp,dc=com"
  -b ou=people,dc=megacorp,dc=com "(objectclass=*)"
password: ********
```
* -W tells ldapsearch to prompt for a password.
* -h is the hostname of the LDAP server to connect to.
* -D is the Distguished Name (DN), a.k.a the username, with which to connect. In this case, a special ldapreader account.
* -b is the Base DN, a.k.a the subtree, we want to search.

Finally, we specify a search filter: "(objectclass=*)". This means we want to search for all object classes.

The previous example, but this time in the Python programming language:
```python
import ldap
l = ldap.initialize('ldap://ldap.megacorp.com:389')

l.bind('uid=ldapreader,dc=megacorp,dc=com', 'Myp4ssw0rD')
l.search_s('ou=people,dc=megacorp,dc=com', ldap.SCOPE_SUBTREE,
           filterstr="(objectclass=*)")
```

## Glossary

### DNs and RDNs

An entry’s distinguished name, often referred to as a DN, uniquely identifies that entry and its position in the directory information tree (DIT) hierarchy. The DN of an LDAP entry is much like the path to a file on a filesystem.

An LDAP DN is comprised of zero or more elements called relative distinguished names, or RDNs. Each RDN is comprised of one or more (usually just one) attribute-value pairs. For example, “uid=john.doe” represents an RDN comprised of an attribute named “uid” with a value of “john.doe”. If an RDN has multiple attribute-value pairs, they are separated by plus signs, like “givenName=John+sn=Doe”.

### Attributes

Attributes hold the data for an entry. Each attribute has an attribute type, zero or more attribute options, and a set of values that comprise the actual data.

### Entries
Attributes by themselves are not very useful. To have meaning, they must be associated with something. Within LDAP, you use attributes within an entry. An entry is basically a collection of attributes under a name used to describe something.

### Object Classes

Object classes are schema elements that specify collections of attribute types that may be related to a particular type of object, process, or other entity. Every entry has a structural object class, which indicates what kind of object an entry represents (e.g., whether it is information about a person, a group, a device, a service, etc.), and may also have zero or more auxiliary object classes that suggest additional characteristics for that entry.

The two main types of ObjectClasses are **structural** or **auxiliary**.

* LDIF (LDAP Data Interchange Format)

## Attributes List

* cn: Common name
* sn: Surname
*

## Links

* [LDAP for Rocket Scientists](https://www.zytrax.com/books/ldap/)
* [Wikipedia page on LDAP](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol)
* [Basic LDAP Concepts](https://ldap.com/basic-ldap-concepts/)
* [Understanding the LDAP Protocol, Data Hierarchy, and Entry Components](https://www.digitalocean.com/community/tutorials/understanding-the-ldap-protocol-data-hierarchy-and-entry-components)