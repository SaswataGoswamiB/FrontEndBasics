// function* getgenerator(){
//     console.log("Generator Started");
//     yield 1;
//     console.log("Generator Resumed");
//     yield 2;
//     console.log("Generator Resumed Again");
//     yield 3;
//     console.log("Generator Ended");
// }


// const getgen = getgenerator();

// console.log("Testing Using Next Method");



// console.log(getgen.next());
// console.log(getgen.next());


// console.log("--------------Testing Using Loop---------------");

// for(let i=0; i<4; i++){
//     console.log(getgen.next());
// }



//usuage --> 1

// function* idGenerator(){
//     let id = 1;
//     while(true){
//         yield id;
//         id++;
//     }
// }

// const gen = idGenerator();

// console.log(gen.next().value);
// console.log(gen.next());
// console.log(gen.next().value);



// usuage -->2

// function* loop(){
//     for(let i=1; i<=11; i++){
//         yield i;
//     }
// }

// const gen = loop();

// for(let i=0; i<12; i++){
//     console.log(gen.next());
// }


//usuage ---> 3 IUnput from user

// function* userInput(){
//     const name = yield "What is your name?";
//     const age = yield "What is your age?";
//     return `Your name is ${name} and you are ${age} years old.`;
// }

// const gen = userInput();

// console.log(gen.next().value);
// console.log(gen.next("John").value);
// console.log(gen.next(30).value);



//usuage --->> Get Prime numbers 

function* getprime(){
    let num = 2;
    while(true){
        let isPrime = true;
        for(let i=2; i<num; i++){
            if(num % i === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            yield num;
        }
        num++;
    }

}

const gen = getprime();

for(let i=0; i<10; i++){
    console.log(gen.next().value);
}
