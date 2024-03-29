const express = require('express')
const router = express.Router()


const { register,login, getCurrentUser,update,getUserById } = require('../controllers/UserController')


const validate = require('../middlewares/handleValidation')

const {userCreateValidation,loginValidation, userUpdatevalidation} = require('../middlewares/userValidation')

const authGuard = require('../middlewares/authGuard')
const { imageUpload } = require('../middlewares/imageUpload')


router.post('/register', userCreateValidation() ,validate, register)
router.post('/login', loginValidation() ,validate, login)
router.get('/profile',authGuard,getCurrentUser)
router.get("/:id",getUserById)
router.put(
    "/",
    authGuard,
    userUpdatevalidation(),
    validate,
    imageUpload.single("profileImage"),
    update
  );




module.exports = router
