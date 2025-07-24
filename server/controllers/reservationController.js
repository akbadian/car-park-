const Reservation = require('../models/Reservation');

exports.createReservation = async (req, res) => {
  try {
    const { car, startDate, endDate } = req.body;
    const reservation = await Reservation.create({
      car,
      user: req.user.id,
      startDate,
      endDate
    });
    res.status(201).json(reservation);
  } catch (err) {
    res.status(400).json({ message: 'Failed to book', error: err });
  }
};

exports.getMyReservations = async (req, res) => {
  try {
    const bookings = await Reservation.find({ user: req.user.id }).populate('car');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to load bookings' });
  }
};

exports.getAllReservations = async (req, res) => {
  try {
    const all = await Reservation.find().populate('user').populate('car');
    res.json(all);
  } catch (err) {
    res.status(500).json({ message: 'Error loading reservations' });
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id);
    res.json({ message: 'Reservation cancelled' });
  } catch (err) {
    res.status(400).json({ message: 'Cancellation failed' });
  }
};