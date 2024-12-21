const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
}))

const restaurantRouter = require('./routes/restaurant.route')
app.use('/api/v1/restaurant',restaurantRouter)

module.exports = app