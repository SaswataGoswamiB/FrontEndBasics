function connectToDB() {
    return new Promise((resolve, reject) => {
        console.log("Connecting to DB...");
        setTimeout(() => {
            const success = true; // change to false to test error

            if (success) {
                const connection = { id: 1, status: "connected" };
                resolve(connection);  // success
            } else {
                reject("DB connection failed");  // error
            }
        }, 2000);
    });
}


function fetchDatafromDb(){
    connectToDB().then(connection => {
        console.log("DB Connection Successful:", connection);
    }).catch(error => {
        console.error("Error:", error);
    });
}


 async function fetchDatafromDbsuingAsyncAwait(){   
    try{
         const datadb = await connectToDB();
            console.log("DB Connection Successful:", datadb);
    }  
    catch(error){
        console.error("Error:", error);
    } 
}


//fetchDatafromDb();
fetchDatafromDbsuingAsyncAwait();


