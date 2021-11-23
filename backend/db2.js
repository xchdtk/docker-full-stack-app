const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = `mongodb+srv://xchdtk:xwlstn12@mycluster.k7jhv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connect = () => {
    MongoClient.connect(url)
  .then((client) => {
    console.log("mongo connected");
    console.log(client);
  })
  .catch((err) => console.log(err));
}

exports.connect = connect;
