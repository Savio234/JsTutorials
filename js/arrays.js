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

const citiesInfo = (city, index) => `${city} is located at the index ${index} of myCities array`
myCities.forEach((city, index) => 
    console.log(citiesInfo(city, index))
);

// .filter()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const results = words.filter(word => word.length < 6);
console.log(results);

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