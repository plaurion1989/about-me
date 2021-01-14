'use strict';
//lintor test
//var banana = 42;
//get user name and offer greeting
// write 5 question that must accept yes or no in any case(caps or no caps) ex. Yes, yes YEs etc.

// prompt user name
var userName = prompt('Hi, What is your name?');
alert('Hello ' + userName + ' nice to meet you!');


//question 1
var answer1 = prompt('Do you like Beer?');
var normalizeAnswer1 = answer1.toLowerCase();

if(normalizeAnswer1 === 'yes' || normalizeAnswer1 === 'y'){
  //console.log('you are correct');
  alert('So do I! You are going to like this questionaire!');
}else if(normalizeAnswer1 === 'no' || normalizeAnswer1 === 'n'){
  alert('You aren\'t going to like this quiz...');
}

//question 2
var answer2 = prompt('Do you like warm Beer?');
var normalizeAnswer2 = answer2.toLowerCase();

if(normalizeAnswer2 === 'yes' || normalizeAnswer2 === 'y'){
  //console.log('you are correct');
  alert('Not my bag, but go for it!');
}else if(normalizeAnswer2 === 'no' || normalizeAnswer2 === 'n'){
  alert('I\'ll only have a warm beer if i\'m desperate.');
}

//question 3
var answer3 = prompt('Do you like sour Beer?');
var normalizeAnswer3 = answer3.toLowerCase();

if(normalizeAnswer3 === 'yes' || normalizeAnswer3 === 'y'){
  //console.log('you are correct');
  alert('You are one weird person.');
}else if(normalizeAnswer3 === 'no' || normalizeAnswer3 === 'n'){
  alert('Sound\'s like someone made the mistake of trying some!');
}

//question 4
var answer4 = prompt('Do you like cold Beer?');
var normalizeAnswer4 = answer4.toLowerCase();

if(normalizeAnswer4 === 'yes' || normalizeAnswer4 === 'y'){
  //console.log('you are correct');
  alert('Who Doesn\'t!');
}else if(normalizeAnswer4 === 'no' || normalizeAnswer4 === 'n'){
  alert('You aren\'t human.');
}

//question 5
var answer5 = prompt('Are you ready for more questions about Beer?');
var normalizeAnswer5 = answer5.toLowerCase();

if(normalizeAnswer5 === 'yes' || normalizeAnswer5 === 'y'){
  //console.log('you are correct');
  alert('You\'re weird...');
}else if(normalizeAnswer5 === 'no' || normalizeAnswer5 === 'n'){
  alert('It\'s ok, I\'ll stop asking.');
}
