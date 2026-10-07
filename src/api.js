const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// 1. Middlewares Setup (Jo React se request handle karenge)
app.use(cors());
app.use(express.json());

// 2. Database Connection (Yahan apni sahi MongoDB URI lagayein)
const MONGO_URI = "YOUR_MONGODB_CONNECTION_STRING_HERE"; 
mongoose.connect(MONGO_URI)
  .then(() => console.log("Database Connect Ho Gaya!"))
  .catch((err) => console.error("Database connection error:", err));

// 3. Database Schema aur Model Setup
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// 4. Contact Form Form Route API
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Naya message database mein save karne ke liye
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // React ko success response bhejna (Zaroori hai)
    res.status(201).json({ success: true, message: "Data successfully saved!" });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ success: false, message: "Server error occurred." });
  }
});

// 5. Vercel ke liye serverless export (Sabse zaroori)
module.exports = app;

// 6. Local machine par chalane ke liye port settings
if (process.env.NODE_ENV !== 'production') {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server ready hai port ${PORT} par!`);
  });
}
