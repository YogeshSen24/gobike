import { Schema , model } from "mongoose";
import { PriceSystem } from "./priceSystem.model";

const vehicalSchema = Schema({
// name
v_name : {
    type:String,
    require : true,
},
// vehical no.
v_number : {
    type:String,
    require : true,
},
// brand
v_brand : {
    type:String,
    require : true,
},
// milage
v_milage : {
    type:String,
    require : true,
},
// image
v_image : {
    type:String,
    require : true,
},
// range
v_range : {
    type:String,
    require : true,
},
// status
v_status : {
    type:Boolean,
    require : true,
},
// pricesystem[]
v_price_system : {
    type:Schema.Types.ObjectId,
    ref: PriceSystem,
    require : true,
},
})

const Vehical = model("Vehical", vehicalSchema)

export {Vehical}