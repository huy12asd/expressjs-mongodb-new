const {  subjectModel } = require("./subjectModel");

async function getAllsubject(req, res) {
    console.log('123');
    let findsubject = await subjectModel.find();
    
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

  module.exports = {
   
    getAllsubject,
    deletesubject,
    updatesubjectName,
    addsubject,
   
  
  };