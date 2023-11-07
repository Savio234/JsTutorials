// class consists of methods and these methods are listed one by one without commas

class MyClass {}
const firstInstance = new MyClass()
console.log(firstInstance);
console.log(
    firstInstance.__proto__ === MyClass.prototype,
    MyClass.prototype.constructor === MyClass,
    MyClass.prototype.__proto__ === Object.prototype
);

class ComputerMouse {
    constructor(props) {
        this.type = props.type !== undefined ? props.type : 'Not Specified',
        this.color = props.color !== undefined ? props.color : 'Not Specified',
        this.interface = props.interface !== undefined ? props.interface : 'Not Specified'
    }

    mouseInfo() {
        return `Type of mouse is ${this.type} and color is ${this.color}`
    }

    changeMouseType(newMouseType) {
        this.type = newMouseType
    }
}

const propsForWirelessMouse = {
    type: 'Wireless',
    color: 'White',
    interface: 'Bluetooth'
}
const propsForGenericMouse = {
    type: 'Generic'
}
const wirelessMouse = new ComputerMouse(propsForWirelessMouse)
const genericMouse = new ComputerMouse(propsForGenericMouse)

console.log(wirelessMouse, wirelessMouse.mouseInfo(), genericMouse, genericMouse.mouseInfo());
wirelessMouse.changeMouseType('USB')
console.log(wirelessMouse);

class ComputerAccessories {
    constructor(props) {
        this.compatibility = props.compatibility || ['Mac', 'HP', 'Dell', 'Lenovo']
    }

    compatibilityInfo() {
        this.compatibility.forEach(el => {
            return (console.log(`Accessory is compatible with ${el}`))
        }
        );
    }
}
class ComputerPrinter extends ComputerAccessories {
    constructor(props) {
        super(props);
        this.type = props.type
    }

    printerInfo() {
        return `Type of printer is ${this.type}`
    }
}
const myPrinter = new ComputerPrinter({
    compatibility: ['Mac', 'HP'],
    type: 'Optical'
})
console.log(myPrinter, ComputerPrinter.__proto__, ComputerAccessories.__proto__);
console.log(myPrinter.compatibilityInfo(), myPrinter.printerInfo());
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