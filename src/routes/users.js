const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router.get('/', UserController.users)
router.post('/getuser', UserController.getUser)

module.exports = router