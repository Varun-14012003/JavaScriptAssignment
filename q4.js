let students = [
    { name: "Amit", marks: 75 },
    { name: "Priya", marks: 90 },
    { name: "Rahul", marks: 45 },
    { name: "Sneha", marks: 80 }
]

let passed = students.filter((student) => student.marks > 60)
let names = passed.map((student) => student.name)
console.log(names);

let totalMarks = students.reduce((total, student) => total + student.marks, 0)
let average = totalMarks / students.length
console.log(average);