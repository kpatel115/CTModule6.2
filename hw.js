//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let foods = function(obj){
    let keys = Object.keys(obj)
    let vals = Object.values(obj)
    console.log(keys)
    console.log(vals)
}
foods(person3)
//=======Exercise #2=========//

/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;

        this.printInfo = () => {
            console.log(`${this.name}, ${this.age}`)
            return 'Nice Info!'
        };

        this.addAge = (message) => {
            this.message = message;
            this.age += 1
            console.log(`well ${this.name} it looks like your growing up to be a man... Nice being ${this.age} and ${this.message}` )
            return 'maBoy'
        };
    }
}
let timmy = new Person('Timmy', 2)
console.log(timmy.printInfo())
console.log(timmy.addAge('hot dog'))
console.log(timmy.addAge('hot dog'))
console.log(timmy.addAge('hot dog'))
console.log(timmy.printInfo())



// }
// const timmy = {
//     name: 'Timmy',
//     age: 2,
//     // Use an arrow to create the printInfo method
//     printInfo: () => {
//         console.log(`${timmy.name}, ${timmy.age}`)
//     },
//     // Create another arrow function for the addAge method that takes a single parameter
//     // Adding to the age 
//     happyBirthday: (age) => {
//         timmy.age += 1
//     }
// }

// console.log(timmy.name)
// console.log(timmy.age)
// console.log(timmy.printInfo())
// console.log(timmy.happyBirthday(timmy.age))
// console.log(timmy.happyBirthday(timmy.age))
// console.log(timmy.happyBirthday(timmy.age))
// console.log(timmy.age)



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const biggerDenTen = (str) => {
    return new Promise( (resolve, reject) => {
        if (str.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

biggerDenTen('abracadabra')
.then((result) => {
    console.log('Big word ' + result)
})
.catch((error) => {
    console.log('small number ' + error)
})

// codewars question 1 - from python first then js

// VOWEL COUNT 

function getCount(word) {
    num_vowels=0
    for(let i = 0; i < word.length; i ++)
        if ( word[i].match(/[aeiou]/gi)){
            num_vowels += 1
          }
    return num_vowels
}

// Leap Years

function isLeapYear(year) {
    // TODO
    if (year % 4 == 0 && year % 100 != 0) {
      return true
    } else if ( year % 400 == 0) {
      return true 
    } else {
      return false
    }
  }