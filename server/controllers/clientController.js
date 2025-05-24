const Client = require('../models/Client');

// Create a new client
exports.createClient = async (req, res) => {
    try {
        const client =  new Client(req.body);
        await client.save();
        res.status(201).json({ message : 'Client created successfully', client})
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
}

// get all clients
exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message : error.message});
    }
}

// Get client by Id
exports.getClientById = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ message : 'Client Not Found !'});
        }
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ message : error.message});
    }
}

// Update client by Id
exports.updateClientById = async (req, res) => {
    try {
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, {new : true});
        if (!client) {
            return res.status(404).json({ message : 'client Not Found !'});
        }
        res.status(200).json({ message : 'Client updated succesfully', client});
    } catch (error) {
        res.status(500).json({ message : error.message});
    }
}

// Delete client by Id
exports.deleteClientById = async (req, res) => {
    try {
        const client = await Client.findByIdAndDelete(req.params.id);
        if (!client) {
            return res.status(404).json({ message : 'Client Not Found !'});
        }
        res.status(200).json({ message : 'client deleted successfully'});
    } catch (error) {
        res.status(500).json({ message : error.message});
    }
};
