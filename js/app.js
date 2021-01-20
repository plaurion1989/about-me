'use strict';
var score = 0
var name = prompt('Hi, What is your name?');
var normalName = name.toLowerCase();
while (!name) {
  name = prompt('Please tell me, I need it to pass my class...');
}

if (normalName !== 'patrick') {
  alert('Glad we dont have the same name!  That would get cornfusing..');

} else if (normalName == 'patrick') {
  alert('Gosh darn it, we have the same name!');
}

alert('Hello, ' + name +  ' nice to meet you!');


var answer1 = prompt('Do I like Beer?');
var normalizeAnswer1 = answer1.toLowerCase();

if(normalizeAnswer1 === 'yes' || normalizeAnswer1 === 'y'){
  // console.log('like Beer?: ' + answer1);
  alert('I DO! but i dont drink very often');
  score++;
}else if(normalizeAnswer1 === 'no' || normalizeAnswer1 === 'n'){
  // console.log('like Beer?: ' + answer1);
  alert('You aren\'t going to do well.');
}

var answer2 = prompt('Do i live in Washington State?');
var normalizeAnswer2 = answer2.toLowerCase();

if(normalizeAnswer2 === 'yes' || normalizeAnswer2 === 'y'){
  // consol.log("Washington?: " + answer2);
  alert('For now, i cant stand the rain here.');
  score++;
}else if(normalizeAnswer2 === 'no' || normalizeAnswer2 === 'n'){
  // consol.log("Washington?: " + answer2);
  alert('I wish you were right... but you\'re not');
}

var answer3 = prompt('Do i have any Children?');
var normalizeAnswer3 = answer3.toLowerCase();

if(normalizeAnswer3 === 'yes' || normalizeAnswer3 === 'y'){
  // consol.log("Children?: " + answer3);
  alert('I have Two of them!');
  score++;
}else if(normalizeAnswer3 === 'no' || normalizeAnswer3 === 'n'){
  // consol.log("Children?: " + answer3);
  alert('I couldn\'t live without them!');
}

var answer4 = prompt('Am i a Man?');
var normalizeAnswer4 = answer4.toLowerCase();

if(normalizeAnswer4 === 'yes' || normalizeAnswer4 === 'y'){
  // consol.log("Man: " + answer4);
  alert('Yes, i am.');
  score++;
}else if(normalizeAnswer4 === 'no' || normalizeAnswer4 === 'n'){
  // consol.log("Man?: " + answer4 );
  alert('Well, i am a Man.');
}

var answer5 = prompt('Did i serve in the Armed Forces?');
var normalizeAnswer5 = answer5.toLowerCase();

if(normalizeAnswer5 === 'yes' || normalizeAnswer5 === 'y'){
  // consol.log("Veteran?: " + answer5);
  alert('To answer you\'re question ' + name + ', I served 4 years active duty almost 10 years ago.');
  score++;
}else if(normalizeAnswer5 === 'no' || normalizeAnswer5 === 'n'){
  // consol.log("Veteran?: " + answer5);
  alert('It\'s ok ' + name + ', How could you have known that i am a veteran?');
}

if(score < 4){
  alert('You only guessed ' + score + ' out of 7 correct, guess you learned a thing or two about me!');
}else if(score >= 4){
  alert('You know me so well, you guessed ' + score + ' out of 7 correctly! Are we related somehow?');
}