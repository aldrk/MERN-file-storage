const Router = require("express")
const authMiddleware = require("../middlewares/auth.middleware")
const bodyParser = require("body-parser")
const filesController = require("../controllers/filesController")

const router = Router()

router.post("", authMiddleware, bodyParser.json(), filesController.createDir)
router.get("", authMiddleware, bodyParser.json(), filesController.getFiles)
router.get("/download", authMiddleware, bodyParser.json(), filesController.downloadFile)

router.post("/upload", authMiddleware, bodyParser.json(), filesController.uploadFile)
router.delete("", authMiddleware, bodyParser.json(), filesController.deleteFile)

module.exports = router