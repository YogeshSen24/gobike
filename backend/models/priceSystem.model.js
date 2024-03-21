import { Schema,model } from "mongoose"; //import schema and model

const priceSystemSchema = Schema({ //create schema
    ps_name : {
        type : String,
        require : true,
    },
    ps_price : {
        type : map ,
        of : new Schema({
            hours : {type:Number},
            price : {type:String}
        })
    },
    ps_compensation : {
        type : String,
    }
})

const  PriceSystem = new model('PriceSystem',priceSystemSchema) //create model

export {PriceSystem} //export the model