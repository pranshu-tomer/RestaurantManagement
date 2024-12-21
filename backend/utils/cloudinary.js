const { v2 } = require('cloudinary');
const fs = require('fs')

v2.config({ 
    cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`, 
    api_key: `${process.env.CLOUDINARY_API_KEY}`, 
    api_secret: `${process.env.CLOUDINARY_API_SECRET}`
});

const uploadCloudinary = async (localPath) => {
    try{
        if(!localPath) return null
        const response = await v2.uploader.upload(localPath, {
            resource_type: "auto"
        })
        fs.unlinkSync(localPath)
        return response.url
    } catch(error){
        console.log("Problem in uploading the file to cloudinary : ",error)
        return null
    }
}

module.exports = uploadCloudinary