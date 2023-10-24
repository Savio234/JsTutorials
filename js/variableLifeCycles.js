// LIFE CYCLES
function fn() {
    function fn2() {
        a = 10;
        console.log(a);
    }
    fn2()
    console.log(a);
}
fn()
console.log(a); 
// Variable 'a' is accessible in all scopes because since 'a' is not declared as at the time of assignment, 
// 'a' is automatically declared in the global scope and 
//this is possible because string literal "use strict" is not used