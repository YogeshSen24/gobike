import {Schema , model} from "mongoose";
import bcrypt from "bcryptjs"

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
        type : [Schema.Types.ObjectId], //Array of Object
        ref : "Booking"

    }
})

userSchema.pre("save", async function(next) {
    const user = this;
    if (!user.isModified('password')) { // Check if the password field is modified
        return next(); // If not modified, move to the next middleware
    }
    try {
        // Hash the password with a salt factor of 10
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword; // Replace the plain text password with the hashed one
        next(); // Move to the next middleware
    } catch (error) {
        return next(error); // Pass any error to the next middleware
    }
});


const User = model("User" , userSchema) // users



export {User}