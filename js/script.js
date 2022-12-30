// // printMessage('Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!');





// let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

// console.log('Gracz wpisał: ' + playerInput);

// let playerMove = 'nieznany ruch';

// if(playerInput == '1'){
//   playerMove = 'kamień';
// }

// printMessage('Twój ruch to: ' + playerMove);

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

if(randomNumber == 2){
  computerMove = 'papier';
}
if(randomNumber == 3){
  computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);