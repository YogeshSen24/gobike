import mongoose from "mongoose";

const db_connect = async()=>{
    try {
        const db = await mongoose.connect(process.env.DB_URI)
        if(db){
            console.log("Databse Connected!!!");
        }
    } catch (error) {
        console.log("Error in database connection" , error.message);
    }
}

export default db_connect

