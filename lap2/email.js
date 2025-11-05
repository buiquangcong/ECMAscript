// Tạo template cho email thông báo
const user = {
    firstName: "Bùi",
    lastName: "Quang Công",
    product: "Laptop MSI THIN A16",
    price: 25000000,
    orderDate: "2024-01-15",
};

// Tạo template string cho email
const emailTemplate = `Tên sản phẩm: ${user.product}
Giá: ${user.price}
Ngày đặt hàng: ${user.orderDate}
Xin chào ${user.firstName} ${user.lastName}, cảm ơn bạn đã đặt hàng!`; // Viết template ở đây

console.log(emailTemplate);