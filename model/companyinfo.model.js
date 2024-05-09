var mongoose = require('mongoose');

const companyInfo = mongoose.Schema({
    profile:{type:String,required:true},
    socialMediaLink:{type:String},
    vision:{type:String,required:true},
    managementTeam:[{
        name:{type:String},
        designation:{type:String},
        contactNumber:{type:String,required:true},
        summary:{type:String,required:true},
        linkedinProfile:{type:String,required:true},
    }],
    basicinfo:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'basicInfo',
        required:true
    }
})

const companyInfoModel = mongoose.model('companyInfo',companyInfo)
module.exports = {
    companyInfoModel
}

