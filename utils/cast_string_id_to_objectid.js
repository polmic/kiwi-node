




// Changes the type of descriptionId from string to objectid
db.plant_thumbnail.find({
    "descriptionId": { "$exists": true, $type : "string" },
    "$expr": { "$eq": [ { "$strLenCP": "$descriptionId" }, 24 ]}
}, {
    descriptionId: 1
}).forEach(function (x) {   
    x.descriptionId = new ObjectId(x.descriptionId);
    db.plant_thumbnail.save(x);
    print('ok for ' + x.descriptionId)
});

// Verification
db.plant_thumbnail.findOne({
    "descriptionId": { "$exists": true, $type : "string" }
});