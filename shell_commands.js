// ******************** describe ******************************
// var params = {
//     TableName: 'music',
// };
// dynamodb.describeTable(params, function(err, data) {
//     if (err) ppJson(err); // an error occurred
//     else ppJson(data); // successful response
// });

// ******************** add item ******************************
// var params1 = {
//     TableName: 'music',
//     Item: { // a map of attribute name to AttributeValue
//         genre: 'country',
//         artist_album_song: 'George Strait'
//     }
// };
// docClient.put(params1, function(err, data) {
//     if (err) ppJson(err); // an error occurred
//     else ppJson(data); // successful response
// });
//
// var params2 = {
//     TableName: 'music',
//     Item: { // a map of attribute name to AttributeValue
//         genre: 'country',
//         artist_album_song: 'George Strait_Troubadour_Troubadour'
//     }
// };
// docClient.put(params2, function(err, data) {
//     if (err) ppJson(err); // an error occurred
//     else ppJson(data); // successful response
// });

// ******************** sparse index scan ******************************
var params = {
    TableName: 'music',
    // IndexName: 'artist_gsi',
    ReturnConsumedCapacity: 'TOTAL', // optional (NONE | TOTAL | INDEXES)
};
dynamodb.scan(params, function (err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});