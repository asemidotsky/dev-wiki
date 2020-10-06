[LDAP basics](pages/infrastructure/ldap)

# Open LDAP

* https://www.openldap.org/
* https://github.com/osixia/docker-openldap

## Data persistence
The directories **/var/lib/ldap (LDAP database files)** and **/etc/ldap/slapd.d (LDAP config files)** are used to persist the schema and data information, and should be mapped as volumes, so your ldap files are saved outside the container.
