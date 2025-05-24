const mongoose = require('mongoose');
const resaSchema = new mongoose.Schema({
    clientId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Client',
        required : true
    },
    carId : {
        type : mongoose.Types.ObjectId,
        ref : 'Car',
        required : true
    },
    startDate : {
        type : Date,
        required : true
    },
    endDate : {
        type : Date,
        required : true
    },
    status : {
        type : String,
        enum : ['pending', 'confirmed', 'cancelled'],
        default : 'pending'
    },
    });

module.exports = mongoose.model('Reservation', resaSchema);
// The above code defines a Mongoose schema for a Reservation model in a MongoDB database.