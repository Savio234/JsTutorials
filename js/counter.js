const add = document.querySelector('.incrementBtn')
const minus = document.querySelector('.decrementBtn')
const displayValue = document.querySelector('.counterValue')

let value = 0
add.addEventListener('click', incrementValue => {
    value += 1
    displayValue.textContent = value
})

minus.addEventListener('click', decrementValue => {
    value -= 1
    displayValue.textContent = value
})
console.log(add.innerText, minus);
console.dir(add)