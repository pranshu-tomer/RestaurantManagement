const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const menuItemSchema = new Schema(
    {
        name : {
            type : String,
            required : [true, 'Name is required']
        },
        description : {
            type : String
        },
        price : {
            type : Number,
            required : [true, 'Price is required']
        },
        veg : {
            type : Boolean
        },
        image : {
            type : String
        },
        isAvailable : {
            type : Boolean,
            default : true
        }
    }
)

const MenuItem = mongoose.model("MenuItem",menuItemSchema)
module.exports = MenuItem