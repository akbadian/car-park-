const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
const auth = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');

// User reservations
router.post('/', auth, reservationController.createReservation);
router.get('/me', auth, reservationController.getMyReservations);

// Admin reservation view + delete
router.get('/all', auth, admin, reservationController.getAllReservations);
router.delete('/:id', auth, admin, reservationController.deleteReservation);

module.exports = router;