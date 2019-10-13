for (var i=0; i<100; i+=7){
  document.getElementById('result').innerHTML += i + '</br>';
}

// multiples of 2 upto 200
for (var i=0; i<200; i+=2){
  document.getElementById('result2').innerHTML += i + '</br>';
}

// take card type as input from user
var cardType = prompt('Enter the type of card you want(diamonds, clubs, spades, hearts)');

// matching the user input with switch case
switch (cardType) {
  case 'diamonds':
    document.getElementById('result3').innerHTML += 'diamond - ACE, diamond - 2 to 10, diamond - Jack, Queen, King';
    break;
  case 'spades':
    document.getElementById('result3').innerHTML += 'spade - ACE, spade - 2 to 10, spade - Jack, Queen, King';
    break;
  case 'hearts':
    document.getElementById('result3').innerHTML += 'heart - ACE, heart - 2 to 10, heart - Jack, Queen, King';
    break;
  case 'clubs':
    document.getElementById('result3').innerHTML += 'club - ACE, club - 2 to 10, club - Jack, Queen, King';
    break;
  default:
    document.getElementById('result3').innerHTML += 'Sorry, wrong input';
}
