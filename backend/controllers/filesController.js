const fs = require("fs")
const File = require("../models/File")
const User = require("../models/User")
const fileService = require("../services/fileService")
const config = require("config")

class FileController {
    async createDir(req, res) {
        try {
            const {name, type, parent} = req.body
            const file = new File({name, type, parent, user: req.user.id})
            const parentFile = await File.findOne(({_id: parent}))

            if (!parentFile) {
                file.path = name
                await fileService.createDir(file, req)
            } else {
                file.path = `${parentFile.path}/${file.name}`
                parentFile.children.push(file._id)

                await parentFile.save()
            }

            await file.save()
            return res.json(file)
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async getFiles(req, res) {
        try {
            const {sort} = req.query

            let files = ""

            switch (sort) {
                case "type": {
                    files = await File.find({user: req.user.id, parent: req.query.parent}).sort({type: 1})
                    break
                }

                case "name": {
                    files = await File.find({user: req.user.id, parent: req.query.parent}).sort({name: 1})
                    break
                }

                case "size": {
                    files = await File.find({user: req.user.id, parent: req.query.parent}).sort({size: 1})
                    break
                }

                case "date": {
                    files = await File.find({user: req.user.id, parent: req.query.parent}).sort({date: 1})
                    break
                }

                default: files = await File.find({user: req.user.id, parent: req.query.parent})
            }
            return res.json(files)
        } catch (e) {
            console.log(e)
            res.status(500).json({message: "Can`t get files"})
        }
    }

    async uploadFile(req, res) {
        try {
            const file = req.files.file
            const parent = await File.findOne({user: req.user.id, _id: req.body.parent})
            const user = await User.findOne({_id: req.user.id})

            if (user.usedSpace + file.size > user.diskSpace) {
                return res.status(400).json({message: "Not enough space"})
            }

            user.usedSpace += file.size

            let path
            if (parent) {
                path = `${req.filePath}/${user.id}/${parent.path}/${file.name}`
            } else {
                path = `${req.filePath}/${user.id}/${file.name}`
            }

            if (fs.existsSync(path)) {
                return res.status(400).json({message: "File already exist"})
            }

            await file.mv(path)

            const type = file.name.split(".").pop()

            const dbFile = new File({
                name: file.name,
                type,
                size: file.size,
                path: parent ? parent.path : path,
                parent: parent ? parent._id : user._id,
                user: user._id
            })

            await dbFile.save()
            await user.save()

            res.json({dbFile})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Upload error"})
        }
    }

    async downloadFile(req, res) {
        try {
            const file = await File.findOne({_id: req.query.id, user: req.user.id})

            const path = `${req.filePath}/${req.user.id}/${file.name}`

            if (fs.existsSync(path)) {
                return res.download(path, file.name)
            }

            return res.status(400).json({message: "Download error"})
        } catch (e) {
            console.log(e)
            return res.status(500).json({message: "Server error"})
        }
    }

    async deleteFile(req, res) {
        try {
            const file = await File.findOne({_id: req.query.id, user: req.user.id})

            if (!file) {
                return res.status(400).json({message: "File not found"})
            }

            fileService.deleteFile(file)
            await file.remove()

            return res.json({message: "File was deleted"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Dir is not empty"})
        }
    }

    async searchFile(req, res) {
        try {
            const {name} = req.query

            let files = await File.find({user: req.user.id})

            files = files.filter(file => file.name.includes(name))

            res.json(files)
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Search error"})
        }
    }
}

module.exports = new FileController()