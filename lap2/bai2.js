// Bài 2: Sử dụng const đúng cách

// // Tạo một object student với const
// // Thêm thuộc tính điểm và in ra
// const student = {
//   name: "ThuyTien",
//   age: 20,
// };

// // Thực hiện các thao tác sau:
// // 1. Thêm thuộc tính grade với giá trị "A"
// // 2. Thay đổi tuổi thành 21
// // 3. In ra toàn bộ thông tin student

const student = {
    name: "ThuyTien",
    age: 20,
};
student.grade = "A";
student.age = 21;
console.log(student);