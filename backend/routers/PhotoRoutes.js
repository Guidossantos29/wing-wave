const express = require('express')
const router = express.Router()


const { insertPhoto,deletePhoto,getAllPhotos, getUserPhotos, getPhotoById } = require("../controllers/photoController")


const { photoInsertValidation } = require("../middlewares/photoValidation")
const authGuard = require("../middlewares/authGuard")
const validate = require("../middlewares/handleValidation")
const { imageUpload } = require("../middlewares/imageUpload")


router.get("/",authGuard,getAllPhotos)
router.get('/user/:id',authGuard,getUserPhotos)
router.get("/:id",authGuard,getPhotoById)
router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto)
router.delete("/:id", authGuard, deletePhoto);


module.exports = router
