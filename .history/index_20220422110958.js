const { MongoClient } = require('mongodb');


// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url); 

const dbName = 'mongodb_practice_db';

async function main( ) {
    await client.connect();

    const db = client.db(dbName);

    const collection = db.collection('notes');
    collection.insertOne()
}

