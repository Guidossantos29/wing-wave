const User = require('../models/User.js')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const jwtSecret = process.env.JWT_SECRET

const generateToken = (id) => {
    return jwt.sign({id},jwtSecret,{
        expiresIn:'7d',
    })
}

const register = async(req,res) => {
    const {name,email,password} = req.body

    const user = await User.findOne({email})

    if(user) {
        res.status(422).json({errors:['Por favor,ultilize outro email']})
        return
    }

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password,salt)


    const newUser = await User.create({
        name,
        email,
        password:passwordHash
    })

    if(!newUser){
        res.status(422).json({errors:['Houve um erro,por favor novamente mais tarde']})
        return
    }

    res.status(201).json({
        _id: newUser._id,
        token:generateToken(newUser._id)
    })
};

module.exports = {
    register,
}
