const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const restaurantSchema = new Schema(
    {
        name : {
            type : String,
            required: [true, 'Name is required'],
            trim: true
        },
        description: {
            type : String
        },
        address: {
            type : String,
            required: [true, 'Address is required'],
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
        image: {
            type : String
        },
        homeDelivery: {
            type : Boolean,
            required : [true, "Avaliable for home delivery is Required Field"]
        },
        qrCode : {
            type : String
        },
        menu: [
            {
                type: Schema.Types.ObjectId,
                ref: "MenuItem"
            }
        ],
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
restaurantSchema.pre("save", async function(next) {

    if(!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

restaurantSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

// JWT is bearer token - if you have this token you will get the data
restaurantSchema.methods.generateAccessToken = function(){
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

const Restaurant = mongoose.model("Restaurant",restaurantSchema)
module.exports = Restaurant

