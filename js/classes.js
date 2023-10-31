// class consists of methods and these methods are listed one by one without commas
// 
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