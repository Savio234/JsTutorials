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

// Tuple
const tupleArray: [number, string, boolean, string] = [10, 'abc', true, 'gh']

// Union
