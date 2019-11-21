const express = require('express')
const router = express.Router()
const passport = require('passport')

// Facebook 路由
router.get(
  '/facebook',
  passport.authenticate('facebook', { scope: ['email', 'public_profile'] })
)
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/users/login',
  })
)

// GitHub 路由
router.get(
  '/github',
  passport.authenticate('github', { scope: ['email', 'public_profile'] })
)

router.get('/github/callback',
  passport.authenticate('github', {
    successRedirect: '/',
    failureRedirect: '/users/login'
  })
)
module.exports = router