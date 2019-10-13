console.log('debugging');

var sauceFlag = 1;

while (sauceFlag === 1) {

  sauceFlag = prompt('Do you need sauce? Please enter yes or no');

  if (sauceFlag === 'yes') {
     var countSauce = parseInt(prompt ('How many sauce? Please enter a number'));

     sauceFlag = 0;
     document.getElementById('result').textContent = 'you asked for ' + countSauce + ' sauces';

     if (countSauce > 10) {
       sauceFlag = 1;
       alert('Oh! too many!');
       continue;
     }
  } else {
    document.getElementById('result').textContent = 'you do not want any sauces';
  }

  if (sauceFlag === 0) {
    sauceFlag = 0;
  }

}
