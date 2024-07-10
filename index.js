console.log("Hello");

var firstName = "Byron";
let last = " de";
const fullN = firstName + last;

console.log(fullN);

let greet = "hello I'm " + firstName;

let nil;

console.log("typeof 'hello'", typeof "hello");
console.log("typeof 31", typeof 31);
console.log("typeof BigInt", typeof bigInt);
console.log("typeof symbol(key)", typeof Symbol("key"));
console.log("typeof true", typeof true);
console.log("typeof nil", typeof nil);

console.log("===========");

console.log(greet);

console.log(greet[1]);
console.log(greet.includes("hel"));
console.log(greet.indexOf("o"));
console.log(greet.split(" "));

//object literals
const person = {
    fname: "Byron",
    lname: "de",
    age: 30,
    address: {
        number: 5,
        strt: "Maple Ave",
        state: "Illinois"
    },
    getFormattedAddress: function () {
        return this.address.number + " " 
        + this.address.strt + " " 
        + this.address.state;
    }

}

console.log(person.address.number);
console.log(person.getFormattedAddress());

console.log("===========");


let num1 = [1,2,3,4,5];
console.log(num1);

let fruits = ["apple", "pear", "banana"];
fruits.unshift("strawberry");
console.log(fruits);
const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);

const firstF = fruits.shift();
console.log(firstF);

const fliteredFruits = fruits.filter((fruit) => {
    return !(fruit.includes("straw"));
});

const mapFruits = fruits.map((fruit, index) => {
    return {
        name: fruit,
        quantity: index + 1,
        price: "$10",
        id: index
    };
});

console.log(mapFruits);
const sorted = fruits.sort((a,b) => {
    if (a>b) {
        return 1;
    }
    else {
        return 0;
    }
});
console.log(sorted);

// for(let i = 0)



function User(firstName, last, bio, email) {
    this.firstName = firstName;
    this.lastName = last;
    this.bio = bio;
    this.email = email;
}

const Person = class{
    constructor(firstName, last, bio, email) {
        this.firstName = firstName;
        this.lastName = last;
        this.bio = bio;
        this.email = email;
    }
}

const personClasss = new Person (
    "byron",
    "de",
    "rfoeinw",
    "@gmail"
)
