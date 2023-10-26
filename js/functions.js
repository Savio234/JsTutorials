// /* NAMED FUNCTIONS */
function factorial(n) {
    if (n <= 1) {
        return n
    } else {
        return  n * factorial( n - 1 )
    }
}
console.log(factorial(6));

// RECURSION
function recursiveSum(n) {
    if (n <= 1) {
        return n
    } else {
        return n + recursiveSum(n - 1)
    }
}
console.log(recursiveSum(100));

function myFunc(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
myFunc(2, 4, 7)
myFunc(30, 55, )
console.log(myFunc);
console.log(myFunc())
console.log(myFunc(10, 100, 1000));
console.log(myFunc(20, 200));
// console.log(a);

function mySum(a, b) {
    return a + b
}
mySum(10, 15) //return 25 but shows nothing in the console
console.log(mySum(30, 2)); //returns 32
console.log(mySum);
console.log(mySum()); //returns NaN because since there are no arguments, 
// undefined is automatically assigned to 'a' and 'b'. 
// Thereby, undefined + undefined = 'NaN'

function myReturn(a) {
    console.log(a);
    return a;
    console.log(a);
    const c = 10
    console.log(c);
}
myReturn(10)
console.log(myReturn(5));
// A function execution immediately stops after the return statement
// Hence everything after return is unreachable

let z = 15
function f1() {
    z = 20
}
f1()

function f2() {
    let s = 10
    return (s, z);
}
console.log(f2())

var randomNum;
var max = 1000
function findRandom() {
  randomNum = Math.floor(Math.random() * max) //Finds number between 0 - max
  return randomNum
}
console.log(findRandom());


function mult(a, b, c) {
    const multiply = a * b * c
    console.log(multiply);
}
mult(30, 5, 4) //logs 600 to the console
mult() //NaN cause since no arguments, parameters will be automatically 'undefined' and undefined x undefined = NaN
mult(5, 64, 'abc') //logs NaN multiplication of anything other than numbers results in NaN
mult('abc', 'def', 'ghi');

// METHODS OF FUNCTION
// .call()


// .apply()

// .bind()
const objectOne = {
    a: 10,
    b: 'null',
    c: NaN
}
function testFunc(a, b) {
    console.log(a + b);
    console.log(this);
}
const bindedFunc = testFunc.bind(objectOne, 10, 30)
const bindedFunc1 = testFunc.bind(objectOne)
const bindedFunc2 = testFunc.bind(objectOne, 70)
console.log(bindedFunc(), bindedFunc1(20, 50), bindedFunc2(25));



// /* ANONYMOUS FUNCTIONS */
// They are either used as callbacks or stored in a variable 
// Because they cannot be used as standalone like the ideal functions
setTimeout(function() {
    console.log('This text was delayed for 12 secs');
}, 12000)
let l = 1
const intervalTime = setInterval(() => {
    console.log('Prints every 2 secs ' + l);
    l++;
}, 2000)
setTimeout(() => {
    clearInterval(intervalTime)
    console.log('Interval has been cleared after 10 secs');
}, 10500)
console.log(typeof intervalTime, typeof ages, typeof numbers, typeof numArray, typeof mikeObject);

// /* IIFE: Immediately Invoked Function Expression */
;(function() {
    console.log('This is an IIFE. Immediately Invoked Function Expression');
})()
;(function(a) {
    console.log(a);
})(12);
const anIIFE = (function (a, b) {
    return a + b
}(20, 5))
console.log(anIIFE);


// /* ARROW FUNCTIONS */
// ARROW FUNCTIONS SYNTAXs

(a, b) => a + b; //arrow function has an implicit return statement
a => a * a;
() => true;

(a, d) => { //explicit return statement
    return a + d
}

// To return an object, implicitly and explicitly
(e, g) => ({
    e1: e,
    g1: g
});
(e, g) => {
    return {
        e1: e,
        g1: g
    }
}

// ARROW FUNCTIONS PRACTICE
