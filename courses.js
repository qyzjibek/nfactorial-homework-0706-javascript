// Data Types
let str = "ndf";
console.log(typeof str);
if(null == undefined) {
    console.log("Null = Undefined");
}

if(null !== undefined) {
    console.log("Null != Undefined because they are different type");
}

// Object
export function makeCourse(name, price, duration) {
    return {
        name: name,
        price: price,
        duration: duration,
        version: "1.0",
        rating: 5
    };
}

let nfStartCourse = makeCourse("NFactorial Start", 300000, "3 months");
nfStartCourse.startDate = "8 May";
delete nfStartCourse.startDate;
nfStartCourse["price"] = 1000000;
console.log(nfStartCourse) 

// Array
let enrolledCustomers = ["Beknar", "Murat"];
nfStartCourse.enrolled = enrolledCustomers
enrolledCustomers.push("Beknar");
enrolledCustomers.push("Mike");
let customersWithB = enrolledCustomers.filter((customer) => customer[0] == "B");
let customers = enrolledCustomers.map((customer) => `${customer} enrolled to NFactorial Start`);
let firstCustomers = enrolledCustomers.slice(2);

// Comparison
let iosCourse = makeCourse("NFactorial IOS Course", 700000, "2 months");
let selectedCourse = null;
let chosenCourse = selectedCourse ?? "NFactorial Start";
let buy = selectedCourse ? true : false;

// Loops
let allCourses = [nfStartCourse, iosCourse];
let indices = [];
for (i = 0; i < allCourses.length; i++) {
    indices.push(i);
}

while(indices.length > 0) {
    console.log(indices);
    indices.pop();
}

let i = window.prompt("Enter number of Days before Course: ");

do {
    alert(`${i} days are left`);
    i--;
} while(i > 0);

// Functions

// function decleration
function clapClap() {
    alert("clap clap, hi there. I am born");
}

nfStartCourse.greeting = clapClap;
nfStartCourse.greeting();

function descriptionOfCourse({name, price, duration, version}) {
  return `${name} ${version} is at price of ${price} for ${duration}`;
}

let description = descriptionOfCourse(nfStartCourse);

let getRating = (course) => `${course.rating}`;
console.log(getRating(nfStartCourse));

export {descriptionOfCourse as info, clapClap as hi};