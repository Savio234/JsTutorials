const testArr = []
testArr.push(1, 'abc', 20, {name: 'array', type: 'primitive type', year: 2015})
console.log(
    testArr, 
    'First chain', testArr.__proto__, 
    'Second chain', testArr.__proto__.__proto__, 
    'End of chain', testArr.__proto__.__proto__.__proto__
);