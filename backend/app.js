const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin:'http://localhost:5173', 
    credentials:true,
    optionSuccessStatus:200,
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const restaurantRouter = require('./routes/restaurant.route')
app.use('/api/v1/restaurant',restaurantRouter)

module.exports = app