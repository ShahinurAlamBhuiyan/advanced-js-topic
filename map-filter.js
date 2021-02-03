const numbers = [3,4,5,6,7,8];
// const output = []
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square(element) {
//     return element * element;
// }

// numbers.map(function (element, index, array) {
//    console.log(element, index, array);
// })

// const result = numbers.map(function (element) {
//    return element * element;
// })

// console.log(result);


// const square = element => element * element; // also a function
// const square = x => x * x; // also a function


// const result = numbers.map(x => x * x);
// console.log(result);

// const bigger = numbers.filter(x => x > 5)
// const smaller = numbers.filter(x => x < 5)
// console.log(smaller);

const big = numbers.find(x => x > 5);
console.log(big);