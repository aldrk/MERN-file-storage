const Router = require("express")
const authMiddleware = require("../middlewares/auth.middleware")
const bodyParser = require("body-parser")
const filesController = require("../controllers/filesController")

const router = Router()

router.post("", authMiddleware, bodyParser.json(), filesController.createDir)
router.post("/upload", authMiddleware, bodyParser.json(), filesController.uploadFile)

router.get("", authMiddleware, bodyParser.json(), filesController.getFiles)
router.get("/download", authMiddleware, bodyParser.json(), filesController.downloadFile)
router.get("/search", authMiddleware, bodyParser.json(), filesController.searchFile)

router.delete("", authMiddleware, bodyParser.json(), filesController.deleteFile)

module.exports = router