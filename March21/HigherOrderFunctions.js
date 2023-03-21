// const add = ()=>{
//     2 + 3;

// };
// console.log(add());
// console.log(add);


// const addUp= (num1) =>{
//     return (num2)=>{
//         return num1 + num2;
//     };
// };
// console.log(addUp(1)(2));


//Implied returns :)
// const addUp = (num1) => (num2)=> num1 + num2;
// console.log(addUp(1)(2));

function HiCN(){
    console.log("Hello Codenation");
}

function Super(){
    for (let i=0;i<5; i++){
        HiCN();
    }
}
Super();

//.map function


function fnMultiply(num1){
    return num1 * 3;
};
const arrNumbers = [0, 1, 2, 3, 4];
const arrNew = arrNumbers.map(fnMultiply);
console.log (arrNew);

const add = (a, b) =>{
    return a+b;
};
const subtract =(a,b) =>{
    return a-b;
};

const multiply =(a,b) =>{
    return a*b;
};
const divide=(a,b)=>{
    return a/b;
};
const doMath=(num1)=>{
    return (num2, fn) =>{
        return fn(num1, num2);
    };
};
console.log(doMath((7)(4, multiply)));

// --- Activity 1 ---// our function that just holds a console log
const logMsg = () => {
    console.log('Hello Codenation')
}
// higher order function that is passed the logMsg function as a parameter
// the parameter can be called anything and is just used as a variable to hold the function being passed
const loopFunction = (functionToLog) => {
    // loop through and run the function 5 times    
    for (let i = 0; i < 5; i++) {
        functionToLog()
}}
loopFunction(logMsg);
// --- Activity 2 ---// variable that holds an array of numbers
const numbers = [1, 2, 3, 4, 5];
// the map method is a higher order function as we need to pass a function as an argument to the map method
// the map method then takes the value you are returning and adds it to a new array
// then that new array of numbers * 3 is stored in the variable newArr
let newArr = numbers.map((num) => {
    return num * 3;
})
console.log(newArr)

// --- Activity 3 ---
const add = (a, b) => { return a + b};
const subtract = (a, b) => {return a - b};
const multiply = (a, b) => {return a * b};
const divide = (a, b) => { return a / b};
// this function is a higher order function as it returns another function
// the first function expects 1 number to be passed to it
// the function in the return statement expects 1 number and a function to be passed to it
const doMaths = (num1) => {
    return (num2, fn) => {
        console.log("num1 is",num1);
        console.log("num2 is",num2);
        return fn(num1, num2)
    }}
// the first doMaths function is run by calling doMaths(2) any number can be added to the brackets
// the second function is called by adding another set of normal brackets at the end of the first function call
// we can then pass a number and function inside of those brackets, in this case either the add, subtract, multiply or divide function
console.log(doMaths(2)(3, multiply));
