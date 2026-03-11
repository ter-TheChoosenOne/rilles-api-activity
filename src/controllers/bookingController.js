const Booking = require('../models/bookingModel');

// CREATE Booking
exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET All Bookings (with populate)
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('room')
      .populate('guest');

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
