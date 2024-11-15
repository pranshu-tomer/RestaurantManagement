const express = require('express')
const app = express()

const restaurantRouter = require('./routes/restaurant.route')
app.use('/api/v1/restaurant',restaurantRouter)

module.exports = app