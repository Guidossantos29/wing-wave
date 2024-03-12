const Photo = require("../models/Photo")

const mongoose = require("mongoose")
const User = require("../models/User")

const insertPhoto = async (req, res) => {
    const { title } = req.body;
    const image = req.file.filename;
  
    console.log(req.body);
  
    const reqUser = req.user;
  
    const user = await User.findById(reqUser._id);
  
    console.log(user.name);
  
    
    const newPhoto = await Photo.create({
      image,
      title,
      userId: user._id,
      userName: user.name,
    });
  
   
    if (!newPhoto) {
      res.status(422).json({
        errors: ["Houve um erro, por favor tente novamente mais tarde."],
      });
      return;
    }
  
    res.status(201).json(newPhoto);
  };


module.exports = {
    insertPhoto,
}