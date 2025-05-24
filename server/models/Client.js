const mongoose = require('mongoose');
const clientSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true 
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : String,
        required : true
    },
    });

    module.exports = mongoose.model('Client', clientSchema);
    // The above code defines a Mongoose schema for a Client model in a MongoDB database.