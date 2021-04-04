const fs = require("fs")
const File = require("../models/File")
const config = require("config")

class FileService {
    createDir(file, req) {
        return new Promise(((resolve, reject) => {
            try {
                const filePath = `${req.filePath}/${file.user}/${file.path}`
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

    getPath(file) {
        return `${file.path}`
    }

    deleteFile(file) {
        const path = this.getPath(file)
        console.log(path)

        if (file.type === "dir") {
            fs.rmdirSync(path)
        } else {
            fs.unlinkSync(path)
        }
    }
}

module.exports = new FileService()