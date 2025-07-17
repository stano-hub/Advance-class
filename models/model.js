// connect to the database 
// what is a schema?
const mongoose = require('mongoose');

//access the schema package/library in mongoose
const Schema = mongoose.Schema;

// we shall create  a schema for our employee

const userSchema = new Schema({
    name: String,
    email:{
        type: String,
        required: true,
        unique: true
    },
    dob :{
        type: Date,
        default: Date.now

    },
    password: {
        type: String,
        required: true,
        
    },
    photo:String,
})
// Epmloyee schema
const employeeSchema = new Schema({
    userId:{type: Schema.Types.ObjectId, ref: 'User', default: null},
    firstName: String,
    lastName: String,
    email: {type: String, required: true, unique: true},
    departmentId: {type: Schema.Types.ObjectId, ref: 'Department', required: true},
    jobTitle: String,
    hireDate : Date,
    salary: Number,
    status:{
        type: String,
        enum: ['active', 'inactive', 'terminated'],
        default: 'active'
    },
    createdAt : {type: Date, default: Date.now},
    updatedAt : {type: Date, default: Date.now}
})

const departmentSchema = new Schema({
    name: {type: String, required: true, unique: true},
    description: String,
    managerID:{type: Schema.Types.ObjectId, ref: 'Employee', default: null},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}  
})

const User = mongoose.model('User', userSchema);
const Employee = mongoose.model('Employee', employeeSchema);
const Department = mongoose.model('Department', departmentSchema);

module.exports = {
    User,
    Employee,
    Department
};