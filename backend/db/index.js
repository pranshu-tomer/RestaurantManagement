const mongoose = require('mongoose')
const DB_NAME = require('../constants.js')


const dbConnect = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Connected to database !! DB Host : ${connectionInstance.connection.host}`)
    }catch(error){
        console.error("Error while connecting to database",error)
        throw error
    }
}

module.exports =  dbConnect