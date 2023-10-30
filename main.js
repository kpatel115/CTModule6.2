// CT MOD 6 Day 2 JS
// Control flow continued

// switch case
let day = new Date().getDay;
console.log(day)

let literal_day = new Date().toString();
console.log(literal_day)

// Swtich case Statement Syntax
switch(day){
    case 0:
        console.log('Go to church');
        break;
    case 1:
        console.log("Write code... its a monday");
        break;
    case 2:
        console.log("Write more code... its a tuesday")
        break;
    case 3:
        console.log("tis a wednesday my dude")
        break
    case 4:
        console.log("thursday for the thirsty ")
        break
    case 5:
        console.log("Friday so its time eat fries")
        break;
    case 6:
        console.log("go to a place called filoneks on a satr")
        break;
    default:
        console.log("shiver her timbers")
    }   

// Objects in JavaScript

let person = {
    name: "Squillium",
    age: "34",
    fav_color: "Navy"
}
// calling a method or variable of an object
// bracket notation
console.log(person['age'])
// dot notation
console.log(person.age)


//complex js Object

let person2 = {
    name: 'maximillion',
    age: 20,
    languages: ['JavaScript', 'MERN', 'C#', 'python', 'React'],
    fav_color: 'Purple',
    food: [ // dictionary in a list 
        {
            italian: 'Pasta',
            korean: 'Bulgogi',
            indian: 'chicken lolipops',
            american: 'ribeye steak with garlic butter herbs and shrooms and shlots'
        },
        {
            dessert: 'tiramisu',
            meat: 'Steak or Scallops',
            soup: 'yakisoba',
            vegetable: 'carrots',
            fruit: ['kiwi', 'berry']
        }
    ]
}
console.log(person2.languages[0])

// JS Object prototype
console.log(Object.keys(person2))
console.log(Object.values(person2))

// Sad path of looping through objects in JS
for (let i = 0; i< person2.length; i++){
    console.log(person2[i])
}

//Happy path of looping through objects in JS
for(let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
}

// list values from the person2 Object that are arrays
for(let i = 0; i < Object.keys(person2).length; i++){
    if (Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    }
}

// Create our own object prototypes - using ES5 method syntax

class Car {
    constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    // method inside JS Prototype
    this.printInfo = function(wheels = 0, color){
        this.wheels = wheels;
        this.color = color;
        console.log(`this is a ${this.year}, ${this.make}, ${this.model} and has ${this.wheels} wheels and the color is ${this.color}`);
        return 'Returned Value'
    }
    }
}

// Creating an instance of a prototype
let real_car = new Car('Mercedes', 'C300', 2020)

// call the prototype method
console.log(real_car.printInfo(4, 'Midnight Darkness'))

class Human{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    printInto(){
        return `Name: ${this.name}\n Age: ${this.age}\n Gender: ${this.gender}\n`
    }
}

let wilma = new Human('Wilma', 22, 'Female')
console.log(wilma.printInto())

class Baby extends Human{
    constructor(name, age, gender, walking){
    super(name, age, gender)
    this.walking = walking
    }
    isWalking() {
        if(this.walking == true){
            return 'Baby is Walking'
        } else {
            return 'Baby is not walking sorry'
        }
    }
}
let barney = new Baby('Barney', 0, 'Male', true)
console.log(barney)

// JS 6.3
// wierd ajvawcript hacks list plus ditionary and etc

// Closures 
var out_num = 5;
var addNums = function () {
    var inNum = 6;
    return out_num + inNum;
};
console.dir(addNums())
let newAdd = function(outer_var){

    let innerAdd = function(inner_var){
        return outer_var + inner_var
    }
    return innerAdd;
}

let addFive = new newAdd(5)
let addSixz = new newAdd(6)

console.log(addFive(5))

console.dir(addFive)


let count_up = (function() {
    let counter = 0;
    console.log('Hit');
    return function () {
        return counter++
    }
}) ()
console.log(count_up())
console.log(count_up())
console.log(count_up()) 

let addNames = ( function () {
    let names = [];
    console.log("adding names");
    return function (name) {
        names.push(name)
        console.log(names);
    }
})
console.log(addNames('Karan'))


// JS 6.2 Promises and async

// Javascript callback
// function doHomework(subject, callback){
//     alert(`starting my ${subject} homework`);
//     callback()
// }
// doHomework('JavaScript', function() {
//     console.log('DOne with hoemwork');
// });

// Promises
const isEvenNumber = (num) => {
    return new Promise( (resolve, reject) => {
        if( num % 2 ==0) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}

// Using the Promise
isEvenNumber(10)
// happy path - resolve
.then ((result) => {
    console.log(`Even numer ${result}`)
})
// sad path - reject
.catch ((error) => {
    console.log(`odd number ${error}`)
})

function increase_salary(base, increase){
    const new_salary = base + increase;
    console.log(`new salary: ${new_salary}`);
    return new_salary
}
function slow_addition(n1, n2){
    return new Promise ( (resolve) => {
        setTimeout( () => resolve(n1 + n2), 2000)
    })
}
function increase_slow_salary(base, increase) {
    const new_salary = slow_addtion(base, increase);
    console.log(`New Salary: ${new_salary}`);
    return new_salary
}

async function async_increase_salary(base, increase) {
    const new_salary = slow_addition(base, increase);
    console.log(`The new salary is ${new_salary}`);
    return new_salary
}

async_increase_salary(50000, 5000)

 