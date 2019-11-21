const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')
const { authenticated } = require('../config/auth')

//Search Restaurant
router.get('/search', authenticated, (req, res) => {
  const keyword = req.query.keyword
  const sort = req.query.sort
  const regex = new RegExp(keyword, 'i')

  let filter
  let sortName
  switch (sort) {
    case 'name-asc':
      filter = { name_en: 'asc' }
      sortName = '店名:A-Z'
      break;
    case 'name-desc':
      filter = { name_en: 'desc' }
      sortName = '店名:Z-A'
      break;
    case 'category-asc':
      filter = { category: 'asc' }
      sortName = '類別:A-Z'
      break;
    case 'rating-asc':
      filter = { rating: -1 }
      sortName = '評分:高-低'
      break;
    case 'rating-desc':
      filter = { rating: 1 }
      sortName = '評分:低-高'
      break;
    case 'location-asc':
      filter = { location: 'asc' }
      sortName = '地址:A-Z'
      break;

    default:
      filter = { _id: 'asc' }
      break;
  }
  Restaurant.find(
    {
      userId: req.user._id,
      $or: [
        { name: regex },
        { name_en: regex },
        { category: regex },
      ]
    }
  )
    .sort(filter)
    .exec((err, restaurants) => {
      if (err) return console.error(err)
      const isDataEmpty = restaurants.length === 0 ? true : false
      return res.render('index', { style: 'index.css', restaurants, keyword, sortName, isDataEmpty })
    })
})

module.exports = router