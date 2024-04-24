const mongoose = require('mongoose')
const svSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,//thong bao truong co phai dien hay khong
    },
    age:{
        type:Number,
        required:true
    },
    point:{
        type:Number,
        
    },
    class_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'classes'

    }
})
const studentModel = new mongoose.model('students',svSchema);
module.exports = {
    studentModel:studentModel
}