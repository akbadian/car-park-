const Car = require('../models/Car');

// get all cars
exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ error : error.message });
    }
}

// get car by Id
exports.getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message : 'Car Not Found !'});
          }
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({error : error.message});
    }
}

// Create a new car
exports.createCar = async (req, res) => {
    try { const newCar = new Car(req.body);
          const savedCar = await newCar.save();
        res.status(201).json(savedCar);
    } catch (error) {
        res.status(400).json({ error : error.message});
    }
}

// Update a car by ID
exports.updateCar = async (req, res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new : true});
        if (!updatedCar) {
            return res.status(404).json({ message : 'Car Not Found!'}); 
        }
        res.status(200).json(updatedCar);
    } catch (error) {
        res.status(400).json({ error : error.message});
    }
}

// Delete a car by ID
exports.deleteCar = async (req, res) => {
    try {
        const deletedCar = await Car.findByIdAndDelete(req.params.id);
        if (!deletedCar) {
            return res.status(404).json({ message : 'Car Not Found!'});
        }
        res.status(200).json({message : 'Car deleted successfully!'});
    } catch (error) {
        res.status(500).json({ error : error.message});
    }
}