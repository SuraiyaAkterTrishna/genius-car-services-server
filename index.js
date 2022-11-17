const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

// middleware 
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dpx4erq.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// find multiple 
async function run() {
  try {
    await client.connect();
    const serviceCollection = client.db('genius-car-service').collection('service');

    app.get('/service', async (req, res) => {
      const query = {};
      const cursor = serviceCollection.find(query);
      const services = await cursor.toArray();
      res.send(services);
    })
  }
  finally {

  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello From backend!");
});

app.listen(port, () => {
  console.log(`App is running on port, ${port}`);
});

//time to start backend