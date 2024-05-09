var mongoose = require('mongoose');

const connection = async () => {
    try {
        let url = 'mongodb://localhost:27017/company'
        mongoose.connect(url).then((data) => {
            console.log('db connected successfully');
        }, (err) => {
            console.log('connection error',err);
        })
    } catch (error) {
        console.log('error :>> ', error);
    }
}

module.exports = {
    connection
}
