const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('server running');
});





const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.zfupy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log('db connected')
    // perform actions on the collection object
    client.close();
});


app.listen(port, () => {
    console.log('crd running', port);
});