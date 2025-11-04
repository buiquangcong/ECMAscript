function calculateBMI(weight, height) {
    const BMI = weight / (height ** 2);
    let status = '';
    if (BMI < 18.5) {
        status = ' Thiếu cân';
    } else if (BMI < 25) {
        status = 'Bình thường';
    } else if (BMI < 30) {
        status = 'Thừa cân';
    } else {
        status = 'Béo phì';
    }
    return `BMI: ${BMI.toFixed(2)} - Phân loại: ${status}`;
}

console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(70, 1.55));