const Router = require("express")
const User = require("../models/User")
const {body, validationResult} = require("express-validator")
const config = require("config")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")
const authMiddleware = require("../middlewares/auth.middleware")
const File = require("../models/File")
const fileService = require("../services/fileService")

const router = new Router()

router.post(
    "/registration", bodyParser.json(),
        body("email", "Incorrect email").isEmail(),
        body("password", "Password should be more than 3 and less than 12 symbols").isLength({min: 3, max: 12}),
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Incorrect request", errors})
            }

            const {email, password} = req.body

            const candidate = await User.findOne({email})

            if (candidate) {
                return res.status(400).json({message: "User with this email already exist"})
            }

            const hashPassword = await bcrypt.hash(password, 7)

            const newUser = new User({email, password: hashPassword})
            await newUser.save()
            await fileService.createDir(new File({user: newUser.id, name: ""}))

            return res.json({message: "User was created"})

        } catch (e) {
            console.log(e)
            res.json({message: "Server error"})
        }
    })


router.post("/login",  bodyParser.json(),
    async (req, res) => {
        try {
            const {email, password} = req.body

            const user = await User.findOne({email})

            if (!user) {
                return res.status(404).json({message: "User not found"})
            }

            const isPasswordValid = bcrypt.compare(password, user.password)

            if (!isPasswordValid) {
                return res.status(400).json({message: "Invalid password"})
            }

            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"} )

            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar
                }
            })

        } catch (e) {
            console.log(e)
            return res.json({message: "Server error"})
        }
    }
)

router.get("/auth", authMiddleware,  bodyParser.json(),
    async (req, res) => {
        try {
            const user = await User.findOne({_id: req.user.id})

            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"} )

            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar
                }
            })

        } catch (e) {
            return res.json({message: "Server error"})
        }
    }
)

module.exports = router