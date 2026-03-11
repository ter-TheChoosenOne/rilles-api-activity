const Guest = require('../models/guestModel');

// CREATE Guest
exports.createGuest = async (req, res) => {
  try {
    const guest = await Guest.create(req.body);
    res.status(201).json(guest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET All Guests
exports.getGuests = async (req, res) => {
  try {
    const guests = await Guest.find();
    res.status(200).json(guests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
