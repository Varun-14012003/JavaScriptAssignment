const task = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task completed successfully")
    }, 2000)
})

task
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })