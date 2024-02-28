function register(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("register")
            resolve();
        }, 5000);
    })
}

function sendEmail(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("email")
            resolve();
        }, 4000);
    })
}

function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login")
            // resolve();
            reject();
        }, 3000);
    })
}

function getUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data")
            resolve();
        }, 2000);
    })
}

function displayUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("display")
            resolve();
        }, 1000);
    })
}

register().then(sendEmail).then(login).then(getUserData).then(displayUserData).catch(e=>console.log(e))

console.log("other work")
