var params = {
  TableName: "table_name",
  Key: {
    // a map of attribute name to AttributeValue for all primary key attributes
    id: "abc123", //(string | number | boolean | null | Binary)
  },
};
docClient.get(params, function (err, data) {
  if (err) ppJson(err);
  // an error occurred
  else ppJson(data); // successful response
});
