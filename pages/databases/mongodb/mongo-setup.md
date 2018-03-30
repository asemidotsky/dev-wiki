# MongoDB Setup

## Ubuntu setup

[Install MongoDB Community Edition on Ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

## Configure Auth

[MongoDB manual - Enable Auth](https://docs.mongodb.com/manual/tutorial/enable-authentication/)

### Create users

```js
// create super admin user with name 'admin'
use admin

db.createUser({
    user: "admin",
    pwd: "123456",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

// create user 'alex' as owner of database 'Staging-Payments'
db.createUser({
  user: "alex",
  pwd: "030201",
  roles: [ { role: "dbOwner", db: "Staging-Payments" } ]
}
)

// create user 'myTester' and grant different roles for different databases
db.createUser(
  {
    user: "myTester",
    pwd: "xyz123",
    roles: [ { role: "readWrite", db: "test" },
             { role: "read", db: "reporting" } ]
  }
)

// grant roles for existing user
db.grantRolesToUser(
  "admin",
  [ { role: "dbOwner", db: "Dev-Test" },
          { role: "dbOwner", db: "Staging-Test" } ]
)
```

### Connect and authenticate

#### To authenticate during connection

`mongo --port 27017 -u "myUserAdmin" -p "abc123" --authenticationDatabase "admin"`

#### To authenticate after connecting

```js
use admin
db.auth("myUserAdmin", "abc123")
```