const mysql = require('mysql')

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "college"
})

db.connect((err)=>{
    if (err) {
        console.log("Connection failed:", err.message);
        return
    }
    console.log("Connected...");
})

function insertStudent(name, age, course, email){
    const sql = "insert into students(name, age, course, email) values (?,?,?,?)"
    db.query(sql, [name, age, course, email], (err, result)=>{
        if (err) {
            console.log("Insert failed:", err.message);
        } else {
            console.log("Student inserted id: ", result.insertId);
        }
    })
}

function displayStudents(){
    const sql = "select * from students"
    db.query(sql, (err, result)=>{
        if (err) {
            console.log("Fetch failed:", err.message);
        } else {
            console.log(result);
        }
    })
}

function searchStudent(keyword){
    const sql = "select * from students where id = ? or name like ?"
    db.query(sql, [keyword, `%${keyword}%`], (err, result)=>{
        if (err) {
            console.log("Search failed:", err.message);
        } else if (result.length === 0) {
            console.log("No student found");
        } else {
            console.log(result);
        }
    })
}

function updateStudent(name, age, course, email, id){
    const sql = "update students set name = ?, age = ?, course = ?, email = ? where id = ?"
    db.query(sql, [name, age, course, email, id], (err, result)=>{
        if (err) {
            console.log("Update failed:", err.message);
        } else if (result.affectedRows === 0) {
            console.log("No student found with that id");
        } else {
            console.log("Student updated...");
        }
    })
}

function deleteStudent(id){
    const sql = "delete from students where id = ?"
    db.query(sql, [id], (err, result)=>{
        if (err) {
            console.log("Delete failed:", err.message);
        } else if (result.affectedRows === 0) {
            console.log("No student found with that id");
        } else {
            console.log("Student deleted...");
        }
    })
}

insertStudent("Varanasya", 20, "BTech", "varu@example.com")
insertStudent("Henil", 21, "BSc", "henil@example.com")
displayStudents()
searchStudent("Henil")
searchStudent(1)
updateStudent("Amul", 23, "Bsc", "amul@gmail.com", 1)
deleteStudent(2)
displayStudents()
db.end()