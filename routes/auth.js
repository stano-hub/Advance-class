const express = require('express');
const router = express.Router();
const { User } = require("../models/model");
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');

// import the jsonwebtoken module 
const jwt = require("jsonwebtoken")

// import JWT secret key
const JWT_SECRET = process.env.JWT_SECRET

// import multer module  for file 
const multer = require('multer');

// configure the storage folder  where the images shall be saved 
const upload = multer({dest : 'uploads/'});

//below is an api endpoint for registering a user
//Register 
router.post("/register", upload.single('photo'),async(req, res) => {
    try {
        // grt the diffrent data paased by the user during registration(desctructuring them)
        const { name, email,password} = req.body;

        // console.log("The entered name is: "+ name);
        // console.log("The entered email is: "+ email);
        // console.log("The entered password is: " + password);
        
        // check if the user already exists
        const existingUser = await User.findOne({ email });

        //hash the pass so it does not get stored in plain text in the DB
        const salt = await bcrypt.genSalt(10);
        // console.log("The salt is: " + salt);
        
        const hashedPassword = await bcrypt.hash(password, salt);
        // console.log("The hashed password is: " + hashedPassword);

        if (existingUser) {
            return res.status(400).json({ message: "User already registered/exists" });
        };

        //declare a varible for photo
        let photo = null;

        // chech whether there is a file passed on the passport
        if (req.file) {
            // extract the extension of the file
            const ext = path.extname(req.file.originalname);
            
            // assign a new name to the file 
            const newFileName = Date.now() + ext;

            // specify the new path 
            const newPath = path.join("uploads",newFileName)

            // show the seconds from the year 1970
            // const timestamp = Date.now();
            // const date = new Date(timestamp);
            // console.log(date.toString);
            


            fs.renameSync(req.file.path, newPath);

            photo = newPath. replace(/\\/g, '/'); // replace backslashes with forward slashes for consistency
        }

        const user = new User({name,email,password: hashedPassword,photo });
        const saved = await user.save();

        res.status(201).json({ message: "User successfully register" , user:saved});
        
        
      


    }
    catch (err){
        res.status(400).json({ message : err.message });
    }
})

//below is the endpoint for logging in a user
router.post("/login",async(req,res)=>{
    const{email,password}=req.body;

    //show the entered records from insomnia
    // console.log("This is the email",email);
    // console.log("This is the password",password);


    // check whether the email entered exists in the database
    const user = await User.findOne({email})
    // console.log(user);
    if(!user) return res.status(404).json({message : "User not found"})

    // check whether the password match with the on in the database
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({message : "Invalid password"})   
    
    const token = jwt.sign({id : user._id},JWT_SECRET, {expiresIn : '2m'})
    // console.log("The generated token is",token);

    res.json({token, user})
    
    
    

    

})




































// export the router
module.exports = router;