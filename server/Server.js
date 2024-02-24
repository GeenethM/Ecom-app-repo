const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const routing = require('./routes/route')


require("dotenv").config();
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
}));


const main = async () => {
    try {
        await app.listen(4000)
        mongoose.connect(process.env.MONGO_URL)
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}

main();

app.get('/test', (req,res) => {
    res.json("works")
})

app.use("/api/", routing)