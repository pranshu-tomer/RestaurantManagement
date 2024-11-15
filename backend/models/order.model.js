const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const orderSchema = new Schema(
    {
        user : {
            type : Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        restaurant: { 
            type: Schema.Types.ObjectId, 
            ref: 'Restaurant', 
            required: true 
        },
        items: [{
            menuItem: { 
                type: Schema.Types.ObjectId, 
                ref: 'MenuItem', 
                required: true 
            },
            quantity: { 
                type: Number, 
                required: true 
            },
        }],
        totalPrice: { 
            type: Number, 
            required: true 
        },
        status: { 
            type: String, 
            enum: ['placed', 'preparing', 'delivered'], 
            default: 'placed' 
        },
        orderTime: { 
            type: Date, 
            default: Date.now 
        },
        deliveryAddress: { 
            type: String 
        },
    }
)

const Order = mongoose.model("Order",orderSchema)
module.exports = Order

