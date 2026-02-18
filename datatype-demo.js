let num1 = 250;
console.log(num1 * 5)

//Floating point representation
let num2 = 7.8;
console.log(num2);

//We can have numbers in base 10, 2, 8 and 16 which is the hexadecimal(0-9 &A-F)
let num3 = 0xff; 16
console.log(num3);

//We can also have exponetials
let num4 = 1.5e12;
console.log(num4);

//We can use underscores to put spaces between number instead of commas coz commas have a different meaning
let num5 = 1_000_000_000;
console.log(num5)

//They is also infinity and negative infinity
function checkout(x,y) {
    return x/y
}
let num6 = checkout(5, 0)
let num7 = checkout(-5, 0)
console.log(num6)
console.log(num7)

//We also have the maximum value that we can use in Javascript
console.log(Number.MAX_VALUE);
//If we multiply by 2, it take us to infinity
console.log(Number.MAX_VALUE * 2);

//BigInt
let num8 = 100505050505050505006060n;
console.log(num8)
//And if we want to add something to a bigInt, it must also be in the same format
console.log(num8 + 2n)



let cars = 5;
cars++;
console.log(cars); // 6

let input = "5";
console.log(input + 2); 
// Output: "52" (string concatenation)

let input1 = "5";
let numberValue = Number(input);
console.log(numberValue + 2); // 7

Number("10")   // 10
Number("3.5")  // 3.5
Number("abc")  // NaN
Number("")     // 0

let result = "abc" * 2;
console.log(result); // NaN

// Common math methods, ie Math.round, floor, ceiling, random, .max, .min, pow
console.log(Math.round(3.6)); // 4
console.log(Math.round(3.4)); // 3
console.log(Math.floor(3.9)) // 3
console.log(Math.ceil(3.1)) // 4
console.log(Math.random())

let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber)
console.log(Math.max(3, 7, 2)) // 7
console.log(Math.min(3, 7, 2)) // 2
console.log(Math.pow(2, 3)) // 8
//"5" + 2 = "52"
// 5 + 2 = 7

let hoursParked = "4";
let rate = 2000;
let hours = Number(hoursParked);
let totalFee = hours * rate;
console.log("Total fee is:", totalFee);

function car() {

}
//This is a constructor function
function Car(make, model, year, arrivalTime, isLoggedIn) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.arrivalTime = new Date();
    this.isLoggedIn = true;
    this.drive = function() {
        console.log(`You drive a ${this.model}`)
    }
}
let hamsCar = new Car("Range-rover", "Discovery", 2025)
let alphasCar = new Car("Toyota", "Japan", 2025)
let andrewCar = new Car("Mini-cooper", "Britain", 2025)
console.log(hamsCar.make)
hamsCar.drive()
console.log(hamsCar.arrivalTime)
