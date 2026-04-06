let promiseone = new Promise(function (resolve, reject) {
    // Do any asynmc TasK
    let error = true;
    if (!error) {
        resolve("Promise is resolved successfully");
    } else {
        reject("Promise is rejected due to some error");
    }
});

// consuming the promise using the 
// promiseone.then(function (data) {
//     console.log("Promise is consumed", data);
// })
//     .catch(function (error) {
//         console.log("Error is ", error);
//     })
//     .finally(function () {
//         console.log("This will run regardless of the outcome of the promise.");
//     });

// handling promise by async.await
async function consumePromisefive() {
    try{
      const response = await promiseone;
      console.log(response);
    }catch(error){
      console.log("Error is ", error);
    }
}

consumePromisefive();