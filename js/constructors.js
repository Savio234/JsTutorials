// Start constructor function with caps
function CivilPlane() {
    return (CivilPlane.prototype)
}
console.log(CivilPlane());
console.log(
    'Fn constructor is === fucntion', CivilPlane.prototype.constructor === CivilPlane,
    'Object chain', CivilPlane.prototype.__proto__ === Object.prototype,
    'End of chain', CivilPlane.prototype.__proto__.__proto__ === null
);

const SecondCivilPlane = function() {
    return SecondCivilPlane.prototype
}
console.log(SecondCivilPlane());
// Anonymous function and normal function gives the same result

function BusinessPlane(props) {
    console.log('this', this, 'this.__proto__', this.__proto__);
    this.wingSpan = props.wingSpan;
    console.log(this);
    // this.seatsInfo = function() {
    //     console.log(`Number of seats in the plane is ${this.numberOfSeats}`);
    // } // Don't do this method
    return (this.wingSpan = props.wingSpan, this.numberOfSeats = props.numberOfSeats, this.maxDistance = props.maxDistance);
}

BusinessPlane.prototype.seatsInfo = function() {
    console.log(this); 
    // anon arrow function does not have 'this', so window object is logged to the console
    return (`Number of seats in the plane is ${this.numberOfSeats}`);
} // Do this method
BusinessPlane.prototype.modifySeatsNumber = function(newSeatsQty) {
    return `Number of seats in the plane is ${this.numberOfSeats = newSeatsQty}`
}

const propsForSmallPlane = {
    numberOfSeats: 4,
    wingSpan: 400,
    maxDistance: '800km'
}
const propsForLargePlane = {
    numberOfSeats: 250,
    wingSpan: 1400
}
const smallPlane = new BusinessPlane(propsForSmallPlane)
const largePlane = new BusinessPlane(propsForLargePlane)

console.log('smallPlane', smallPlane, 'LargePlane', largePlane);
console.log(smallPlane.__proto__ === BusinessPlane.prototype);
console.log('Original', smallPlane.seatsInfo());
console.log('Modified', smallPlane.modifySeatsNumber(10));
console.log('Original', smallPlane.seatsInfo());
// Removing the new keyword just calls the function and will throw an error if there's no return statement
// in the function. With the new keyword, the function constructor is called and each time 
// a brand new object is created i.e new instance of the object because also the 
// function constructor === the function. So basically:
// 1.) Fucntion constructor is called
// 2.) New Object is created and 'this' is assigned to it
// 3.) __proto__ is added
// 4.) New props are added (optional)
// 5.) Object is then returned by the constructor function call

2.
// OBJECT.CREATE()
const Parent = {
    type: 'Parent',
    typeInfo() {
        return `Hello from ${this.type}`
    },
    modifyType(newType) {
        return this.type = newType
    }
}
console.log(
    'Parent', Parent,
    'ParentType', Parent.type, // Parent
    'ParentTypeInfo', Parent.typeInfo(), // Hello from Parent
'ParentPrototype', Parent.prototype // undefined cause it was created using just regular object literal
);

const child = Object.create(Parent)
console.log(child, child.__proto__);
child.type = "Child"
console.log(child.typeInfo());
console.log(child.modifyType('Dominic'), child, child.typeInfo());