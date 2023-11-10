// Classes
class Person {
    id
    private name
    protected field

    constructor(id: number, name: string, field: string) {
        this.id = id
        this.name = name
        this.field = field
        console.log(123);
        
    }

    register() {
        return `${this.name} is now registered`
    }
}

const Dom = new Person(25, 'Dominic', 'Web development')
const Brady = new Person(44, 'Tom Brady', 'NFL')
console.log(Dom, Brady);
console.log(Dom.register(), Brady.register());


interface workProfile {
    age: number
    name: string
    job: string
    workplace: string
    description(): string
}
class Career implements workProfile {
    age
    name
    job
    workplace

    constructor(age: number, name: string, job: string, workplace: string) {
        this.age = age
        this.name = name
        this.job = job
        this.workplace = workplace
    }

    description(): string {
        return `${this.name} is ${this.age} years old and currently works at ${this.workplace} where he holds the position of ${this.job}`
    }
}

const MJ = new Career(60, 'Michael Jeffrey Jordan', 'Business Mogul', 'Nike')
const LBJ = new Career(39, 'LeBron Raymond James', 'Basketball player', 'NBA')
const Carlo = new Career(64, 'Carlo Ancelotti', 'Coach', 'RMA')

console.log(MJ, MJ.description());
console.log(LBJ, LBJ.description());
console.log(Carlo, Carlo.description());

console.log(Career);



