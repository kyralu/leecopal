const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');
const app = express();
app.use(express.urlencoded({ extended: true }));
const bcrypt = require('bcrypt');
const saltRounds = 10;

require('dotenv').config(); // For environment variables


// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a simple route for testing
app.get('/', (req, res) => res.send('Hello from Backend'));

app.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({email: email});

        if (existingUser) {
            res.json("exist");
        }
        else {
            res.json("not exist");
        }
    }
    catch(e) {
        res.json("not exist");
    }
})

app.post('/signup', async (req, res) => {

    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({email: email});

        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({ email, password: hashedPassword});
        await newUser.save();
        
        res.status(201).json({ message: "User created successfully" });
    }
    catch(e) {
        res.status(500).json({ message: "Error creating user", error: e.message });
    }
})

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server started on port ${port}`));