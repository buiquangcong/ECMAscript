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
const arr = [...arr1, ...arr2];
console.log(arr);
const copy = [...arr1];
console.log(copy);

const arr3 = [0, ...arr1, ...arr2, 7];
console.log(arr3);