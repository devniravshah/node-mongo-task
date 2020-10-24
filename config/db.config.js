const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

 function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    mongoose.connect('mongodb+srv://testuser:test@123@cluster1.x4fr0.mongodb.net/<demoDB>?retryWrites=true&w=majority', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true
        });
}

main();