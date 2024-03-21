
import { Schema , model } from "mongoose";

const invoiceSchema = new Schema ({
    booking_id : {
        type:Schema.Types.ObjectId,
        ref : "Booking",
        require : true ,
    },
    amount : {
        type : Number ,
        require : [true, 'please enter any amount']
    },
    incriment : {
        type : Schema.type.ObjectId,
        ref : "PriceSystem"
    }
})

const Invoice = model("Invoice" , invoiceSchema)

export {Invoice}

