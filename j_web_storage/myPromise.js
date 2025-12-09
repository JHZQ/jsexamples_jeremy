const failed = false;

const myPromise = new Promise((resolve, reject) => {
    if (failed)
        reject(`failure has occur!`);
    else
        resolve(`resolved!`);
})

function success(result){
    console.log(result);
}

function onFailed(error){
    console.log(error);
}

myPromise
.then((result) => {
  success(result);
})
.catch((error) => {
  onFailed(error);
})