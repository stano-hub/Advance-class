const express = require("express");
const router = express.Router();
const {Employee, Department} = require("../models/model");


// create a new employee
router.post("/", async(req, res)=>{
    try{
        // pick the details passed from the insomnia/postman
        const {email, departmentId} = req.body;
        // console.log(email, departmentId)

        // check whether the email address is already registered with another employee
        const existingEmail = await Employee.findOne({email});
        if(existingEmail) {
            return res.status(400).json({message : "Email address already taken"})
        }

        // Check whether the department Id exists and whether is part of the departments
        const department = await Department.findById(departmentId);
        if(!department){
            return res.status(400).json({message : "Invalid Department ID"})
        };

        // if the validation happens, proceed to save an employee
        const employee = new Employee(req.body);
        await employee.save();

        // if the save functionality is successful, return a response
        res.status(201).json({message : "Employee registered successfully", "Employee" : employee})
    }
    catch(err){
        res.status(400).json({message : "Error experienced.", Error : err.message})
    }
});









module.exports = router;