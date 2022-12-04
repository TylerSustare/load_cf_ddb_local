var params = {
  TableName: "music",
  IndexName: "artist_gsi",
};
dynamodb.scan(params, function (err, data) {
  if (err) ppJson(err);
  // an error occurred
  else ppJson(data); // successful response
});
