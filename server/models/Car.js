const mongoose = require('mongoose');
const CarSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  licensePlate: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['available', 'occupied', 'maintenance'],
    default: 'available',
  },
}, { timestamps: true });

module.exports = mongoose.model('Car', CarSchema);
