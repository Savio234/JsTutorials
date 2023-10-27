function babelTest(...a) {
    console.log(arguments);
    return a
}
console.log(babelTest(3, 7, 99));