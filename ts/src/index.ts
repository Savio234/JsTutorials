// Basic types
let id: number = 15
let secondId: string = 'Dominic'
const fullname: string = secondId + ' Savio'
const isPublished: boolean = false

const arrayOfIds: any[] = [2, 4, 6, 8, 10, 12]
console.log(arrayOfIds);

arrayOfIds.push('true', {a: 'name', b: 20})
console.log(arrayOfIds);


console.log('ID:', id);
console.log('NAME:', secondId);
console.log('FullName:', fullname);

// TUPLE (Used to list out types in a single array)
const tuple: [number, string, boolean, string] = [10, 'abc', true, 'gh']

// TUPLEARRAY (Used for an array. Could be Array of arrays or Array of objects etc)
const employee: [number, string, string][] = [
    [1, 'Brady', 'NFL'],
    [2, 'LeBron', 'NBA'],
    [3, 'Kobe', 'NBA']
]

// UNION (Different types for one variable)
const unionId: string | number = 45

// ENUM (Enumerated type)
enum Direction {
    Up,
    Down,
    Left, 
    Right
}
console.log(Direction.Down);

enum Direction1 {
    Up = 'up',
    Down = 'down',
    Right = 'right',
    Left = 'left'
}
console.log(Direction1.Right);

type User = {
    id: number,
    name: string,
    readonly GOATStatus: boolean
}
const user: User[] = [
    {
        id: 1,
        name: 'Jordan',
        GOATStatus: true
    },
    {
        id: 2,
        name: 'LBJ',
        GOATStatus: true
    },
    {
        id: 3,
        name: 'K. Brown',
        GOATStatus: false
    }
]

// TYPE ASSERTION
const cId: any = 1
// const customerId = <number>cId
const customerId = cId as number
// Both ways work


// FUNCTIONS
function addNum(x: number, y: number) {
    return x + y
}
console.log(addNum(50, 67));

// VOID
function logs(message: string | number) {
    return message
}
console.log(logs('90 is a number'));

// INTERFACES (Can't be used with unions)
interface Users {
    id: number,
    name: string,
    age?: number
}

const multipleUsers: Users[] = [
    {
        id: 1,
        name: 'Karl Malone',
        age: 50
    },
    {
        id: 2,
        name: 'John Stockton'
    }
]

const singleUser: Users = {
    id: 22,
    name: 'Stallone Sylvester'
}
console.log('Multiple users', multipleUsers, 'Single user', singleUser);

interface MathFunc {
    (m: number,
    n: number): number
}

const product: MathFunc = (m, n) => m * n
const divide: MathFunc = (m, n) => m / n
const subtract: MathFunc = (m, n) => m - n
console.log(
    'Product', product(20, 3),
    'Division', Math.floor(divide(20, 3)),
    'Diff', subtract(20, 3)
);




