function checkNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number > 0) {
                resolve("Positive number")
            } else {
                reject("Invalid number")
            }
        }, 2000)
    })
}

checkNumber(5)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

checkNumber(-3)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })