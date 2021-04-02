const fs = require("fs")
const File = require("../models/File")
const config = require("config")

class FileService {
    createDir (file) {
        return new Promise(((resolve, reject) => {
            try {
                const filePath = `${config.get("filePath")}/${file.user}/${file.path}`
                if (!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath)

                    return resolve("File was created")
                } else {
                    return reject({message: "File already exist"})
                }

            } catch (e) {
                console.log(e)
                return reject({message: "File error"})
            }
        }))
    }
}

module.exports = new FileService()