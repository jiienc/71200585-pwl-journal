/*
If Else

const getDay = () => {
    if (newDate().getDay() === 0) {
        return "Sunday";
    }
    if (newDate().getDay() === 1) {
        return "Monday";
    }
    if (newDate().getDay() === 2) {
        return "Tuesday";
    }
    if (newDate().getDay() === 3) {
        return "Wednesday";
    }
    if (newDate().getDay() === 4) {
        return "Thursday";
    }
    if (newDate().getDay() === 5) {
        return "Friday";
    }
    if (newDate().getDay() === 6) {
        return "Saturday";
    }
};

const today = getDay();
demo.innerHTML = `Today is ${today}`;
*/

/*
Ternary

const today = {
    day: 1,
    name: "Monday",
};

new Date().getDay() === today.day
    ? (demo.innerHTML = `Today is ${today.name}`)
    : (demo.innerHTML = `Today is not ${today.name}`);
const anotherDay = {
    day: 5,
    name: "Friday",
};

new Date().getDay() === today.day
    ? (demo.innerHTML = `Today is ${today.name}`)
    : new Date().getDay() === anotherDay.day
        ? (demo.innerHTML = `Today is ${today.anotherDay.day}`)
        : (demo.innerHTML = `Today is neither ${today.name} nor ${anotherDay.name}`);
*/

/*
Switch

const getDay = () => {
    switch (new Date().getDay()) {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
    }
};
const today = getDay();
demo.innerHTML = `Today is ${today}`;
*/

/*
Callbacks

const myNumbers = [4, 1, -20, -7, 5, 9, -6];

const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

document.getElementById("demo").innerHTML = posNumbers;

function removeNeg(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}
*/

/*
Promises

const myDisplayer = (some) => {
    document.getElementById("demo").innerHTML = some;
};

let myPromise = new Promise((myResolve, myReject) => {
    let x = 0;
// some code (try to change x to 5)
    if (x == 0) {
        myResolve("OK"); // mengirimkan flag OK melalui callback
    } else {
        myReject("Error"); // mengirimkan flag Error melalui callback
    }
});

myPromise.then(
    (value) => {
        myDisplayer(value); // menangkap hasil value untuk ditampilkan
    },
    (error) => {
        myDisplayer(error); // menangkap hasil error untuk ditampilkan
    }
);
*/

/*
Async

const myDisplayer = (some)=> {
    document.getElementById("demo").innerHTML = some;
}
const myFunction = async () => {return "Hello";}
myFunction().then(
    (value) => {
        myDisplayer(value);
    },
    (error) => {
        myDisplayer(error);
    }
);
*/

/*
Await

const myDisplay = async () => {
    const myPromise = new Promise((resolve) => {
        setTimeout(function () {
            resolve("I love You !!");
        }, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
};
*/

const listEl = document.createElement("ul");

const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const albums = await response.json();
    return albums;
};

const userList = getUsers().then((value) => {
    value.map((album) => {
        let titleText = "";
        let bodyText = "";
        const titleEl = document.createElement("li");
        const bodyEl = document.createElement("p");
        titleText += album.name;
        bodyText += album.email;
        titleEl.innerHTML = titleText;
        bodyEl.innerHTML = bodyText;
        titleEl.appendChild(bodyEl);
        listEl.appendChild(titleEl);
    });
    document.getElementById("demo").appendChild(listEl);
});