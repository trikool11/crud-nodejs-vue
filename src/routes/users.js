const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router.get('/', UserController.users)
router.post('/updateuser', UserController.updateuser)
router.post('/deleteuser', UserController.deleteuser)
router.post('/changeStateUser', UserController.changeStateUser)
router.post('/getUserById', UserController.getUserById)


module.exports = router