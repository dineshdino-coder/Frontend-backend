const express = require('express');
// const cors = require("cors");
// const mongoose = require("mongoose");

const {MongoClient}= require("mongodb")

const client = new MongoClient("mongodb+srv://dineshone1997_db_user:CBFrkHKREpkcCqwl@learningcluster.flgibyi.mongodb.net/?appName=LearningCluster");

const dbName = "sample_mflix";

async function main(){
  await client.connect();
  console.log("BD connected successfully");
  const db = client.db(dbName);
  const collection = db.collection("users");


  const findResult = await collection.find({}).toArray();

  console.log("finalresult====>", findResult);

}

main();

const app = express();

app.get("/",(req, res)=>{
  res.send({
    name:"dinesh"
  });
})

app.listen(5000, ()=>{
  console.log("port 5000 is running fine")
});




// -------------------------------------------------------------------

// const PORT = process.env.PORT || 6000;


// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected");

//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("MongoDB connection failed:", error);
//   });













// HTTP
// const http = require("http");

// require('dotenv').config();

// const app = express();

// app.use(cors());
// app.use(express.json());
// console.log("------>app",app.use);


// const serv = http.createServer((req, res)=>{
//   let methord = req.method;
//   let url = req.url;
//   if(methord == "GET" && url == "/"){
//     console.log("Home is loaded")
//     res.end("Home page");
//   }else if( url == "/profile"){
//     console.log("profile")
//     res.end("This is profile page so dont navigate to inner");
//   }else if(url == "/json"){
//     res.end(JSON.stringify({
//       name:"dinesh",
//       place: "nallur",
//       date: "11.10.1997"
//     }))
//   }
// });
