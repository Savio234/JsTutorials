"use strict";
// Classes
class Person {
    constructor(id, name, field) {
        this.id = id;
        this.name = name;
        this.field = field;
        console.log(123);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const Dom = new Person(25, 'Dominic', 'Web development');
const Brady = new Person(44, 'Tom Brady', 'NFL');
console.log(Dom, Brady);
console.log(Dom.register(), Brady.register());
