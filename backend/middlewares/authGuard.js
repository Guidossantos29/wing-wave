const User = require('../models/User')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET

const authGuard = async (req,res,next) => {
    const authHearder = req.headers['authorization']
    const token = authHearder && authHearder.split(' ')[1]

    if(!token) return res.status(401).json({errors:["Acesso negado!"]})

    try {
        const verified = jwt.verify(token,jwtSecret)

        req.user = await User.findById(verified.id).select("-password")

        next()

    } catch(err) {
        res.status(400).json({errors:["token é invalido."]})

    }
}

module.exports = authGuard


