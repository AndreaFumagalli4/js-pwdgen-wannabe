// Ask user first name

const firstName = prompt ('What\' your first name?');

console.log (firstName);

// Ask user second name

const secondName = prompt ('What\' your second name?');

console.log (secondName);

// Ask user favorite color

const favoriteColor = prompt ('What\' your favorite color?');

console.log (favoriteColor);

// Ask user age 

const ageNow = parseInt ( prompt ('How old are you?') );

const addAge = 10;

const realAge = ageNow + addAge;

console.log (realAge);

// Write HTML questions result

document.getElementById ('output').innerHTML = firstName + secondName + favoriteColor + realAge;
