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
    res.send('Registro')
};

module.exports = {
    register,
}
