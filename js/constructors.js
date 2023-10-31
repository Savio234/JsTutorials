// Start constructor function with caps
function CivilPlane() {
    console.log(CivilPlane.prototype.constructor === CivilPlane);
    console.log(CivilPlane.prototype.__proto__ === Object.prototype);
    console.log(CivilPlane.prototype.__proto__.__proto__ === null);
    return CivilPlane.prototype
}
console.log(CivilPlane());

const MilitaryPlane = function() {
    return MilitaryPlane.prototype
}
console.log(MilitaryPlane());
// Anonymous function and normal function gives the same result

function BusinessPlane(props) {
    console.log(this.wingSpan = props.wingSpan);
    return (this.numberOfSeats = props.numberOfSeats, this.wingSpan = props.wingSpan);
}

const propsForSmallPlane = {
    numberOfSeats: 4,
    wingSpan: 400,
    maxDistance: '800km'
}

const smallPlane = new BusinessPlane(propsForSmallPlane) 
// Removing the new keyword just calls the function and will throw an error if there's no return statement
// in the function. With the new keyword, the function constructor is called and each time 
// a brand new object is created i.e new instance of the object because also the 
// function constructor === the function. So basically:
// 1.) Fucntion constructor is called
// 2.) New Object is created and 'this' is assigned to it
// 3.) __proto__ is added
// 4.) New props are added (optional)
// 5.) Object is then returned by the constructor function call

console.log(smallPlane);
console.log(smallPlane.__proto__ === BusinessPlane.prototype);