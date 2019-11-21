const { check, validationResult } = require('express-validator')

const registerInputCheck = [
  check('email')
    .isEmail().withMessage("請輸入正確的 Email 格式"),
  check('password')
    .isLength({ min: 7 })
    .trim()
    .withMessage("請至少輸入7位數")
]



module.exports = { registerInputCheck }