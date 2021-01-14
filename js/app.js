'use strict';
//lintor test
//var banana = 42;
//get user name and offer greeting
// write 5 question that must accept yes or no in any case(caps or no caps) ex. Yes, yes YEs etc.

// prompt user name
var userName = prompt('Hi, What is your name?');
alert('Hello ' + userName + ' nice to meet you!');


//question 1
var answer1 = prompt('Do I like Beer?');
var normalizeAnswer1 = answer1.toLowerCase();

if(normalizeAnswer1 === 'yes' || normalizeAnswer1 === 'y'){
  //console.log('like Beer?: ' + answer1);
  alert('I DO! but i dont drink very often');
}else if(normalizeAnswer1 === 'no' || normalizeAnswer1 === 'n'){
  //console.log('like Beer?: ' + answer1);
  alert('You aren\'t going to do well.');
}

//question 2
var answer2 = prompt('Do i live in Washington State?');
var normalizeAnswer2 = answer2.toLowerCase();

if(normalizeAnswer2 === 'yes' || normalizeAnswer2 === 'y'){
  //consol.log("Washington?: " + answer2);
  alert('For now, i cant stand the rain here.');
}else if(normalizeAnswer2 === 'no' || normalizeAnswer2 === 'n'){
  //consol.log("Washington?: " + answer2);
  alert('I wish you were right... but you\'re not');
}

//question 3
var answer3 = prompt('Do i have any Children?');
var normalizeAnswer3 = answer3.toLowerCase();

if(normalizeAnswer3 === 'yes' || normalizeAnswer3 === 'y'){
  //consol.log("Children?: " + answer3);
  alert('I have Two of them!');
}else if(normalizeAnswer3 === 'no' || normalizeAnswer3 === 'n'){
  //consol.log("Children?: " + answer3);
  alert('I couldn\'t live without them!');
}

//question 4
var answer4 = prompt('Am i a Man?');
var normalizeAnswer4 = answer4.toLowerCase();

if(normalizeAnswer4 === 'yes' || normalizeAnswer4 === 'y'){
  //consol.log("Man: " + answer4);
  alert('Yes, i am.');
}else if(normalizeAnswer4 === 'no' || normalizeAnswer4 === 'n'){
  //consol.log("Man?: " + answer4);
  alert('Well, i am a Man.');
}

//question 5
var answer5 = prompt('Did i serve in the Armed Forces?');
var normalizeAnswer5 = answer5.toLowerCase();

if(normalizeAnswer5 === 'yes' || normalizeAnswer5 === 'y'){
  //consol.log("Veteran?: " + answer5);
  alert('To answer you\'re question ' + userName + ', I served 4 years active duty almost 10 years ago.');
}else if(normalizeAnswer5 === 'no' || normalizeAnswer5 === 'n'){
  //consol.log("Veteran?: " + answer5);
  alert('It\'s ok ' + userName + ', How could you have known that i am a veteran?');
}
