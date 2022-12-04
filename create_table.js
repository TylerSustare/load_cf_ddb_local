var params = {
  TableName: "table_name",
  KeySchema: [
    // The type of of schema.  Must start with a HASH type, with an optional second RANGE.
    {
      // Required HASH type attribute
      AttributeName: "id",
      KeyType: "HASH",
    },
  ],
  AttributeDefinitions: [
    // The names and types of all primary and index key attributes only
    {
      AttributeName: "id",
      AttributeType: "S", // (S | N | B) for string, number, binary
    },
  ],
  ProvisionedThroughput: {
    // required provisioned throughput for the table
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  // GlobalSecondaryIndexes: [
  //   // optional (list of GlobalSecondaryIndex)
  //   {
  //     IndexName: "index_name_1",
  //     KeySchema: [
  //       {
  //         // Required HASH type attribute
  //         AttributeName: "index_hash_key_attribute_name_1",
  //         KeyType: "HASH",
  //       },
  //       {
  //         // Optional RANGE key type for HASH + RANGE secondary indexes
  //         AttributeName: "index_range_key_attribute_name_1",
  //         KeyType: "RANGE",
  //       },
  //     ],
  //     ProvisionedThroughput: {
  //       // throughput to provision to the index
  //       ReadCapacityUnits: 1,
  //       WriteCapacityUnits: 1,
  //     },
  //   },
  // ],
};
dynamodb.createTable(params, function (err, data) {
  if (err) ppJson(err);
  // an error occurred
  else ppJson(data); // successful response
});
