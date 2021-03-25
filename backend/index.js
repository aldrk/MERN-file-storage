const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")

const PORT = config.get("serverPort")
const app = express()

app.use("/api/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"))

        app.listen(PORT, () => {
            console.log("Server is listening on", PORT)
        })
    } catch(e) {
        console.log(e)
    }
}

start()