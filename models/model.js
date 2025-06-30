// What is a schema? 
// A schema usually specifies the different details you expect to have for your different collections in your database
// import the mongoose module that help you connect with the mongodb
const mongoose = require("mongoose");

// access the Schema package/libary inside of mongoose
const Schema = mongoose.Schema;

// we shall create three schemas for three collection i.e userSchema, employeeSchema and departmentSchema

// userSchema
const userSchema = new Schema({
    name : String,
    email : {type: String, required : true, unique : true},
    dob : {type: Date, default :Date.now},
    password : {type: String, required : true},
    photo: String,
});

// employeeSchema
const employeeSchema = new Schema({
    userId : {type: Schema.Types.ObjectId, ref : "User", default : null},
    firstName : String,
    lastName : String,
    email : {type: String, required: true, unique : true},
    departmentId : {type : Schema.Types.ObjectId, ref : "Department", required : true},
    jobTitle : String,
    hireDate : Date,
    salary: Number,
    status: {type : String, enum : ['active', 'inactive', 'on_leave'], default : 'active'},
    createdAt : {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

// departmentSchema
const departmentSchema = new Schema({
    name : {type: String, required: true, unique:true},
    description : String,
    managerId : {type: Schema.Types.ObjectId, ref : "Employee", default:null},
    createAt : {type: Date, default:Date.now},
    updatedAt : {type: Date, default:Date.now}
});

// make them accessible through out the application by exporting them
const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", employeeSchema);
const Department = mongoose.model("Department", departmentSchema);

// Export all of them
module.exports = {User, Employee, Department};