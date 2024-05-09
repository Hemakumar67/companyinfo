var mongoose = require('mongoose');

const basicInfo = mongoose.Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    contry:{type:String,required:true},
    postal:{type:String,required:true},
    city:{type:String,required:true},
    countryCode:{type:String,required:true},
    contactNumber:{type:String,required:true},
    website:{type:String},
    keyContactPerson:{
        name:{type:String,required:true},
        designation:{type:String,required:true},
        contactNumber:{type:String,required:true},
        countryCode:{type:String,required:true},
        email:{type:String,required:true},
    }
})

const basicInfoModel = mongoose.model('basicInfo',basicInfo)
module.exports = {
    basicInfoModel
}

