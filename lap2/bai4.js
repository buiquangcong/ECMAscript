// Tạo HTML template cho card sản phẩm
const product = {
    name: "iPhone 15",
    price: 20000000,
    discount: 10,
    inStock: true,
};

// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML
const productCard = ` Tên sản phẩm: ${product.name}
Giá: ${finalPrice} VNĐ
Ngày ra mắt: 2024-01-01
<button>Mua ngay</button>
`;

console.log(productCard);
