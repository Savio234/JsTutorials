// ARRAYS
const carList = [
    {
        carBrand: "Elemento",
        price: 20000
    },
    {
        carBrand: "Bugatti",
        price: 35000
    },
    {
        carBrand: "Tesla",
        price: 25000
    }
];
console.log(carList);


// Add new object
const newCar = {
    carBrand: "Audi",
    price: 30000
};
carList.push(newCar);
console.log(carList)


// ARRAY HELPER METHODS

// .forEach()
const myCities = ['London', 'New York', 'Singapore', 'Rome', 'Paris']
const mappedCities = myCities.map(mappedCity => {
    return `<div>${mappedCity}</div>`
})
console.log(mappedCities);

const citiesInfo = (city, index) => `${city} is located at the index ${index} of myCities array`
myCities.forEach((city, index) => 
    console.log(citiesInfo(city, index))
);

// .filter()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const results = words.filter(word => word.length < 6);
console.log(results);
const singleWord = 'A big fucking spray'
const filteredWord = singleWord.replace(' fucking', '')
console.log(filteredWord);

// .includes()
const str = 'To be, or not to be, that is the question.' 
console.log(str.includes('To be'))        // true
console.log(str.includes('question'))     // true
console.log(str.includes('nonexistent'))  // false
console.log(str.includes('To be', 1))     // false
console.log(str.includes('TO BE'))        // false
console.log(str.includes(''))

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));

// .find()
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'cherries', quantity: 8},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5},
    {name: 'cherries', quantity: 15}
];
const result = inventory.find( ({ name }) => name === 'cherries' );
console.log(result);

// .sort()
const numArray = [2, 9, 22, 30, 'abc', true, false, {a: 10, b: true}]
numArray.sort((a, b) => a - b);
const numbersArray = [21,12,17,7,2];
const sortedList = numbersArray.sort((a, b) => b - a)
const reverseSortedList = numArray.sort((a, b) => b - a)
console.log(sortedList, reverseSortedList);

// .push()
const ages= [21,12,17,7,2];
ages.push(30, 'abc', true, 'undefined', {a: 20, b: 'Angie'})
console.log(ages);

// .pop()
const copyOfAgesArray= [21,12,17,7,2];
console.log(copyOfAgesArray.pop(), 'New Array', copyOfAgesArray);

// .some()
console.log(numbersArray.some((person)=> person > 18))

// .every()
const numbers = [1, 2, 3, 42, 3, 2, 4, -1];
const allPassed = numbers.every(function(element){
	return element > 0;
});
console.log(allPassed);

// .map()
const arrayToMap = [1, 5, 7, 4, 9]
let squaredNums = []
let squaredNums2 = []
let cubedNums = []
arrayToMap.map(elem => squaredNums.push(elem * elem))

arrayToMap.map(elem => squaredNums2.push(Math.pow(elem, 3)))
console.log('Array of squared numbers = ',squaredNums, 'Array of cubed numbers = ', squaredNums2);

// In a situation where the exponent isn't specified in the Math.pow() function, 
// the index of the number in that array serves as the exponent. E.g
cubedNums = arrayToMap.map(Math.pow)
console.log('Cubed Numbers', cubedNums);