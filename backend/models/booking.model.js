import { Schema , model } from "mongoose";
import { User } from "./user.model.js";
import { Vehical } from "./vehical.model.js";


const bookingSchema = Schema ({
    //user_id
    user_id : {
        type : Schema.type.ObjectId,
        ref : User,
        require : true,
    },
    //pic
    b_picture : {
        type:String,
        require : true,
    },
    //vehical_id
    vehical_id : {
        type : Schema.type.ObjectId,
        ref : Vehical,
        require : true,
    },
})

const Booking = model("Booking" , bookingSchema)

export {Booking}