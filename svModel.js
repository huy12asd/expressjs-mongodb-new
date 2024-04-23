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
const svModel = new mongoose.model('students',svSchema);
const classSchema= new mongoose.Schema({
    class_id:{
        type:mongoose.Schema.Types.ObjectId
    },
    name:{
        type:String,
        required:true
    },
    teacher:{
        type:String,
        require:true
    },
    subject_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'subject'
    }
})
const classModel = new mongoose.model('classes',classSchema);
const subjectSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})
const subjectModel = new mongoose.model('subjects',subjectSchema);
module.exports = {
    svModel: svModel,
    classModel: classModel,
    subjectModel: subjectModel
};