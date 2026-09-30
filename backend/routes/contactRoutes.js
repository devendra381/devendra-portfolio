const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// POST - Save contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully ✅",
      data: newContact,
    });
  } catch (error) {
    console.error("Contact Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

module.exports = router;