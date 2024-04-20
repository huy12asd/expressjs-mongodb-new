const svModel = require('./svModel')

async function getAllStudents(req, res){
   
    let findStudent = await svModel.find();
    console.log(findStudent);
    res.send(findStudent);
}
async function deleteStudent(req, res) {

    const id = req.params.id;

   
    const result = await svModel.findByIdAndUpdate(
      id,
      { deletedAt: new Date() },
      { new: true } 
    );

    if (result) {
      return res.status(202).send('Student found');
    }
    else{
        return res.status(400).send('Student not found');
    }
}
async function addStudent(req, res) {
 
  const { name, age, gender, address } = req.body;


  if (!name || !age || !gender || !address) {
    return res.status(400).send("Vui lòng cung cấp đầy đủ thông tin sinh viên.");
  }

  const newStudent = await svModel.create(req.body);
  console.log(newStudent);
  const students = await svModel.find();
  res.send(students);
    
  }
  async function updateStudentName(req, res) {

      
      const newName = req.body.name;
      const result=await svModel.findOneAndUpdate(
        {name:req.params.name},
        {$set:{name:newName}},
        {returnOriginal: false}

      )
     if (result) {
      return res.send(result);
    } else {
      return res.status(404).send('Không tìm thấy sinh viên');
    }
    

  }
module.exports = { getAllStudents, 
    deleteStudent,
    addStudent ,
    updateStudentName };