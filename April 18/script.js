//-------------VERY EASY
/*
const num1 = 6;
const num2 = 5;
console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`);
*/


//---------------EASY
/*
const name1 = 'Bobby';
const name2 = 'Jeff';
console.log(`The name ${name1} is longer than ${name2} by 1 character(s).`);
*/

//-------------MEDIUM 
/*
const userInput = prompt('Are you whispering, SHOUTING, or talking normally?')


if (userInput === 'whispering'){
    alert('you are whispering');
} else if (userInput === 'shouting'){
    alert('YOU ARE SHOUTING');
} else {
    alert('You are talking normally');
}
*/
//------------HARD

function add (num1, num2){
    return num1 + num2;
}
const subtract = function(num1, num2){
    return num1 - num2;
}
const multply = function(num1, num2){
    return num1 * num2;
}
const divide = function(num1, num2){
    return num1 / num2;
}



//-------------VERY HARD
const firstNum = Number(prompt('Enter a number'));
const operation = prompt('Enter an operation(+,-,*,/)');
const secondNum = Number(prompt('Enter another number'));

if (operation === '+') {
    alert(add(firstNum, secondNum));  
} else if( operation === '-') {
    alert(subtract(firstNum, secondNum));
} else if( operation === '*') {
    alert(multiply(firstNum, secondNum));
} else if( operation === '/') {
    alert(divide(firstNum, secondNum));
}
