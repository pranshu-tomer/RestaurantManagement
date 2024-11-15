const env = require('dotenv')
env.config()

const dbConnect = require('./db/index')
const app = require('./app')

dbConnect()
.then(() => {
    app.listen(process.env.PORT,() => {
        console.log(`Server is Listening to port ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log(`Database Connection Failed : ${error}`)
})
