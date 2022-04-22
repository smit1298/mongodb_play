const { MongoClient } = require('mongodb');


// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url); 

const dbName = 'mongodb_practice_db';

async

client.connect();