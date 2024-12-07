const express = require('express');
const mongoose = require('mongoose');
const trackRoutes = require('./routes/trackRoutes');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use('/tracks', express.static(path.join(__dirname, 'tracks')));
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/api', trackRoutes);

// Conexión a MongoDB Atlas
mongoose.connect('mongodb+srv://fernanda:1234@cluster0.s7b4r.mongodb.net/multimedia?retryWrites=true&w=majority', {
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch(err => {
  console.error('Could not connect to MongoDB Atlas', err);
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

