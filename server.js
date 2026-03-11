require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');

const app = express();
connectDB();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const guestRoutes = require('./src/routes/guestRoutes');
const bookingRoutes = require('./src/routes/bookingRoutes');
const apiRoutes = require('./src/routes/apiRoutes');
const authRoutes = require('./src/routes/authRoutes')
const BASE_URI = process.env.BASE_URI || '/api/v1';
app.use(BASE_URI, authRoutes);

app.use(process.env.BASE_URI, apiRoutes)
app.use(BASE_URI + '/guests', guestRoutes);
app.use(BASE_URI + '/bookings', bookingRoutes);
app.use(BASE_URI, apiRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
});
