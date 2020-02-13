// my age;
let myAge = 26;

// early years for a dog;
let earlyYears = 2;
earlyYears = 2 * 10.5;
if(myAge == 1) {
  earlyYears = 1 * 10.5;
}

// my age - early years;
let laterYears = myAge - 2;
// my age - early years * 4;
laterYears *= 4;
if(myAge <= 2) {
  laterYears = 0;
}

// conversion of my age to dog years;
let myAgeInDogYears = earlyYears + laterYears;

// my name in lowercase;
let myName = 'Shane';
myName = myName.toLowerCase();


// create a sentence with my age name and its conversion to my dog age;
document.write(`My name is ${myName}. I am ${myAge} years old in human years wich is ${myAgeInDogYears} years old in dog years.`);