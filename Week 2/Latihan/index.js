import Person from "./Person.js";

const charles = Person("Charles", 30, true, "https://picsum.photos/seed/picsum/200");
const mary = Person("Mary", 23, false, "https://picsum.photos/200?grayscale");
const jane = Person("Jane", 20, false, "https://picsum.photos/200");

jane.addAge(15);
charles.setAge(80);

const charlesImg = document.querySelector("#charles img");
const charlesInfo = document.querySelector("#charles .info");
charlesImg.src = charles.avatar;
charlesInfo.innerHTML = `Full Name: ${charles.fullName}. Sex: ${charles.isMale ? "His" : "Her"} Age: ${charles.age} years`;

const maryImg = document.querySelector("#mary img");
const maryInfo = document.querySelector("#mary .info");
maryImg.src = mary.avatar;
maryInfo.innerHTML = `Full Name: ${mary.fullName}. Sex: ${mary.isMale ? "His" : "Her"} Age: ${mary.age} years`;

const janeImg = document.querySelector("#jane img");
const janeInfo = document.querySelector("#jane .info");
janeImg.src = jane.avatar;
janeInfo.innerHTML = `Full Name: ${jane.fullName}. Sex: ${jane.isMale ? "His" : "Her"} Age: ${jane.age} years`;

const charlesJob = { job: "Programmer" };

const charlesJobInfo = {
    ...charles,
    ...charlesJob
};

const { fullName, job } = charlesJobInfo;

const charlesJobInfoSelector = document.querySelector("#charles .jobInfo");
charlesJobInfoSelector.innerHTML = `${fullName} is a ${job}`;
