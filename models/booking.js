const mongoose = require('mongoose');
const users = require('./users');
const Schema = mongoose.Schema;
const crypto = require('crypto');

const BookingSchema = new Schema({
  bookingID: {
    type: String,
    required: true,
  },
  bookingUserEmail: {
    type: String,
    required: true,
    default: null,
  },
  bookingUserFirstName: {
    type: String,
    required: true,
    default: null,
  },
  bookingUserLastName: {
    type: String,
    required: true,
    default: null,
  },
  bookingNumber: {
    type: Number,
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  allergyDescription: {
    type: String,
    default: 'N/A',
  },
<<<<<<< HEAD
  bookingMealTime: {
    type: String,
    default: '',
=======
  isActive: {
    type: Boolean,
>>>>>>> roshelBranch
    required: true,
  },
});

module.exports = mongoose.model('Booking', BookingSchema);
