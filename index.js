const colors = ["red", "green", "blue"];

// const red = colors[0];
// console.log(red);


//Array destructuring

const [red, green, blue, yellow] = colors;
console.log(red, green, blue, yellow);


const numbers = [1, 2, 3, 4, 5];

const [, second, , fourth] = numbers;
console.log(second, fourth);


const users = ["password", "email", "age", "name"];
const [password, ...userInfo] = users;
console.log(userInfo);



const user = {
    id: 1,
    personalInfo: {
        name: "javascript",
        contact: {
            email: "javascript@email.com",
            phone: "123-456-7890",
        },
    },
};

function getUserInfo(user) {
    const { name, contact: { email } } = user.personalInfo;
    return { name, email };
}

console.log(getUserInfo(user));



const employee = {
    id: 101,
    fullName: "Nguyễn Văn A",
    position: "Frontend Developer",
    salary: 2000,
    department: {
        name: "IT",
        location: "Hà Nội"
    }
};
function getEmployeeInfo(employee) {
    const { fullName, position, department: { name, location } } = employee;
    return { fullName, position, name, location }
};


console.log(getEmployeeInfo(employee));



function createProduct({ name, price, category = "general", inStock = true }) {
    return { name, price, category, inStock };
}

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);
// { name: 'Laptop', price: 999, category: 'general', inStock: true }


