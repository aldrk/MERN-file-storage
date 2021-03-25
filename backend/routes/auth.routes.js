const Router = require("express")
const User = require("../models/User")
const {check, validateResult} = require("express-validator")
const bcrypt = require("bcryptjs")

const router = new Router()

router.post("/registration",
    [
        check("email", "Incorrect email").isEmail(),
        check("password", "Password should be more than 3 and less than 12 symbols").isLength({min: 3, max: 12})
    ],
    async (req, res) => {
        try {
            const errors = validateResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Incorrect request", errors})
            }

            const {email, password} = req.body

            const candidate = User.findOne({email})

            if (candidate) {
                return res.status(400).json({message: "User with this email already exist"})
            }

            const hashPassword = await bcrypt(password, 15)

            const newUser = new User({email, password: hashPassword})
            await newUser.save()

            return res.json({message: "User was created"})

        } catch (e) {
            console.log(e)
            res.json({message: "Server error"})
        }
})

module.exports = router