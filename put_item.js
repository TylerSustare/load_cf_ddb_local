var params = {
  TableName: "table_name",
  // Item: { id: "abc123", firstName: "Sam", lastName: "Spoons", },
  Item: { id: "def456", firstName: "Sam", lastName: "Spoons" },
};
docClient.put(params, function (err, data) {
  if (err) ppJson(err);
  // an error occurred
  else ppJson(data); // successful response
});
