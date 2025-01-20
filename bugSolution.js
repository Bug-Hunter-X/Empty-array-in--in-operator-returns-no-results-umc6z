```javascript
// Solution using $exists operator to check for field existence
db.collection.find({ field: { $exists: true } }); //This will return documents where the field exists.

//Alternative -  if empty array is an acceptable value, adjust query based on other fields
db.collection.find({ otherField: 'someValue' });
```