"use strict";
// Basic types
let id = 15;
let secondId = 'Dominic';
const fullname = secondId + ' Savio';
const isPublished = false;
const arrayOfIds = [2, 4, 6, 8, 10, 12];
console.log(arrayOfIds);
arrayOfIds.push('true', { a: 'name', b: 20 });
console.log(arrayOfIds);
console.log('ID:', id);
console.log('NAME:', secondId);
console.log('FullName:', fullname);
// TUPLE (Used to list out types in a single array)
const tuple = [10, 'abc', true, 'gh'];
// TUPLEARRAY (Used for an array. Could be Array of arrays or Array of objects etc)
const employee = [
    [1, 'Brady', 'NFL'],
    [2, 'LeBron', 'NBA'],
    [3, 'Kobe', 'NBA']
];
// UNION (Different types for one variable)
const unionId = 45;
// ENUM (Enumerated type)
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Down);
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "up";
    Direction1["Down"] = "down";
    Direction1["Right"] = "right";
    Direction1["Left"] = "left";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Right);
const user = [
    {
        id: 1,
        name: 'Jordan',
        classStatus: true
    },
    {
        id: 2,
        name: 'LBJ',
        classStatus: true
    },
    {
        id: 3,
        name: 'K. Brown',
        classStatus: false
    }
];
// TYPE ASSERTION
const cId = 1;
// const customerId = <number>cId
const customerId = cId;
// Both ways work
// FUNCTIONS
function addNum(x, y) {
    return x + y;
}
console.log(addNum(50, 67));
// VOID
function logs(message) {
    return message;
}
console.log(logs('90 is a number'));
const users = [
    {
        id: 1,
        name: 'Karl Malone'
    },
    {
        id: 2,
        name: 'John Stockton'
    }
];
const singleUser = {
    id: 22,
    name: 'Stallone Sylvester'
};
console.log('Multiple users', users, 'Single user', singleUser);
