const asyncHandler = require('../utils/asyncHandler')
const Restaurant = require('../models/restaurant.model')
const apiError = require('../utils/apiError')
const uploadCloudinary = require('../utils/cloudinary')
const qr = require('qrcode')
const apiResponse = require('../utils/apiResponse')

const registerRestaurant = asyncHandler(async (req,res) => {
    const {name,description,address,phone,email,homeDelivery,password} = req.body

    if(
        [name,address,phone,email,homeDelivery,password].some((field) => field?.trim() === "")
    ){
        throw new apiError(400, "All field is required")
    }

    const existedListing = await Restaurant.findOne({email})
    if(existedListing){
        throw new apiError(409, "Restaurant with email already exist")
    }

    let image = req.file?.path
    if(image){
        image = await uploadCloudinary(image)
    }

    let restaurant = Restaurant({
        name,
        description,
        address,
        phone,
        email,
        homeDelivery,
        image: image || "",
        password
    })

    let data = {
        url : `/api/v1/restaurant/menu/${restaurant._id}`
    }
    data = JSON.stringify(data)
    let qrPath = './public/temp/qr.png'
    qr.toFile(qrPath,data,function(err){
        if(err){
            throw new apiError(409, "Problem in Generating the QR code")
        }
    })

    qrPath = await uploadCloudinary(qrPath)

    restaurant.qrCode = qrPath
    await restaurant.save()
    
    const response = await Restaurant.findById(restaurant._id).select(
        "-password"
    )
    if(!response){
        throw new apiError(500, "Internal server error , while registering the user")
    }
    return res.status(201).json(
        new apiResponse(200, response, "User registered successfully")
    )
})

module.exports = {
    registerRestaurant
}