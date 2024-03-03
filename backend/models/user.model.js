import {Schema , model} from "mongoose";

const userSchema = Schema({
    name : {
        type : String,
        require : true,
    },
    email :{
        type : String
    },
    password :{
        type : String
    },
    fatherName :{
        type : String,
        require : true,
    },
    address :{
        type : String,
        require : true,
    },
    phone :{
        type : String,
        require : true,
    },
    alternatePhone :{
        type : String,
    },
    aadhar :{
        type : String,
        require : true,
    },
    pan :{
        type : String,
        require : true,
    },
    image:{
        type : String,
        require : true,
    },
    pastBookings :{
        type : Object.type.Schema, //Array of Object
        ref : "Booking"

    }
})

const User = model("User" , userSchema) // users

export {User}