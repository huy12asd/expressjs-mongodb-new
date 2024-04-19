const svModel = require('./svModel')
const conect = require('./conect')
async function getAllStudents(req, res){
    await mongoose.connect(uri);
    let sv = await svModel.find();
    console.log(sv);
    res.send(sv);
}
async function deleteStudent(req, res) {
    await mongoose.connect(conect.uri);
    const id = req.params.id;
    console.log(id)

      await svModel.deleteOne({ _id: id });
      res.redirect('../');
}
async function addStudent(req, res) {
    await mongoose.connect(conect.uri);
      const newStudent = await svModel.create(req.body);
      console.log(newStudent);
      const students = await svModel.find();
      res.send(students);
    
  }
  async function updateStudentName(req, res) {
    await mongoose.connect(conect.uri);
      const { ten } = req.params;
      const newName = req.body.name;
      await svModel.updateOne({ ten }, { name: newName });
      const students = await svModel.find();
      res.send(students);

  }
module.exports = { getAllStudents, deleteStudent,addStudent ,updateStudentName };