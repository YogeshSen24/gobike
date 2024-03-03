import express from "express"
import dotenv from "dotenv"
import db_connect from "./database/index.js"


const app = express()

dotenv.config(
    {
        path : "./.env"
    }
)

app.listen(process.env.PORT||3000 , ()=>{
    console.log("Seerver is running at port :" + process.env.PORT)
})
db_connect()