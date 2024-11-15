const {Router} = require('express')
const {registerRestaurant} = require('../controllers/restaurant.controller')
const { model } = require('mongoose')
const upload = require('../middlewares/multer.middleware')

const router = Router()

router.route('/register')
.post(upload.single('image'),registerRestaurant)

module.exports = router