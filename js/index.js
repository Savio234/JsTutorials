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


function isodd(element, index, array) {
    return element % 2 == 1;
}

function getOddNum() {
    var arr = [56, 91, 18, 88, 12];
    var value = arr.every(isodd);
    return document.write(value);
}
console.log(getOddNum());


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


function myfunction3(a, b, c) {
    let sum = a + b + c

    for (let key in this) {
        if (typeof this[key] === 'number') {
            sum += this[key]
        }
    }

    return sum
}