const express = require('express');
const cors = require('cors');      
const mongooose = require('mongoose');
require('dotenv').config();

const app = express();
const carsRoute = require('./routes/cars'); //routes
app.use('api/cars', carsRoute); //routes
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongooose
    .connect(proccess.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected ...'))
    .catch((err) => console.error("MongoDB connection error : ",err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {console.log(`Server is running on ${PORT}`)});