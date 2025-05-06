const mongoose = require('mongoose');
require('dotenv').config();

const Car = require('./models/cars');

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('MongoDB connected ...✅');
        
        // Create a new car instance
        const newCar = new Car({
            brand: 'Toyota',
            model: 'Corolla',
            licensePlate: 'ABC1234',
            status: 'available'
        });

        try {
            // Save the car instance to the database
            const saveCar = await newCar.save();
            console.log('✅ Car saved successfully:', saveCar);
        } catch (error) {
            console.error('❌ Error saving car:', error.message);
        } finally {
            // Close the connection after the operation
            mongoose.connection.close()
                .then(() => console.log('✅ MongoDB connection closed.'))
                .catch(err => console.error('❌ Error closing MongoDB connection:', err));
        }
        })
    .catch((err) => console.error("❌ MongoDB connection error  : ", err));



