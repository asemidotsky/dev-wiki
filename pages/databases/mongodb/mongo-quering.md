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
