const express = require('express')
const router = express.Router()


// controllers
const { getUser, getUserProfilePicture } = require('../controllers/user.controller.js')


router.get('/img/:username', getUserProfilePicture)

router.get('/:username', getUser)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
});

module.exports = router
