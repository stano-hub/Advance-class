const express = require("express");
const router = express.Router();
const { User} = require("../models/model");
const bcrypt = require("bcryptjs");
const path = require("path");
const fs = require("fs");

// import the multer module for files
const multer = require("multer");

// consfigure the storage folder where the image shall be saved
const upload = multer({dest : "uploads/"});

// Below is an api endpoint for registering a user
// register
router.post("/register",upload.single('photo'), async(req, res)=>{
    try{
        // get the different data passed by the user during registration (destructure them)
        const {name, email, password} = req.body;

        // console.log("The entered name is: "  + name)
        // console.log("The entered email is: " + email)
        // console.log("The entered password is: " + password)

        // check whether the user already exist
        const existingUser = await User.findOne({ email })

        // hash the password so that it does not get saved as plaintext inside of the database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        console.log(hashedPassword)

        if (existingUser){
            return res.status(400).json({message : "User already registered/exists"})
        };
        

        // declare a variable for photo
        let photo = null;

        // check whether there is a file passed on the request
        if(req.file){
            // extract the extension of the file
            const ext = path.extname(req.file.originalname);

            // assign a new name to the file
            const newFileName = Date.now() + ext;

            // specify the new path 
            const newPath = path.join("uploads", newFileName);

            fs.renameSync(req.file.path, newPath);

            photo = newPath.replace(/\\/g, '/')
        };

        const user = new User({name, email, password : hashedPassword,photo})
        const saved = await user.save();

        res.status(201).json({message : "User saved successfully", savedUser : saved});
    }
    catch(err){
        res.status(400).json({message : err.message})
    }
})




// export the router
module.exports = router;
