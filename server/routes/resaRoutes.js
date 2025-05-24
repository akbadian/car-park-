const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const resaController = require('../controllers/resaController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, resaController.createResa);
router.get('/getAll', authMiddleware, resaController.getAllResas);  
router.get('/get/:id', authMiddleware, resaController.getResaById);
router.put('/update/:id', authMiddleware, resaController.updateResa);
router.delete('/delete/:id', authMiddleware, resaController.deleteResa);

module.exports = router;
// This code defines the routes for managing reservations in the application.