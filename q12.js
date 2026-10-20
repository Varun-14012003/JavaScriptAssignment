const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10)
    }, 1000)
})

promise
    .then((number) => {
        return number * 2
    })
    .then((result) => {
        return result + 5
    })
    .then((finalResult) => {
        console.log(finalResult);
    })
    .catch((error) => {
        console.log(error);
    })