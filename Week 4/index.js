/*
FOR

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";

for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}

for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}

document.getElementById("demo1").innerHTML = text;
*/


/*
FOR IN
const person = {name:"John", name:"Doe", age:25};

let txt = "";

for (let x in person) {
    txt += person[x] + " ";
}

const numbers = [45, 4, 9, 16, 25];

let txt = "";

for (let x in numbers) {
    txt += numbers[x] + "<br>";
}

document.getElementById("demo1").innerHTML = txt;
*/


/*
MAP

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

document.getElementById("demo1").innerHTML = fruits.get("apples");

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

for (let vegetable of recipeMap.keys()) {
    document.getElementById("demo2").innerHTML = vegetable;
}

for (let amount of recipeMap.values()) {
    document.getElementById("demo3").innerHTML = amount;
}

for (let entry of recipeMap) {
    document.getElementById("demo4").innerHTML = entry;
}

recipeMap.forEach( (value, key, map) => {
    document.getElementById("demo5").innerHTML = `${key}: ${value}`;
});

let map = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);

document.getElementById("demo6").innerHTML = map.get('1');

let obj = {
    name: "John",
    age: 30
};

let map1 = new Map(Object.entries(obj));

document.getElementById("demo7").innerHTML = map1.get('name');
*/


/*
SET

let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

document.getElementById("demo1").innerHTML = set.size;

for (let user of set) {
    document.getElementById("demo2").innerHTML = user.name;
}
*/


/*
FILTER

const ages = [32, 33, 16, 40];

const checkAdult = (age) => {
    return age >= 18;

}

const result = ages.filter(checkAdult);

const check = checkAdult(20);

if (check) {
    document.getElementById("demo1").innerHTML = "Usia Dewasa";
} else {
    document.getElementById("demo2").innerHTML = "Usia Anak-anak dan Remaja";
}

let employees = [
    { name: "Tony Stark", department: "IT" },
    { name: "Peter Parker", department: "Pizza Delivery" },
    { name: "Bruce Wayne", department: "IT" },
    { name: "Clark Kent", department: "Editing" },
];

const Component = (employee) => {
    return `<div>Name : ${employee.name}</div>
<div>Department : ${employee.department}</div>`;
};

const itEmployees = employees.filter((employee) => employee.department == "IT");

document.getElementById("demo3").innerHTML = itEmployees.map((employee) => Component(employee)).join("");
*/


/*
FIND

const ages = [3, 10, 18, 20];

const checkAge = (age) => {
    return age > 18;
}

const myFunction = () => {
    document.getElementById("demo1").innerHTML = ages.find(checkAge);
}

let employees = [
    { name: "Tony Stark", department: "IT" },
    { name: "Peter Parker", department: "Pizza Delivery" },
    { name: "Bruce Wayne", department: "IT" },
    { name: "Clark Kent", department: "Editing" },
];

const Component = (employee) => {
    return `<div>Name : ${employee.name}</div>
<div>Department : ${employee.department}</div>`;
};

const itEmployee = employees.find((employee) => employee.department == "IT");

document.getElementById("demo2").innerHTML = Component(itEmployee);
*/


// SORT ARRAY
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
document.getElementById("demo1").innerHTML = fruits;

fruits.sort((a, b) => {return b - a});
document.getElementById("demo2").innerHTML = fruits;

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.sort();
document.getElementById("demo3").innerHTML = fruits1;

fruits1.reverse();
document.getElementById("demo4").innerHTML = fruits1;

const points = [40, 100, 1, 5, 25, 10];

points.sort(function (a, b) {
    return a - b;
});
document.getElementById("demo5").innerHTML = points;

points.sort(function (a, b) {
    return b - a;
});
document.getElementById("demo6").innerHTML = points;