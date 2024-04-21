const { svModel, classModel, subjectModel } = require("./svModel");


//student
async function getAllStudents(req, res) {

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
  else {
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
  const result = await svModel.findOneAndUpdate(
    { name: req.params.name },
    { $set: { name: newName } },
    { returnOriginal: false }

  )
  if (result) {
    return res.send(result);
  } else {
    return res.status(404).send('Không tìm thấy sinh viên');
  }


}
//class
async function getAllclass(req, res) {
  let findclass = await classModel.find();
  console.log(findclass);
  res.send(findclass);
}
async function deleteclass(req, res) {

  const id = req.params.id;


  const result = await classModel.findByIdAndUpdate(
    id,
    { deletedAt: new Date() },
    { new: true }
  );

  if (result) {
    return res.status(202).send('class found');
  }
  else {
    return res.status(400).send('class not found');
  }
}
async function addclass(req, res) {

  const { name, teacher, gender, address } = req.body;


  if (!name || !teacher || !gender || !address) {
    return res.status(400).send("Vui lòng cung cấp đầy đủ thông tin lớp.");
  }

  const newclass = await classModel.create(req.body);
  console.log(newclass);
  const classs = await classModel.find();
  res.send(classs);

}
async function updateclassName(req, res) {


  const newName = req.body.name;
  const result = await classModel.findOneAndUpdate(
    { name: req.params.name },
    { $set: { name: newName } },
    { returnOriginal: false }

  )
  if (result) {
    return res.send(result);
  } else {
    return res.status(404).send('Không tìm thấy class');
  }
}
//subject
async function getAllsubject(req, res) {
  console.log('123');
  let findsubject = await subjectModel.find();
  console.log(findsubject);
  res.send(findsubject);
}
async function deletesubject(req, res) {

  const id = req.params.id;


  const result = await subjectModel.findByIdAndUpdate(
    id,
    { deletedAt: new Date() },
    { new: true }
  );

  if (result) {
    return res.status(202).send('subject found');
  }
  else {
    return res.status(400).send('subject not found');
  }
}
async function addsubject(req, res) {

  const { name, gender, address } = req.body;


  if (!name || !gender || !address) {
    return res.status(400).send("Vui lòng cung cấp đầy đủ thông tin môn học.");
  }

  const newsubject = await subjectModel.create(req.body);
  console.log(newsubject);
  const subject = await svModel.find();
  res.send(subject);

}
async function updatesubjectName(req, res) {


  const newName = req.body.name;
  const result = await subjectModel.findOneAndUpdate(
    { name: req.params.name },
    { $set: { name: newName } },
    { returnOriginal: false }

  )
  if (result) {
    return res.send(result);
  } else {
    return res.status(404).send('Không tìm thấy lop');
  }
}
//mix
async function findstudentwithclass(req,res){
  const id=req.body.class_id;
  const result = await svModel.find(
    {class_id:id}
  )
  if (result) {
    return res.send(result);
  } else {
    return res.status(404).send('Không tìm thấy ');
  }
}

module.exports = {
  getAllStudents,
  deleteStudent,
  addStudent,
  updateStudentName,
  getAllclass,
  deleteclass,
  updateclassName,
  addclass,
  getAllsubject,
  deletesubject,
  updatesubjectName,
  addsubject,
  findstudentwithclass
};



