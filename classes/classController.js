const {  classModel } = require("./classesModel");

async function getAllclass(req, res) {
    let findclass = await classModel.find();
  
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

  module.exports = {
    getAllclass,
    deleteclass,
    updateclassName,
    addclass,
  }
