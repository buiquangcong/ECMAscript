//Bài 1
function getFirstLast(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("Dữ liệu đầu vào không phải là một mảng (array).");
    }
    const first = array[0];
    const last = array[array.length - 1];

    return [first, last];
}

console.log(getFirstLast([1, 2, 3, 4]));


//Bài 2

const product = {
    id: 1,
    name: "Laptop",
    price: 15000000,
    manufacturer: {
        brand: "Dell",
        country: "USA"
    }
};

const { name, price, manufacturer: { brand: brandName } } = product;

console.log(name, price, brandName);

//Bài 3



const apiUrl = 'https://jsonplaceholder.typicode.com/users';

console.log('Bắt đầu tải dữ liệu...');

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {

            throw new Error(`Lỗi HTTP! Trạng thái: ${response.status}`);
        }

        return response.json();
    })
    .then(users => {

        console.log('✅ Tải dữ liệu thành công!');
        console.log('Danh sách Users:', users);

        if (users.length > 0) {
            console.log(`User đầu tiên: ${users[0].name}`);
        }
    })
    .catch(error => {
        console.error('❌ Không thể tải dữ liệu:', error.message);
    })
    .finally(() => {
        console.log('--- Thao tác fetch đã hoàn tất ---');
    });

console.log('...ok');




