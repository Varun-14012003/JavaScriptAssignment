class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Employee extends Person {
    constructor(name, age, employeeId, salary) {
        super(name, age)
        this.employeeId = employeeId
        this.salary = salary
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Employee ID: ${this.employeeId}`);
        console.log(`Salary: ${this.salary}`);
    }
}

const emp = new Employee("Varanasya", 23, 101, 10000)
emp.displayDetails()