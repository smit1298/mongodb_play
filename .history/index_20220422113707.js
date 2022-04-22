const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "mongodb_practice_db";

async function main() {
  await client.connect();

  const db = client.db(dbName);

//   inserting item into db

  const collection = db.collection("notes");
// insert single collection into the database
//   collection.insertOne({
//     title: "New note title",
//     body: "New note body"
//   });


  collection.insertMany([
      { title: 'note2', body: 'note2 body'},
      { title: 'note3', body: 'note3 body'},
      { title: 'note4', body: 'note4 body'},
      { title: 'note5', body: 'note5 body'},
  ])

  return "done";
}

main()
.then(console.log)
.catch(console.error);
