// TEMPLATE LITERALS

const name = 'Sophia'
const age = 20
const templateLiteral = (arrayOfStrings, name, age, sum) => {
    console.log(arrayOfStrings, name, age, sum);
}
console.log(templateLiteral`${name} is ${age} years old and sum is ${2 + 2}`);

const num = 10;
const roots = Math.sqrt(num)
const anotherLiteral = num => {
    console.log(`Number is ${num}. The  number is ${num >= 10 ? `${num === 10 ? `equal to` : `greater than`}` : `less than`} 10. Its squareroot is ${roots}`)
}
console.log(anotherLiteral(num));



// OBJECT LITEALS

let myName = 'Mike'
let mikeAge = 25

const mikeObject = {
    myName,
    mikeAge,
    info: function() {
        return ('Mike is a bitch ass nigaa')
    },
    anotherInfo() {
        return (`${myName} is my name. I'm ${mikeAge} years old`);
    },
    [mikeAge]: true,
    prop3: function() {
        return (this.mikeAge);
    }
}
console.log(mikeObject);
console.log(`${mikeObject.info()}, 
and also ${mikeObject.anotherInfo()}. 
His object is of length ${Object.keys(mikeObject).length}. 
Another prop is ${mikeObject.prop3()}
`);
const anothObj = (make, year) => {
    return {
        myName,
        purchase(price) {
            return `${make} cars made in ${year} costs about $${price}`
        }
    }
}
const newCar = anothObj('Tesla', 2022)
console.log(newCar.purchase(55000));

const photoGallery = (title, dimensions, date) => {
    return {
        title,
        dimensions,
        date,
        [dimensions]: true,
        info() {
            return `Dimensions of the foto ${title} are ${dimensions}`
        },
        publishInfo(){
            return `Foto ${title} was published 
            ${Math.floor((new Date().getTime() - date.getTime()) / 1000)}  seconds ago`
        },
    }
}
const photo1 = photoGallery (
    "My dog",
    "1920 x 1080",
    new Date()
);
console.log(photo1);
console.log(photo1.info());
console.log(photo1.publishInfo());
const testDimension1 = '1920 x 1028'
const testDimension2 = '1080 x 720'

setTimeout(() => photo1.publishInfo(), 2000)

console.log('Test', photo1[testDimension1], photo1[testDimension2]);
