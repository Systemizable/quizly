require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://josephssfeir:vCwld5yJlTHo5CF6@quizlycluster.ifysxxt.mongodb.net/mydatabase?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB', error);
    });

// Test route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Routes
const userRoutes = require('./routes/api');
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
