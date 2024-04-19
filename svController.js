const svModel = require('./svModel')

async function getAllStudents(req, res){
   
    let sv = await svModel.find();
    console.log(sv);
    res.send(sv);
}
async function deleteStudent(req, res) {

    const id = req.params.id;
    console.log(id)

      await svModel.deleteOne({ _id: id });
      res.redirect('../');
}
async function addStudent(req, res) {
 
      const newStudent = await svModel.create(req.body);
      console.log(newStudent);
      const students = await svModel.find();
      res.send(students);
    
  }
  async function updateStudentName(req, res) {

      const { ten } = req.params;
      const newName = req.body.name;
      await svModel.updateOne({ ten }, { name: newName });
      const students = await svModel.find();
      res.send(students);

  }
module.exports = { getAllStudents, deleteStudent,addStudent ,updateStudentName };