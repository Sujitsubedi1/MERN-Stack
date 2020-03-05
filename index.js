const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

const app = express();

app.use(bodyParser.json());

//Create a route
const employee = require ('./routes/employee');
app.use('/employee', employee);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client','build','index.html'));
  })
}



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Sujitsubedi1:America1@cluster0-gsedg.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log('App is running')
})