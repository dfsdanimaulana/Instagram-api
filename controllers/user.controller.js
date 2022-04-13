const Insta = require('scraper-instagram')
const debug = require('debug')('dev')
const InstaClient = new Insta()

function getUser(req, res) {
  const { username } = req.params
  
  InstaClient.getProfile(username)
    .then(user => {
      res.json(user)
    })
    .catch(error => {
      res.status(404).json({
        message: "username not found"
      })
    })
}

function getUserProfilePicture(req, res) {
  const { username } = req.params
  
  InstaClient.getProfile(username)
    .then(user => {
      res.json(user.pic)
    })
    .catch(error => {
      res.status(404).json({
        message: "username not found"
      })
    })
}

module.exports = { getUser, getUserProfilePicture }