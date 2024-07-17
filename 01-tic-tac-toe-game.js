let a1, a2, a3, a4, a5, a6, a7, a8, a9;
a1 = document.querySelector('.a11-js');
a2 = document.querySelector('.a12-js');
a3 = document.querySelector('.a13-js');
a4 = document.querySelector('.a21-js');
a5 = document.querySelector('.a22-js');
a6 = document.querySelector('.a23-js');
a7 = document.querySelector('.a31-js');
a8 = document.querySelector('.a32-js');
a9 = document.querySelector('.a33-js');

let result = document.querySelector(".result");
let resetBtn = document.querySelector('.reset-js');

a1.addEventListener('click', ()=> {
  GameInput(a1);
  playGame();
});

a2.addEventListener('click', ()=> {
  GameInput(a2);
  playGame();
});

a3.addEventListener('click', ()=> {
  GameInput(a3);
  playGame();
});

a4.addEventListener('click', ()=> {
  GameInput(a4);
  playGame();
});

a5.addEventListener('click', ()=> {
  GameInput(a5);
  playGame();
});

a6.addEventListener('click', ()=> {
  GameInput(a6);
  playGame();
});

a7.addEventListener('click', ()=> {
  GameInput(a7);
  playGame();
});

a8.addEventListener('click', ()=> {
  GameInput(a8);
  playGame();
});

a9.addEventListener('click', ()=> {
  GameInput(a9);
  playGame();
});

resetBtn.addEventListener('click' , ()=> {
  resetGame();
});

function playGame() {
  //player 1
  if ((a1.value === 'X') && (a2.value === 'X') && 
  (a3.value === 'X')) {
    result.innerHTML = 'Player 1 won!';
    document.getElementById('show')
      .innerHTML = "Please, click the reset button";
    a4.disabled = true;    
    a5.disabled = true;    
    a6.disabled = true;    
    a7.disabled = true;    
    a8.disabled = true;    
    a9.disabled = true;  
    
    a1.style.color = "red"; 
    a2.style.color = "red"; 
    a3.style.color = "red"; 
    result.style.color = "red";
  }

  else if ((a1.value === 'X') && (a4.value === 'X') && 
  (a7.value === 'X')) {
    result.innerHTML = 'Player 1 won!';
    document.getElementById('show')
      .innerHTML = "Please, click the reset button";
    a2.disabled = true;    
    a3.disabled = true;    
    a5.disabled = true;    
    a6.disabled = true;    
    a8.disabled = true;    
    a9.disabled = true;    

    a1.style.color = "red"; 
    a4.style.color = "red"; 
    a7.style.color = "red"; 
    result.style.color = "red";
  }

  else if ((a1.value === 'X') && (a5.value === 'X') && 
  (a9.value === 'X')) {
    result.innerHTML = 'Player 1 won!';
    document.getElementById('show')
      .innerHTML = "Please, click the reset button";
    a2.disabled = true;    
    a3.disabled = true;    
    a4.disabled = true;    
    a6.disabled = true;    
    a7.disabled = true;    
    a8.disabled = true; 
    
    a1.style.color = "red"; 
    a5.style.color = "red"; 
    a9.style.color = "red"; 
    result.style.color = "red";
  }

  else if ((a2.value === 'X') && (a5.value === 'X') && 
  (a8.value === 'X')) {
    result.innerHTML = 'Player 1 won!';
    document.getElementById('show')
      .innerHTML = "Please, click the reset button";
    a1.disabled = true;    
    a3.disabled = true;    
    a4.disabled = true;    
    a6.disabled = true;    
    a7.disabled = true;    
    a9.disabled = true; 
    
    a2.style.color = "red"; 
    a5.style.color = "red"; 
    a8.style.color = "red"; 
    result.style.color = "red";
  }

  else if ((a3.value === 'X') && (a6.value === 'X') && 
  (a9.value === 'X')) {
    result.innerHTML = 'Player 1 won!';
    document.getElementById('show')
      .innerHTML = "Please, click the reset button";
    a1.disabled = true;    
    a2.disabled = true;    
    a4.disabled = true;    
    a5.disabled = true;    
    a7.disabled = true;    
    a8.disabled = true;  
    
    a3.style.color = "red"; 
    a6.style.color = "red"; 
    a9.style.color = "red"; 
    result.style.color = "red";
  }

  else if ((a7.value === 'X') && (a8.value === 'X') && 
  (a9.value === 'X')) {
    result.innerHTML = 'Player 1 won!';
    document.getElementById('show')
      .innerHTML = "Please, click the reset button";
    a1.disabled = true;    
    a2.disabled = true;    
    a3.disabled = true;    
    a4.disabled = true;    
    a5.disabled = true;    
    a6.disabled = true;    

    a7.style.color = "red"; 
    a8.style.color = "red"; 
    a9.style.color = "red"; 
    result.style.color = "red";
  }

  else if ((a4.value === 'X') && (a5.value === 'X') && 
  (a6.value === 'X')) {
    result.innerHTML = 'Player 1 won!';
    document.getElementById('show')
      .innerHTML = "Please, click the reset button";
    a1.disabled = true;    
    a2.disabled = true;    
    a3.disabled = true;    
    a7.disabled = true;    
    a8.disabled = true;    
    a9.disabled = true;  
    
    a4.style.color = "red"; 
    a5.style.color = "red"; 
    a6.style.color = "red"; 
    result.style.color = "red";
  }

  else if ((a3.value === 'X') && (a5.value === 'X') && 
  (a7.value === 'X')) {
    result.innerHTML = 'Player  won!';
    document.getElementById('show')
      .innerHTML = "Please, click the reset button";
    a1.disabled = true;    
    a2.disabled = true;    
    a4.disabled = true;    
    a6.disabled = true;    
    a8.disabled = true;    
    a9.disabled = true;  
    
    a3.style.color = "red"; 
    a5.style.color = "red"; 
    a7.style.color = "red"; 
    result.style.color = "red";
  }

  //player 2
  
  else if ((a1.value === 'O') && (a2.value === 'O') && 
  (a3.value === 'O')) {
    result.innerHTML = 'Player 2 won!';
    document.getElementById('show')
      .innerHTML = "Please, click the reset button";
    a4.disabled = true;    
    a5.disabled = true;    
    a6.disabled = true;    
    a7.disabled = true;    
    a8.disabled = true;    
    a9.disabled = true;    

    a1.style.color = "yellow"; 
    a2.style.color = "yellow"; 
    a3.style.color = "yellow"; 
    result.style.color = "yellow";
  }

  else if ((a1.value === 'O') && (a4.value === 'O') && 
  (a7.value === 'O')) {
    result.innerHTML = 'Player 2 won!';
    document.getElementById('show')
      .innerHTML = "Please, click the reset button";
    a2.disabled = true;    
    a3.disabled = true;    
    a5.disabled = true;    
    a6.disabled = true;    
    a8.disabled = true;    
    a9.disabled = true;   
    
    a1.style.color = "yellow"; 
    a4.style.color = "yellow"; 
    a7.style.color = "yellow"; 
    result.style.color = "yellow";
  }

  else if ((a1.value === 'O') && (a5.value === 'O') && 
  (a9.value === 'O')) {
    result.innerHTML = 'Player 2 won!';
    document.getElementById('show')
      .innerHTML = "Please, click the reset button";
    a2.disabled = true;    
    a3.disabled = true;    
    a4.disabled = true;    
    a6.disabled = true;    
    a7.disabled = true;    
    a8.disabled = true;  
    
    a1.style.color = "yellow"; 
    a5.style.color = "yellow"; 
    a9.style.color = "yellow"; 
    result.style.color = "yellow";
  }

  else if ((a2.value === 'O') && (a5.value === 'O') && 
  (a8.value === 'O')) {
    result.innerHTML = 'Player 2 won!';
    document.getElementById('show')
      .innerHTML = "Please, click the reset button";
    a1.disabled = true;    
    a3.disabled = true;    
    a4.disabled = true;    
    a6.disabled = true;    
    a7.disabled = true;    
    a9.disabled = true;    

    a2.style.color = "yellow"; 
    a5.style.color = "yellow"; 
    a8.style.color = "yellow"; 
    result.style.color = "yellow";
  }

  else if ((a3.value === 'O') && (a6.value === 'O') && 
  (a9.value === 'O')) {
    result.innerHTML = 'Player 2 won!';
    document.getElementById('show')
      .innerHTML = "Please, click the reset button";
    a1.disabled = true;    
    a2.disabled = true;    
    a4.disabled = true;    
    a5.disabled = true;    
    a7.disabled = true;    
    a8.disabled = true;    

    a3.style.color = "yellow"; 
    a6.style.color = "yellow"; 
    a9.style.color = "yellow";
    result.style.color = "yellow"; 
  }

  else if ((a7.value === 'O') && (a8.value === 'O') && 
  (a9.value === 'O')) {
    result.innerHTML = 'Player 2 won!';
    document.getElementById('show')
      .innerHTML = "Please, click the reset button";
    a1.disabled = true;    
    a2.disabled = true;    
    a3.disabled = true;    
    a4.disabled = true;    
    a5.disabled = true;    
    a6.disabled = true;    

    a7.style.color = "yellow"; 
    a8.style.color = "yellow"; 
    a9.style.color = "yellow"; 
    result.style.color = "yellow";
  }

  else if ((a4.value === 'O') && (a5.value === 'O') && 
  (a6.value === 'O')) {
    result.innerHTML = 'Player 2 won!';
    document.getElementById('show')
      .innerHTML = "Please, click the reset button";
    a1.disabled = true;    
    a2.disabled = true;    
    a3.disabled = true;    
    a7.disabled = true;    
    a8.disabled = true;    
    a9.disabled = true;    

    a4.style.color = "yellow"; 
    a5.style.color = "yellow"; 
    a6.style.color = "yellow"; 
    result.style.color = "yellow";
  }

  else if ((a3.value === 'O') && (a5.value === 'O') && 
  (a7.value === 'O')) {
    result.innerHTML = 'Player 2 won!';
    document.getElementById('show')
      .innerHTML = "Please, click the reset button";
    a1.disabled = true;    
    a2.disabled = true;    
    a4.disabled = true;    
    a6.disabled = true;    
    a8.disabled = true;    
    a9.disabled = true;  
    
    a3.style.color = "yellow"; 
    a5.style.color = "yellow"; 
    a7.style.color = "yellow"; 
    result.style.color = "yellow";
  }

  else if (
      (a1.value === 'X' || a1.value === 'O') &&
      (a2.value === 'X' || a2.value === 'O') &&
      (a3.value === 'X' || a3.value === 'O') &&
      (a4.value === 'X' || a4.value === 'O') &&
      (a5.value === 'X' || a5.value === 'O') &&
      (a6.value === 'X' || a6.value === 'O') &&
      (a7.value === 'X' || a7.value === 'O') &&
      (a8.value === 'X' || a8.value === 'O') &&
      (a9.value === 'X' || a9.value === 'O')
  ) {
    result.innerHTML = 'its is a Tie';
    document.getElementById('show')
      .innerHTML = "Please, click the reset button";
    // alert('Please, click the reset button');
  } 

  else {
    (render === true)? result.innerHTML = 'Player 1 turn': result. innerHTML = 'Player 2 turn';
  }
}

function resetGame() {
  a1.value = a2.value = a3.value = a4.value = a5.value = a6.value = a7.value = a8.value = a9.value = '';
  location.reload();   
}

let render = true;

function GameInput(check) {
  if (render === true) {
    check.value = 'X';
    check.disabled = true;
    render = false;
  } else {
    check.value = 'O';
    check.disabled = true;
    render = true;
  }
}

document.querySelector('.play play-O-js')
  .addEventListener('click', ()=> {

  });

document.querySelector('.play play-X-js')
.addEventListener('click', ()=> {
  
});

