const express = require('express');
const cors = require('cors');      
const mongooose = require('mongoose');
const carsRoute = require('./routes/carRoutes'); 
const authRoutes = require('./routes/authRoutes'); // Import the auth routes
const authMiddleware = require('./middleware/authMiddleware'); // Import the auth middleware
const clientRoutes = require('./routes/clientRoutes'); // Import the client routes
const resaRoutes = require('./routes/resaRoutes'); // Import the reservation routes
require('dotenv').config();

//App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Auth Routes - No middleware needed here
app.use('/api/auth', authRoutes); 

// Apply auth middleware only after open routes
app.use(authMiddleware); // Protect routes after this point


// Protected Routes - Middleware applied
app.use('/api/cars', authMiddleware, carsRoute);
app.use('/api/clients', authMiddleware, clientRoutes);
app.use('/api/resas', authMiddleware, resaRoutes);

// Error handling middleware    
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

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
