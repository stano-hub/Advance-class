const express = require('express');
const router = express.Router();
const {User} = require('../models/model')
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');

// for files
const multer = require('multer');
// location storage
const upload = multer({ dest: 'uploads/' });

// Register
router.post('/register', upload.single('photo'), async (req, res) => {
    try {
        const { name, email, password } = req.body
        
        console.log(name, email, password)
        const existingUser = await User.findOne({ email });
        if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
        }

        // 1. Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        let photo = null;

        if (req.file) {
            const ext = path.extname(req.file.originalname);           // .jpg, .png, etc.
            const newFilename = Date.now() + ext;                      // e.g. 1716760010000.jpg
            const newPath = path.join('uploads', newFilename);         // uploads/1716760010000.jpg
           
            // const timestamp = Date.now();
            // const date = new Date(timestamp);
            // console.log(date.toString())
            fs.renameSync(req.file.path, newPath);                     // rename file to keep extension

            photo = newPath.replace(/\\/g, '/');                        // for Windows path fix
        }

        const user = new User({name,email,password: hashedPassword, photo});

        const saved = await user.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;