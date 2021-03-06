const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const path = require("path")
const authRouter = require("./routes/auth.routes")
const filesRouter = require("./routes/files.routs")
const fileUpload = require("express-fileupload")
const cors = require("./middlewares/cors.middlewares")
const filePath = require("./middlewares/filePath.middleware")

const PORT = process.env.PORT || config.get("serverPort")
const app = express()

app.use(fileUpload({}))
app.use(cors)
app.use(filePath(path.resolve(__dirname, "files")))
app.use("/api/auth", authRouter)
app.use("/api/files", filesRouter)

const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"), {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })

        app.listen(PORT, () => {
            console.log("Server is listening on", PORT)
        })
    } catch(e) {
        console.log(e)
    }
}

start()