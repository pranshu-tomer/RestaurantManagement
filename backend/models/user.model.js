const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userSchema = new Schema(
    {
        name : {
            type : String,
            required: [true, 'Name is required'],
            trim: true
        },
        phone : {
            type : String,
            required: [true, 'Phone number is required'],
        },
        email: {
            type : String,
            unique : [true, 'Email already exists'],
            required : [true, 'Email is required'],
            trim : true,
            lowercase : true
        },
        address: {
            type : String
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
    },
    {
        timestamps : true
    }
)

// .pre is hook it doing work just before any event on database -> go to mongoose documentation
userSchema.pre("save", async function(next) {

    if(!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

// JWT is bearer token - if you have this token you will get the data
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        // Payload
        {
            _id: this._id,
            email: this.email,
            name: this.name
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

const User = mongoose.model("User",userSchema)
module.exports = User

