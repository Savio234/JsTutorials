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
    classStatus: boolean
}
const user: User[] = [
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
    name: string
}

const users: Users[] = [
    {
        id: 1,
        name: 'Karl Malone'
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
console.log('Multiple users', users, 'Single user', singleUser);



