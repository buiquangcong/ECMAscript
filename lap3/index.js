//--------------BÀI 1---------------

// // Function 1
// function multiply(a, b) {
//   return a * b;
// }

const multiply = (a, b) => a * b;
console.log(multiply(2, 2));


// // Function 2
// function isPositive(number) {
//   return number >= 0;
// }

const isPositive = (number) => number >= 0;
console.log(isPositive(1))


// // Function 3
// function getRandomNumber() {
//   return Math.random();
// }

const getRandomNumber = () => Math.random();
console.log(getRandomNumber());


// // Function 4
// document.addEventListener("click", function () {
//   console.log("Clicked!");
// });


// document.addEventListener("click", () => {
//     console.log("Clicked!");
// });

//--------------BÀI 2---------------

// function createUser(name, age, isAdmin) {
//   if (name === undefined) name = "Anonymous";
//   if (age === undefined) age = 18;
//   if (isAdmin === undefined) isAdmin = false;

//   return {
//     name: name,
//     age: age,
//     isAdmin: isAdmin,
//   };
// }

function createUser(name = "Anonymous", age = 18, isAdmin = false) {
    return {
        name,
        age,
        isAdmin,
    };
}

console.log(createUser());

//--------------BÀI 3---------------


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const mergeArray = [...arr1, ...arr2, ...arr3];
console.log(mergeArray);


const sumAll = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(10, 1, 10, 1, 10));

const createProduct = (thongtin) => {
    const macdinh = {
        name: "No name",
        price: 0,
        color: "default",
    }

    return { ...macdinh, ...thongtin };
};
const productDetails = {
    name: "Iphone 17 Pro Max",
    price: 5000,
    color: "Silver",
};

const newProduct = (createProduct(productDetails));

console.log(newProduct);
