'use strict';

var score = 0;
var userName = prompt('Hi, What is your name?').toLowerCase();
while (!userName) {
  userName = prompt('Please tell me, I need it to pass my class...');
}

if (userName !== 'patrick') {
  alert('Glad we dont have the same name!  That would get cornfusing..');

} else if (userName === 'patrick') {
  alert('Gosh darn it, we have the same name!');
}

alert('Hello, ' + userName + ' nice to meet you!');

function questionOne() {
  var answer1 = prompt('Do I like Beer?');
  var normalizeAnswer1 = answer1.toLowerCase();
  if (normalizeAnswer1 === 'yes' || normalizeAnswer1 === 'y') {
    alert('I DO! but i dont drink very often');
    score++;
  } else if (normalizeAnswer1 === 'no' || normalizeAnswer1 === 'n') {
    alert('You aren\'t going to do well.');
  }
}
questionOne();

function questionTwo() {
  var answer2 = prompt('Do i live in Washington State?');
  var normalizeAnswer2 = answer2.toLowerCase();

  if (normalizeAnswer2 === 'yes' || normalizeAnswer2 === 'y') {
    alert('For now, i cant stand the rain here.');
    score++;
  } else if (normalizeAnswer2 === 'no' || normalizeAnswer2 === 'n') {
    alert('I wish you were right... but you\'re not');
  }
}
questionTwo();

function questionThree() {
  var answer3 = prompt('Do i have any Children?').toLowerCase();
  if (answer3 === 'yes' || answer3 === 'y') {
    alert('I have Two of them!');
    score++;
  } else if (answer3 === 'no' || answer3 === 'n') {
    alert('I couldn\'t live without them!');
  }
}
questionThree();

function questionFour() {
  var answer4 = prompt('Am i a Man?').toLowerCase();
  if (answer4 === 'yes' || answer4 === 'y') {
    alert('Yes, i am.');
    score++;
  } else if (answer4 === 'no' || answer4 === 'n') {
    alert('Well, i am a Man.');
  }
}
questionFour();

function questionFive() {
  var answer5 = prompt('Did i serve in the Armed Forces?').toLowerCase();
  if (answer5 === 'yes' || answer5 === 'y') {
    alert('To answer you\'re question ' + name + ', I served 4 years active duty almost 10 years ago.');
    score++;
  } else if (answer5 === 'no' || answer5 === 'n') {
    alert('It\'s ok ' + name + ', How could you have known that i am a veteran?');
  }
}
questionFive();

function questionSix() {
  
  var number = Math.floor((Math.random() * 10) + 1);

  for (var i = 0; i < 4; i++) {
    var answer6 = +prompt('I\'m thinking of a number between 1 and 10?');
    if (answer6 === number) {
      alert('Wow ' + name + ', you guessed a randomly generated number!');
      score++;
      break;
    } else if (answer6 > number && i !== 3) {
      alert('Nice try! Too High.');
    } else if (answer6 < number && i !== 3) {
      alert('Nope, Too Low!');
    } else if (i === 3) {
      alert(`the correct answer is ${number}!!! i dont know it either!`);
    }

  }
}
questionSix();

function questionSeven() {
  var countriesArray = ['spain', 'portugal', 'france', 'italy', 'usa', 'turkey'];
  var countLoop = 7;
  var correct = false;

  for (var i = 0; i < countLoop; i++) {
    var countries = prompt(`what countries have i visited? you have ${countLoop -i} tries.`);

    for (var j = 0; j < countriesArray.length; j++) {
      if (countries === countriesArray[j]) {
        alert('You are correct!');
        score++;
        correct = true;
        break;
      }
    }
    if (correct) {
      break;
    } else {
      alert('Wrong, i have never been there!');
    }
  }
  if (j === countLoop || correct) {
    alert(`I've visited ${countriesArray}`);
  }
}
questionSeven();



if (score < 4) {
  alert('You only guessed ' + score + ' out of 7 correct, guess you learned a thing or two about me!');
} else if (score >= 4) {
  alert('You know me so well, you guessed ' + score + ' out of 7 correctly! Are we related somehow?');
}
