function playGame(playerInput){

    function getMoveName(argMoveId) {
      if(argMoveId == 1){
        return 'kamień';
        }
        
      else if(argMoveId == 2){
        return'papier';
        }
          
      else if(argMoveId == 3){
        return'nożyce';
        }

      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }

    function displayResult(argComputerMove, argPlayerMove) {

        console.log('moves:', argComputerMove, argPlayerMove);

        if (argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        }

        else if (argComputerMove == 'papier' && argPlayerMove == 'kamień' || argComputerMove == 'kamień' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Ty przegrałeś!');
        }

        else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień' || argComputerMove == 'papier' && argPlayerMove == 'papier' || argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
            printMessage('Remis!');
        }

        else {
            printMessage('nieznany ruch');
        }
        
    }

      clearMessages();

      let randomNumber = Math.floor(Math.random() * 3 + 1);

      console.log('Wylosowana liczba to: ' + randomNumber);

      let computerMove = getMoveName(randomNumber);



      printMessage('Mój ruch to: ' + computerMove);

      // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

      console.log('Gracz wpisał: ' + playerInput);

      let playerMove = getMoveName(playerInput);


      printMessage('Twój ruch to: ' + playerMove);

      displayResult(computerMove, playerMove);
  
}
console.log('hello');


// document.getElementById('play-rock').addEventListener('click', function(){
//   printMessage('kamień');
// });
// document.getElementById('play-paper').addEventListener('click', function(){
//   printMessage('papier');
// });
// document.getElementById('play-scissors').addEventListener('click', function(){
//   printMessage('nożyce');
// });

document.getElementById('play-rock').addEventListener('click', playGame(1));

document.getElementById('play-paper').addEventListener('click', playGame(2));

document.getElementById('play-scissors').addEventListener('click', playGame(3));

