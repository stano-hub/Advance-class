const express = require("express");
const router = express.Router();
const { User} = require("../models/model");
const bcrypt = require("bcryptjs");
const path = require("path");
const fs = require("fs");

// import the jsonwebtoken module
const jwt = require("jsonwebtoken");

// import the JWT secret key
const JWT_SECRET = process.env.JWT_SECRET

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


         if (existingUser){
            return res.status(400).json({message : "User already registered/exists"})
        };


        // hash the password so that it does not get saved as plaintext inside of the database
        const salt = await bcrypt.genSalt(10);

        // console.log("The salt is: ",salt)
        const hashedPassword = await bcrypt.hash(password, salt);

        // console.log("The hashed password is: ",hashedPassword)


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

            // show the seconds from the year 1970
            // const timestamp = Date.now();
            // console.log("Date in milli:  ",timestamp)
            // const date = new Date(timestamp)
            // console.log(date.toString())

            fs.renameSync(req.file.path, newPath);

            photo = newPath.replace(/\\/g, '/')
        };

        const user = new User({name, email, password : hashedPassword,photo})
        const saved = await user.save();

        res.status(201).json({message : "User Registered successfully", savedRecord : saved});
    }
    catch(err){
        res.status(400).json({message : err.message})
    }
})


// Below is the login endpoint
router.post("/login", async(req,res)=>{
    // we shall use the email and the password during the signin
    const {email, password} = req.body;
    
    // show the entered records from insomnia
    // console.log("The entered name is: ", email)
    // console.log("The entered password is: ", password)


    // check whether the email entered is registered in the database.
    const user = await User.findOne({ email })
    console.log("The details of the user are: ",user)
    if(!user) return res.status(404).json({message : "User not found"})

    // check whether the password entered mathches with the one in the db
    const isMatch = await bcrypt.compare(password, user.password);
    // console.log("The value is: ",isMatch)
    if(!isMatch) return res.status(400).json({message : "Invalid password"})

    const token = jwt.sign({id: user._id}, JWT_SECRET, {expiresIn : '1h'} );
    // console.log("The generated token is: ", token)

    res.json({token, user});
})


// export the router
module.exports = router;
