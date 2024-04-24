const mongoose = require('mongoose')
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
module.exports = {
    classModel: classModel
}