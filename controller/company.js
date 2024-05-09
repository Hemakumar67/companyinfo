
const { basicInfoModel } = require('../model/basicInfo.model');
const { companyInfoModel } = require('../model/companyinfo.model');
const { productInfoModel } = require('../model/productInfo.model');

const companyDetails = async (req, res) => {
    try {
        const companyKey = req.query.company;
        const sortKey = req.query.sort || "1";
        console.log('keyData :>> ', companyKey);
        let filterquery = companyKey ? {name:companyKey} : {};
        const collectionData = await Promise.all([basicInfoModel.find(filterquery).sort(sortKey), companyInfoModel.find({}), productInfoModel.find({})])
        let responseData = {
            basicInfo : collectionData[0],
            companyInfo: collectionData[1],
            productInfo : collectionData[2]
        }
        res.send({ status: 200, data: responseData });
    } catch (error) {
        console.log('error :>> ', error);
    }
}

const createcompanyDetails = async (req, res) => {
    try {
        let {companyInfo,basicInfo,productInfo} = req.body;
        const collectionData = await Promise.all([companyInfoModel.create(companyInfo), basicInfoModel.create(basicInfo), productInfoModel.create(productInfo)])
        let responseData = {
            basicInfo : collectionData[0],
            companyInfo: collectionData[1],
            productInfo : collectionData[2]
        }
        res.send({ status: 200, data: responseData });
    } catch (error) {
        console.log('error :>> ', error);
    }
}



module.exports = {
    companyDetails,
    createcompanyDetails
}