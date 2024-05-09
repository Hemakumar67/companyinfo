var mongoose = require('mongoose');

const productInfo = mongoose.Schema({
    products:[{
        name:{type:String,required:true},
        description:{type:String,required:true},
        linkedinProfile:{type:String,required:true},
        basicinfo:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:'basicInfo',
            required:true
        }
    }]
})

const productInfoModel = mongoose.model('productInfo',productInfo)
module.exports = {
    productInfoModel
}

