const express = require('express');
const { body} = require('express-validator');
const router = express.Router();
const carController = require('../controllers/carController');
const authMiddleware = require('../middleware/authMiddleware');


// Validation middleware
router.post(
    '/',
    [
    body('brand').notEmpty().withMessage('Brand is required'),
    body('model').notEmpty().withMessage('Model is required'),
    body('licensePlate').notEmpty().withMessage('License Plate is required'),
    body('status').isIn(['available', 'occupied', 'maintenance']).withMessage('Status must be one of: available, occupied, maintenance')
    ],
    carController.createCar
);

router.get('/',authMiddleware, carController.getAllCars);
router.get('/:id',authMiddleware, carController.getCarById);
router.post('/',authMiddleware, carController.createCar);
router.put('/:id',authMiddleware, carController.updateCar);
router.delete('/:id',authMiddleware, carController.deleteCar);


module.exports = router;