// ******************** describe ******************************
var params = {
  TableName: "music"
};
dynamodb.describeTable(params, function(err, data) {
  if (err) ppJson(err);
  // an error occurred
  else ppJson(data); // successful response
});

// ******************** add item ******************************
var params1 = {
  TableName: "music",
  Item: {
    // a map of attribute name to AttributeValue
    genre: "country",
    artist_album_song: "George Strait",
    artist: "George Strait"
  }
};

var params2 = {
  TableName: "music",
  Item: {
    genre: "country",
    artist_album_song: "George Strait_Troubadour_Troubadour",
    s3_location: "GeorgeStrait/Troubadour/Troubadour"
  }
};
var params3 = {
  TableName: "music",
  Item: {
    genre: "country",
    artist_album_song: "George Strait_Somewhere down in Texas_You'll be there",
    s3_location: "George Strait/Somewhere down in Texas/You'll be there"
  }
};
var params4 = {
  TableName: "music",
  Item: {
    genre: "country",
    artist_album_song: "George Strait_Somewhere down in Texas_Texas",
    s3_location: "George Strait/Somewhere down in Texas/You'll be there"
  }
};
docClient.put(params1, function(err, data) {
  if (err) ppJson(err);
  // an error occurred
  else ppJson(data); // successful response
});
docClient.put(params2, function(err, data) {
  if (err) ppJson(err);
  else ppJson(data);
});
docClient.put(params3, function(err, data) {
  if (err) ppJson(err);
  else ppJson(data);
});
docClient.put(params4, function(err, data) {
  if (err) ppJson(err);
  else ppJson(data);
});

// ******************** sparse index scan ******************************
var params = {
  TableName: "music",
  // IndexName: 'artist_gsi',
  ReturnConsumedCapacity: "TOTAL" // optional (NONE | TOTAL | INDEXES)
};
dynamodb.scan(params, function(err, data) {
  if (err) ppJson(err);
  // an error occurred
  else ppJson(data); // successful response
});

// ******************** query ******************************
var params = {
  TableName: 'music',
  KeyConditionExpression: 'genre = :value and begins_with (artist_album_song, :val)', 
  ExpressionAttributeValues: {
    ':value': 'country',
    ':val': "George Strait_Some"
  },
};
docClient.query(params, function(err, data) {
  if (err) ppJson(err); // an error occurred
  else ppJson(data); // successful response
});