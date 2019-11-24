const express = require('express')
const router = express.Router()
const passport = require('passport')
const bcrypt = require('bcryptjs')
const User = require('../models/user')

//登入頁面
router.get('/login', (_req, res) => {
  res.render('login', { style: 'login.css' })
})
//登入檢查
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login'
  })(req, res, next)
})

//註冊頁面
router.get('/register', (_req, res) => {
  res.render('register', { style: 'login.css' })
})

//註冊檢查
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body

  // 加入錯誤訊息提示
  let errorMessages = []

  if (!email || !password || !password2) {
    errorMessages.push({ message: 'Email, Password, Confirm Password 是必填' })
  }

  if (password !== password2) {
    errorMessages.push({ message: '兩次密碼輸入不一樣' })
  }

  if (password < 7) {
    errorMessages.push({ message: '密碼大於7位數' })
  }

  if (errorMessages.length > 0) {
    res.render('register', {
      errorMessages,
      name,
      email,
      password,
      password2,
      style: 'login.css'
    })
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        // 加入訊息提示
        errorMessages.push({ message: '這個 Email 已經註冊過了' })
        res.render('register', {
          errorMessages,
          name,
          email,
          password,
          password2,
          style: 'login.css'
        })
      } else {
        const newUser = new User({
          name,
          email,
          password
        })
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash

            newUser
              .save()
              .then(user => {
                res.redirect('/')
              })
              .catch(err => console.log(err))
          })
        )
      }
    })
  }
})

//登出
router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', '你已經成功登出')
  res.redirect('/users/login')
})


module.exports = router