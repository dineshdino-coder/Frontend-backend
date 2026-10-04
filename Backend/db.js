const { MongoClient } = require("mongodb");

async function connectDatabase(uri, databaseName) {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    await client.db(databaseName).command({ ping: 1 });
    return client;
  } catch (error) {
    await client.close();
    throw error;
  }
}

module.exports = { connectDatabase };
