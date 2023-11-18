const mongoose = require('mongoose');
require('dotenv').config();

const uri = 'mongodb+srv://ntmtriet:123@cluster0.tnats9m.mongodb.net/';


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

  
async function mongoConnect(){
    await mongoose.connect(uri);
}
async function mongoDisconnect(){
    await mongoose.disconnect();
}
module.exports={
    mongoConnect,
    mongoDisconnect,
}
