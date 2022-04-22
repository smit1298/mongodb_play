const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "mongodb_practice_db";

async function main() {
  await client.connect();

  const db = client.db(dbName);

  inserting item into 
  const collection = db.collection("notes");
  collection.insertOne({
    title: "New note title",
    body: "New note body"
  });
  return "done";
}

main()
.then(console.log)
.catch(console.error);
