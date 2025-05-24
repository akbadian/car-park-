const Resa = require('../models/Resa');

// Create a new reservation
exports.createResa = async (req, res) => {
    try {
        const resa = new Resa(req.body);
        await resa.save();
        res.status(201).json({ message : 'Reservation created successfully', resa });
    } catch (error) {
        res.status(400).json({ message : error.message });
    }
}

// Get all reservations
exports.getAllResas = async (req, res) => {
    try {
        const resas =  await Resa.find();
        res.status(200).json(resas)
    } catch (error) {
        res.status(500).json({ message : error.message});
    }
}

// Get a reservation by ID
exports.getResaById = async (req, res) => {
    try {
        const resa = await resa.findById(req.params.id);
        if (!resa) {
            res.status(404).json({ message : 'Reservation not found' });
        }
        res.status(200).json(resa);
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
}

// Update a reservation by ID
exports.updateResa = async (req, res) => {
    try {
        const resa = await Resa.findByIdAndUpdate(req.params.id, req.body, {new : true});
        if (!resa) {
            res.status(404).json({ message : 'Reservation not found' });
        }
        res.status(200).json({ message : 'Reservation updated successfully', resa });
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
}

// Delete a reservation by ID       
exports.deleteResa = async (req, res) => {
    try {
        const resa = await Resa.findByIdAndDelete(req.params.id);
        if (!resa) {
            res.status(404).json({ message : 'Reservation not found' });
        }
        res.status(200).json({ message : 'Reservation deleted successfully' });
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
};