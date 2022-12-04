var params = {
  RequestItems: {
    // A map of TableName to Put or Delete requests for that table
    music: [
      {
        PutRequest: {
          Item: {
            pk: "album#george_strait",
            sk: "song#song_1",
            id: "s_def456",
            type: "song",
            attr: {
              name: "Song 1",
              s3_key: "c/gs/song_1",
              length: 1234,
              rating: 4.9,
              release_date: "timestamp",
            },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            pk: "album#george_strait",
            sk: "song#song_2",
            id: "s_def456",
            type: "song",
            attr: {
              name: "Song 2",
              s3_key: "c/gs/song_2",
              length: 1234,
              rating: 4.9,
              release_date: "timestamp",
            },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            pk: "artist#george_strait",
            sk: "song#song_2",
            id: "s_def456",
            type: "song",
            attr: {
              name: "Song 2",
              s3_key: "c/gs/song_2",
              length: 1234,
              rating: 4.9,
              release_date: "timestamp",
            },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            pk: "artist#george_strait",
            sk: "song#song_1",
            id: "s_def456",
            type: "song",
            attr: {
              name: "Song 1",
              s3_key: "c/gs/song_1",
              length: 1234,
              rating: 4.9,
              release_date: "timestamp",
            },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            pk: "artist#george_strait",
            sk: "album#george_strait",
            id: "a_def456",
            type: "album",
            attr: {
              name: "George Strait",
              top_songs: [1, 2, 3, 4],
              release_date: "timestamp",
            },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            pk: "artist#fgl",
            sk: "album#fgl",
            id: "a_def456",
            type: "album",
            attr: {
              name: "Florida Georgia Line",
              top_songs: [1, 2, 3, 4],
              release_date: "timestamp",
            },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            pk: "genre#country",
            sk: "artist#fgl",
            id: "a_def456",
            type: "artist",
            attr: {
              name: "Florida Georgia Line",
              top_songs: [1, 2, 3, 4],
              top_albums: ["a", "b", "c"],
              bio: "asasdfasdf",
            },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            sk: "genre#pop",
            pk: "artist#ts",
            id: "a_def456",
            type: "artist",
            attr: {
              name: "George Strait",
              top_songs: [1, 2, 3, 4],
              top_albums: ["a", "b", "c"],
              bio: "asasdfasdf",
            },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            pk: "artist",
            sk: "george_strait",
            id: "a_def456",
            type: "artist",
            attr: {
              name: "George Strait",
              top_songs: [1, 2, 3, 4],
              top_albums: ["a", "b", "c"],
              bio: "asasdfasdf",
            },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            pk: "artist",
            sk: "fgl",
            id: "a_def456",
            type: "artist",
            attr: {
              name: "Florida Georgia Line",
              top_songs: [1, 2, 3, 4],
              top_albums: ["a", "b", "c"],
              bio: "asasdfasdf",
            },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            pk: "genre",
            sk: "country",
            id: "g_def456",
            type: "genre",
            attr: {
              name: "country",
            },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            pk: "genre",
            sk: "rap",
            id: "g_abc123",
            type: "genre",
            attr: {
              name: "rap",
            },
          },
        },
      },
    ],
  },
};
docClient.batchWrite(params, function (err, data) {
  if (err) ppJson(err);
  // an error occurred
  else ppJson(data); // successful response
});
