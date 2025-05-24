const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const clientController = require('../controllers/clientController');
router.use(authMiddleware);

router.post('/', clientController.createClient);
router.get('/', clientController.getAllClients);      
router.get('/:id', clientController.getClientById);
router.put('/:id', clientController.updateClientById);
router.delete('/:id', clientController.deleteClientById);

module.exports = router;


