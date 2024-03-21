import { User } from "../models/user.model.js"

const Login = (req , res)=>{
    //get user data from req

    //check if the user data is valid

    //user exist in database

    //check the password

    //return the user
    // console.log("login Success!!!");
}

const Signup = async (req, res) => {
    // Get user data from req
    const { name, email, password, fatherName, address, phone, alternatePhone, aadhar, pan, image } = req.body;

    try {
        // Check if all required fields are provided
        if (!name || !email || !password || !fatherName || !address || !phone || !aadhar || !pan) {
            return res.status(401).send({
                "message": "Please fill all the required fields"
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ $or: [{ email }, { pan }, { aadhar }] });
        if (existingUser) {
            return res.status(401).json({
                "message": "User already exists!!!"
            });
        }

        // Create a new user instance
        const newUser = new User({
            name, email, password, fatherName, address, phone, alternatePhone, aadhar, pan
        });

        // Save the user to the database
        const savedUser = await newUser.save();
        if (savedUser) {
            // Send response
            return res.status(200).json({
                "message": "User saved successfully",
                "data": savedUser,
            });
        } else {
            return res.status(500).json({
                "message": "Failed to save user"
            });
        }
    } catch (error) {
        console.error("Error during signup:", error);
        return res.status(500).json({
            "message": "Internal server error"
        });
    }
}


export {Login , Signup}