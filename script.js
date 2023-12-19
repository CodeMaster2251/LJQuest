function rollDice() {
    // Get player numbers
    const player1Number = parseInt(document.getElementById('player1Number').value);
    const player2Number = parseInt(document.getElementById('player2Number').value);
  
    // Validate input
    if (isNaN(player1Number) || isNaN(player2Number) || player1Number < 1 || player1Number > 6 || player2Number < 1 || player2Number > 6) {
      alert('Please enter a valid number between 1 and 6 for both players.');
      return;
    }
  
    // Generate random numbers between 1 and 6 for each die
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;
  
    // Display the results on the dice for each player
    document.getElementById('die1').innerText = roll1;
    document.getElementById('die2').innerText = roll2;
  
    // Determine the result for each player
    const result1Element = document.getElementById('result1');
    const result2Element = document.getElementById('result2');
  
    if (roll1 === player1Number) {
      result1Element.innerText = `Player 1 wins! 🎉`;
    } else {
      result1Element.innerText = `Player 1 loses. 😞`;
    }
  
    if (roll2 === player2Number) {
      result2Element.innerText = `Player 2 wins! 🎉`;
    } else {
      result2Element.innerText = `Player 2 loses. 😞`;
    }
  
    // Determine the overall game result
    const gameResultElement = document.getElementById('gameResult');
    if (roll1 === player1Number && roll2 === player2Number) {
      gameResultElement.innerText = `Both players win! It's a tie! 🏆`;
    } else {
      gameResultElement.innerText = `No tie. Better luck next time!`;
    }
  }
  