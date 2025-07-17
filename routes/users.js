// import the express module
const express = require ("express")
const router = express.Router();
const {User} = require ("../models/model")
const bcrypt = require('bcrypt')

// import the middleware for authrization
const auth = require("../middleware/auth")

// below is a route to fetch all user in the db
router.get("/",auth,async(req,res)=>{
    try {
        const user = await User.find()
        res.json(user)
        
    } catch (err) {
        res.status(500).json({message : err.message})
    }
})


// fetch a user based on a given id 
router.get("/:id",auth,async(req ,res)=>{
    try {
        const user = await User.findById(req.params.id);

        // check whether the user exits based on the id passed
        if(!user)return res.status(404).json({message : "user not found"})

        // if the id passed is correct , we shall just show the records of that given user
        res.json(user);


    } catch (err) {
        res.status(500).json({message : err.message})
    }
})

// below is the update module 
router.put("/:id",auth,async(req,res)=>{
    try {
        //desture the details we want to update for the user 
        const{name,email,age,password}=req.body;
        // console.log(name,email,age,password)
        const user =await User.findById(req.params.id);

        // step 1: check whether the user by the id passed exists
        if(!user) res.status(404).json({message : " user not found "});

        //step 2 : prep the data to update
        let updateData={name,email,age}

        if(password){
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            updateData.password = hashedPassword;

        }

        //step 3 : update the user with the new details 
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            updateData,
            {new : true}
        );

       // step 4: Give a response back
        res.json({message : "user Details updated successfully", user : updatedUser})

        
    } catch (err) {
        res.status(400).json({message : err.message})
    }
})






// below is the delete route of the user 
router.delete("/:id",auth,async(req,res)=>{
    try {
        // attempt to find and delete the user by their by their ID from the URL
        const deletedUser = await User.findOneAndDelete(req.params.id);

        // if no user is found to be deleted, give a responce back 
        if(!deletedUser) res.status(404).json({message : "User not found"})
        
        //if the deletion has happened notify user with a succes message 
        res.json({message : "user deleted succesfully"})

    } catch (err) {
        res.status(500).json({message : err.message})
    }
})





module.exports = router;
