const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')
const { authenticated } = require('../config/auth')

// 列出全部 Restaurant
router.get('/', authenticated, (_req, res) => {
  return res.redirect('/')
})

// 新增一筆 restaurant 頁面
router.get('/new', authenticated, (_req, res) => {
  return res.render('new', { style: 'form.css' })
})

// 新增一筆restaurant
router.post('/', authenticated, (req, res) => {
  const restaurant = new Restaurant({
    name: req.body.name,
    name_en: req.body.name_en,
    category: req.body.category,
    image: req.body.image,
    location: req.body.location,
    phone: req.body.phone,
    google_map: req.body.google_map,
    rating: req.body.rating,
    description: req.body.description,
    userId: req.user._id
  })
  // 存入資料庫
  restaurant.save(err => {
    if (err) return console.error(err)
    return res.redirect('/')
  })
})

// 顯示一筆 Restaurant 的詳細內容
router.get('/:id', authenticated, (req, res) => {
  Restaurant.findById({ _id: req.params.id, userId: req.user._id }, (err, restaurant) => {
    if (err) return console.error(err)
    return res.render('detail', { style: 'detail.css', restaurant })
  })
})

// 修改 Restaurant 頁面
router.get('/:id/edit', authenticated, (req, res) => {
  Restaurant.findById({ _id: req.params.id, userId: req.user._id }, (err, restaurant) => {
    if (err) return console.error(err)
    return res.render('edit', { style: 'form.css', restaurant })
  })
})

// 修改 Restaurant
router.put('/:id/edit', authenticated, (req, res) => {
  Restaurant.findById({ _id: req.params.id, userId: req.user._id }, (err, restaurant) => {
    if (err) return console.error(err)
    Object.assign(restaurant, req.body)
    restaurant.save(err => {
      if (err) return console.error(err)
      return res.redirect(`/restaurants/${req.params.id}`)
    })
  })
})

// 刪除 Restaurant
router.delete('/:id/delete', authenticated, (req, res) => {
  Restaurant.findById({ _id: req.params.id, userId: req.user._id }, (err, restaurant) => {
    if (err) return console.error(err)
    restaurant.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

module.exports = router
