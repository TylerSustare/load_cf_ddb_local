var params = {
  TableName: "music",
  IndexName: "by_sk",
  // KeyConditionExpression: "#pk = :pk and begins_with(#sk, :sk)",
  KeyConditionExpression: "#sk = :sk and begins_with(#pk, :pk)",
  ExpressionAttributeNames: {
    "#pk": "pk",
    "#sk": "sk",
  },
  ExpressionAttributeValues: {
    ":pk": "genre",
    ":sk": "artist#ts",
  },
};
docClient.query(params, function (err, data) {
  if (err) ppJson(err);
  // an error occurred
  else ppJson(data); // successful response
});
