// const promiseone = new Promise(function(resolve,reject){
// // Do any asynmc Task
// // Db Clls
// // staet ---> Pending
// setTimeout(()=>{
//     console.log("Async Task is completed");
//     resolve(); // state --> fulfilled
// },1000)

// });
// promiseone.then(function(){
//     console.log("Promise is consumed");
// })


//Promise - 2

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async 2nd Task is completed");
//          resolve("Data is fetched");
//     },1000)
// }).then((data)=>{
//     console.log("Promise is consumed", data);
// })


//Promise -3

// new Promise((resolve,reject)=>{

//     resolve({username:"Saswata",age:22});
// }).then((data)=>{
//     console.log("Promise is consumed", data);
// });


//promise -4

// new Promise((resolve,reject)=>{
//     let success = false;
//     if(success){
//         resolve({username:"Saswata",age:22});
//     }else{
//         reject("Error: Something went wrong");
//     }
// })
// .then((data)=>{
//     console.log("Promise is consumed", data);
// })
// .catch((error)=>{
//     console.log("Error is ", error);
// })
// .finally(()=>{
//     console.log("This will run regardless of the outcome of the promise.");
// });


//Promise - 5




