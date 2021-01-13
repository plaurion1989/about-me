'use strict';
//lintor test
//var banana = 42;
//get user name and offer greeting
// write 5 question that must accept yes or no in any case(caps or no caps) ex. Yes, yes YEs etc.
var userName = prompt('Hi, What is your name?');
alert('Hello' + userName + ' nice to meet you!');

var question1 = prompt('Do you like Beer?');
var normalizeQuestion1 = question1.toLowerCase();

if(normalizeQuestion1 === 'yes' || normalizeQuestion1 === 'y'){
  //console.log('you are correct');
  alert('So do I');
}
