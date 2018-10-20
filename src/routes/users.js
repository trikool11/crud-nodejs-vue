const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router.get('/', UserController.users)
router.post('/actualizar', UserController.actualizar)
router.post('/getUserById', UserController.getUserById)


module.exports = router