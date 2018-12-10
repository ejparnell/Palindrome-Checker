let myForm = document.getElementById('myForm');
let wordInput = document.getElementById('wordInput');
let answer = document.getElementById('answer');

myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let userInput = wordInput.value;
    answer.innerHTML = palChecker(userInput);
});




  function palChecker(userInput) {
      let reverseStr = userInput.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
      let testStr = userInput.replace(/[\W_]/g, '').toLowerCase();

      if(reverseStr === testStr) {
          return 'PALINDROME!!'
      }
      else {
          return 'NOT A PALINDROME!!'
      }
  }

 