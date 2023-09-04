const demo = document.getElementById("demo");

const testLet = () => {
    let num = 100;
    {
        let num = 200;
    } return num;
}

document.getElementById("forlet").innerHTML = testLet();

const testVar = () => {
    var num = 100;
    {
        var num = 200;
    } return num ;
}

document.getElementById("forvar").innerHTML = testVar();

try {
    const PI = 3.141592653589793;
    PI = 3.14;
    document.getElementById("testphi").innerHTML = PI;
} catch (err) {
    document.getElementById("testphi").innerHTML = err;
}

// ES5
var car = {
    name: "Honda",
    products: ["jazz", "civic", "hrv"],
    showProduct: function () {
        this.products.map(
            function (product) {
                console.log(`${this.name} has launched ${product}`);
            }.bind(this)
        );
    },
};
car.showProduct();

// ES6
var car = {
    name: "Honda",
    products: ["jazz", "civic", "hrv"],
    showProduct: function () {
        this.products.map((product) => {
            console.log(`${this.name} has launched ${product}`);
        });
    },
};
car.showProduct();

const formatMessage = (name, id, avatar) => {
    return {
        name,
        id,
        avatar,
        timestamp: Date.now(),
        save () {
//save message
        }
    }
const message = formatMessage("Belajar Programming", 1, "https://i.pravatar.cc/300");
document.getElementById("shorthand").innerHTML = message.name;

let person = {
    firstName: 'John',
    lastName: 'Doe'
};
let { firstName, lastName: lname } = person;
document.getElementById("desc").innerHTML = `First name: ${firstName}, Last Name: ${lname}`;}