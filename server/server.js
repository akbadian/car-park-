const express = require('express');
const cors = require('cors');      
const mongooose = require('mongoose');
const carsRoute = require('./routes/carRoutes'); 
require('dotenv').config();

//App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/cars', carsRoute);


// Connect to MongoDB and Start Server
mongooose
    .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected ...'))
    .catch((err) => console.error("MongoDB connection error : ", err));

// Sample root route
app.get('/', (req, res) => { 
    res.send('CarPark Management API is runing ...') });

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {console.log(`Server is running on ${PORT}`)});