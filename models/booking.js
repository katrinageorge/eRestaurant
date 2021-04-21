const mongoose = require('mongoose');
const users = require('./users');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  bookingID: {
    type: Number,
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
});

module.exports = mongoose.model('Booking', BookingSchema);
