// Import the flash cards constructor implementations
var flashCards = require('./flashCards.js');

/* 
*
* Basic Flashcard Tests
*
*/

var firstPresident = new flashCards.BasicCard('Who was the first president of the United States?', 'George Washington');
console.log(firstPresident.front);
console.log(firstPresident.back); 
console.log('-------------------------------------');

var stars = new flashCards.BasicCard('How many stars in flag of United State?', '50');
console.log(stars.front);
console.log(stars.back);
console.log('-------------------------------------');

var leadactor = new flashCards.BasicCard('Who is the lead actor in movie "The Mummy-2017"?', 'Tom Cruise');
console.log(leadactor.front);
console.log(leadactor.back);
console.log('-------------------------------------');

var sports = new flashCards.BasicCard('Which is the national sport of Canada? ', 'Lacrosse/Ice hockey ');
console.log(sports.front);
console.log(sports.back);
console.log('-------------------------------------');

/* 
*
* Cloze-Deleted Flashcard Tests
*
*/

var firstPresident = new flashCards.ClozeCard('George Washington is the first president of the United States?', 'George Washington');
console.log(firstPresident.full);
console.log(firstPresident.cloze); 
console.log(firstPresident.partial); 
console.log('-------------------------------------');

var stars= new flashCards.ClozeCard('50 stars in flag of United State?', '50');
console.log(stars.full);
console.log(stars.cloze); 
console.log(stars.partial); 
console.log('-------------------------------------');

var leadactor = new flashCards.ClozeCard('Tom Cruise is the lead actor in movie "The Mummy-201"', 'Tom Cruise');
console.log(leadactor.full);
console.log(leadactor.cloze); 
console.log(leadactor.partial); 
console.log('-------------------------------------');

var sports = new flashCards.ClozeCard('Lacrosse/Ice hockey is the national sport of Canada ', 'Lacrosse/Ice hockey');
console.log(sports.full);
console.log(sports.cloze); 
console.log(sports.partial); 
console.log('-------------------------------------');

var failedCard = new flashCards.ClozeCard('This text will not include the clozed-deletion...', 'TEST');
console.log(failedCard.full);
console.log(failedCard.cloze); 
console.log(failedCard.partial); 
console.log('-------------------------------------');

