const navItems = document.querySelectorAll('.nav-link');
console.log(navItems);
const navItemsLength = navItems.length
for (let i = 0; i < navItemsLength; i++) {
    const navItem = navItems[i]
    console.log(navItem, navItem.outerText, navItem.outerHTML);
    navItem.onclick = function() {
        for (let j = 0; j < navItemsLength; j++) {
            navItems[j].classList.remove('active')
        }
        navItem.classList.add('active')
        console.log(navItem.innerHTML);
    }
}

function mult(a, b) {
    result = a * b
    return result
}
console.log(mult(2, 5));

// navItems.forEach(navItem => {
//     navItem.addEventListener('click', function() {
//         if (navItem.classList.contains('active')) {
//             navItem.classList.remove('active')
//         } else {
//             navItem.classList.add('active')
//         }
//     })
// })




let d = 9
console.log(++d); // 10
console.log(d++); // 10
console.log(d); // 11




// EXPRESSION && STATEMENT IN JAVASCRIPT

// Expression in Javascript returns a value. 
// Expression with side effects are expressions that return a value and also perform an action

// /* STATEMENTS */
// Statements produces or performs an action



// Using the spread notation
function namegetam(...sums) {
    console.log(sums);
    // return sums.reduce((a, b) => a + b)
    return sums
}
console.log(namegetam(3, 4, 5, 6, 7, 8, 9, 10))

let numbers = [1, 2, 3, 42, 3, 2, 4, -1];

let allPassed = numbers.every(function(element){
	return element > 0;
});
console.log(allPassed);

function isodd(element, index, array) {
    return element % 2 == 1;
}

function getOddNum() {
    var arr = [56, 91, 18, 88, 12];
    var value = arr.every(isodd);
    return document.write(value);
}
console.log(getOddNum());

const numbersArray = [21,12,17,7,2];
const sortedList = numbersArray.sort((a, b) => b - a)
console.log(sortedList);
console.log(numbersArray.some((person)=> person > 18))


const thisObject = {
    name: 'Alice',
    age: 28,
    greeting: function() {
        return this
    }
}
console.log(thisObject.greeting());

console.log(numbersArray[3]);

function setBgRed() {
    document.body.style.backgroundColor = 'red'
}
function restoreBg() {
    document.body.style.backgroundColor = 'white'
}

function maxNumber(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}
console.log(maxNumber(2, 60));

// Using the 'CALL', 'APPLY' and 'BIND' method for function
const thisObject2 = {
    name: 'Alice Wonder',
    age: 38,
    city: 'New York',
    info() {
        return `${this.name} is ${this.age} years old and lives in ${this.city}`
    }
}
const thisObject3 = {
    name: 'Bob Ziroll',
    age: 34,
    city: 'Paris',
}
function myfunction1() {
    return this
}
console.log(myfunction1());
console.log(myfunction1.call(thisObject2));

function myfunction2(a, b) {
    console.log(a + b, this);
}
console.log(myfunction2(10, 3));
console.log(myfunction2.call(thisObject, 10, 30));
console.log(myfunction2.apply(thisObject, [10, 300]));

console.log(thisObject2.info());
console.log(thisObject2.info.call(thisObject3));

function myfunction3(a, b, c) {
    let sum = a + b + c

    for (let key in this) {
        if (typeof this[key] === 'number') {
            sum += this[key]
        }
    }

    return sum
}
console.log(myfunction3.call(thisObject, 10, 30, 40));
console.log(myfunction3.apply(thisObject, [10, 300, 4]));