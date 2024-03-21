import express from "express"
import dotenv from "dotenv"
import db_connect from "./database/index.js"

//routers
import authRouter from "./routes/auth.route.js"


const app = express()
app.use(express.json())

dotenv.config(
    {
        path : "./.env"
    }
)

app.use("/api/v1/auth", authRouter)

app.listen(process.env.PORT||3000 , ()=>{
    console.log("Seerver is running at port :" + process.env.PORT)
})
db_connect()