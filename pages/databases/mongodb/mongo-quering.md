# MongoDB Quering

## Sorting

```js
db.getCollection('payments').find({}).sort({ "PaymentTime": -1})
```

## Grouping

```js
db.sli.aggregate([
    { "$group": {
        "_id": {
            "deploy_id": "$deploy_id",
            "value": "$value",
            "timestamp": "$timestamp"
        },
        "count": { "$sum": 1 }
    }},
    { "$sort": { "count": -1 } }
])
```

## Bulk field update

```js
db.getCollection('devices').update(
    // query
    {
        "device_serial" : "abc123"
    },

    // update
    [
       {$set: { rig_name: { $toLower: "$rig_name" } }}
    ],

    // options
    {
        "multi" : true,  // update only one document
        "upsert" : false  // insert a new document, if no existing document match the query
    }
);
```

```js
db.devices.find().forEach(
  function(e) {
    if (e.device_serial === "abc123") {
      e.rig_name = e.rig_name.toLowerCase().replace(" ", "-").replace("_", "-");
      e.rig.code = e.rig_name;
      db.devices.save(e);
    }
  }
)
```
