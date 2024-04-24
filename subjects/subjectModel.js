const mongoose = require('mongoose')
const subjectSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})
const subjectModel = new mongoose.model('subjects',subjectSchema);
module.exports = {
    
    subjectModel: subjectModel
};