// OBJECTS

const myCity = {
    x: 10
}
myCity.popular = true
console.log(myCity);
myCity.name = 'Nigeria'
myCity.number = 200000000
console.log(myCity);


const myobject = {
    key1: 100,
    key2: 'Name',
    key5: NaN,
    key7: true,
    key10: null,
    key9: 'abc'
}
console.log(Object.keys(myobject).length);
for (key in myobject) {
    if (key === 'key1' || key === 'key5') {
        console.log(myobject[key]);
    } 
}

const object1 = {
    a: 1,
    b: 2,
    c: 3,
};
console.log(Object.getOwnPropertyNames(object1));

const thisObject = {
    name: 'Alice',
    age: 28,
    greeting: function() {
        return this
    }
}
console.log(thisObject.greeting());