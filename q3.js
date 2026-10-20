let numbers = [2, 5, 8, 10, 15, 20]

let squares = numbers.map((num) => num * num)
console.log(squares);

let greaterThan20 = numbers.filter((num) => num > 20)
console.log(greaterThan20);

let sum = numbers.reduce((total, num) => total + num, 0)
console.log(sum);