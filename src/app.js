let query = prompt("What is your name?", "");
let res = "";

if (!query || query == "") {
    res = "User cancelled prompt. Please reload.";
} else {
    res = `Welcome to IT 461 ${query}`;
}

alert(res);
document.write(res);

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let today = new Date();

let fullDate =
    months[today.getMonth()] +
    " " +
    today.getDate() +
    ", " +
    today.getFullYear();

document.write(`<br/> Today's date is ${fullDate}`);

document.write(
    `<br/> This document was last modified at ${document.lastModified}`
);

const hour = today.getHours();

if (hour <= 12) {
    document.write(`<br/>Good morning`);
} else if (hour <= 16) {
    document.write(`<br/>Good afternoon`);
} else if (hour <= 0) {
    document.write(`<br/>Good night`);
} else {
    document.write(`<br/>Something went wrong`);
}
