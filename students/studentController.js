const {  studentModel } = require("./studentModel");
const { classModel } = require("./classes/classesModel")

async function getAllStudents(req, res) {

    let findStudent = await studentModel.find();
    
    res.send(findStudent);
  }
  async function deleteStudent(req, res) {
  
    const id = req.params.id;
  
  
    const result = await studentModel.findByIdAndUpdate(
      id,
      { deletedAt: new Date() },
      { new: true }
    );
  
    if (result) {
      return res.status(202).send('Student found');
    }
    else {
      return res.status(400).send('Student not found');
    }
  }
  async function addStudent(req, res) {
  
    const { name, age, gender, address } = req.body;
  
  
    if (!name || !age || !gender || !address) {
      return res.status(400).send("Vui lòng cung cấp đầy đủ thông tin sinh viên.");
    }
  
    const newStudent = await studentModel.create(req.body);
   
    const students = await studentModel.find();
    res.send(students);
  
  }
  async function updateStudentName(req, res) {
  
  
    const { name: currentName } = req.params;
    const { name: newName } = req.body;

    
        const studentToUpdate = await studentModel.findOne({ name: currentName });
        if (!studentToUpdate) {
            return res.status(404).send('Không tìm thấy sinh viên');
        }

        const updatedStudent = await studentModel.findOneAndUpdate(
            { name: currentName },
            { $set: { name: newName } },
            { returnOriginal: false }
        );

        return res.send(updatedStudent);
}

    //mix
async function findstudentwithclass(req,res){
    const id=req.body.class_id;
    const result = await studentModel.find(
      {class_id:id}
    ).populate('class_id');
    if (result) {
      return res.send(result);
    } else {
      return res.status(404).send('Không tìm thấy ');
    }
  }
  //tim kiem
  
  //hien diem tu 6-8
  async function findPoint(req,res){
  
    const idsubject = req.body.subject_id;
    const classItem = await classModel.findOne({subject_id:idsubject}).select('_id');
  
    if (classItem) {
      const idFind = classItem._id;
      
      const student = await studentModel.find({ class_id: idFind, point: { $gte: 6, $lte: 8 } });
  
      if (student && student.length > 0) {
        return res.json(student);
      } else {
        return res.status(404).json({ message: 'Student not found in the specified condition' });
      }
    } else {
      return res.status(404).json({ message: 'Class not found for the specified subject' });
    }
  }
  module.exports = {
    getAllStudents,
    deleteStudent,
    addStudent,
    updateStudentName,
    findstudentwithclass,
    findPoint
}
