const svModel = require("./svModel");

async function getAllStudents(req, res) {
  let sv = await svModel.find(); // e đặt tên thì chọn tên có nghĩa tí ấy cái này e hỏi lại a Trang
  console.log(sv); // sau này đẩy code lên k để console.log ở trong code nha em
  res.send(sv);
}
async function deleteStudent(req, res) {
  const id = req.params.id;
  console.log(id);
  // cái này e nên check xem id đó đã xóa chưa thì mới xóa ví dụ thường trong db sẽ có 1 trường deleted at để check xem đã
  // xóa chưa thì mình cập nhận trường đó chứ ít ai xóa hẳn lắm
  // e nên trả về status code 200 nếu xóa thành công và 404 nếu không tìm thấy id đó
  // em xem hàm deleteOne của mongoose nhé
  await svModel.deleteOne({ _id: id });
  res.redirect("../");
}
async function addStudent(req, res) {
  const newStudent = await svModel.create(req.body); // đoạn này e nên check xem thông tin nhập vào đã hợp lệ chưa
  console.log(newStudent);
  const students = await svModel.find();
  res.send(students);
}
async function updateStudentName(req, res) {
  const { ten } = req.params;
  const newName = req.body.name;
  await svModel.updateOne({ ten }, { name: newName });
  // đoạn này e nên trả về user đã update chứ không phải trả về tất cả user em xem hàm findOneAndUpdate của mongoose nhé
  const students = await svModel.find(); 
  res.send(students);
}
module.exports = {
  getAllStudents,
  deleteStudent,
  addStudent,
  updateStudentName,
};
