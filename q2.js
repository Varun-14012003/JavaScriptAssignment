let student = {
    name: "Rahul",
    age: 21,
    city: "Mumbai"
}

let { name, age, city: studentCity, course = "Unknown" } = student

console.log(name);        
console.log(age);         
console.log(studentCity); 
console.log(course);      