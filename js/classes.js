// class consists of methods and these methods are listed one by one without commas

class MyClass {}
const firstInstance = new MyClass()
console.log(firstInstance);
console.log(
    firstInstance.__proto__ === MyClass.prototype,
    MyClass.prototype.constructor === MyClass,
    MyClass.prototype.__proto__ === Object.prototype
);
class FirstClass {
    constructor(props) {
        this.title = props.title,
        this.qty = props.qty
    }
    info() {
        return `Quantity is ${this.qty}`
    }
}
const props = {
    title: 'Test title',
    qty: 5
}

const newInstance  = new FirstClass(props)
console.log(newInstance);