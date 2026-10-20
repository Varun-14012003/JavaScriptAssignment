let numbers = [10, 20, 30, 40, 50, 60]

let [first, second, , fourth, ...rest] = numbers
let remaining = [numbers[2], ...rest]

console.log(first);     
console.log(second);    
console.log(fourth);    
console.log(remaining); 