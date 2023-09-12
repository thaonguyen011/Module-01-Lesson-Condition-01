let year = parseInt(prompt("Enter year:"));
let isDivisibleBy4 = !(year % 4);
let isDivisibleBy100 = !(year % 100);
let isDivisibleBy400 = !(year % 400);
let isLeap;

if (isDivisibleBy4) {
    if (isDivisibleBy100) {
        if (isDivisibleBy400) {
            isLeap = true;
        } else {
            isLeap = false;
        }
    } else { 
        isLeap = true;
    }
} else {
    isLeap = false;
}

if (isLeap) {
    alert(year + " is leap year.");
} else {
    alert(year + " is not leap year.");
}

