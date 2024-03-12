const { body } = require("express-validator");

const photoInsertValidation = () => {
    return [
        body("title")
        .not()
        .equals("undefined")
        .withMessage("O titulo é obrigatorio.")
        .isString()
        .isLength({min:3})
        .withMessage("o Titulo precisa ter no minimo 3 caracteres."),
        body("image").custom((value,{req}) => {
            if(!req.file) {
                throw new Error("A imagem é obrigatoria.")
            }
            return true
        })
    ]
}


module.exports = {
    photoInsertValidation,
}


