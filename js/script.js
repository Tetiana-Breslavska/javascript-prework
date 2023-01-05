function playGame(playerInput) {
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nożyce";
    }

    printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return "nieznany ruch";
  }

  function displayResult(argComputerMove, argPlayerMove) {
    console.log("moves:", argComputerMove, argPlayerMove);

    if (
      (argComputerMove == "kamień" && argPlayerMove == "papier") ||
      (argComputerMove == "papier" && argPlayerMove == "nożyce") ||
      (argComputerMove == "nożyce" && argPlayerMove == "kamień")
    ) {
      printMessage("You win!");
      counterPlayer += 1;
    } else if (
      (argComputerMove == "papier" && argPlayerMove == "kamień") ||
      (argComputerMove == "kamień" && argPlayerMove == "nożyce") ||
      (argComputerMove == "nożyce" && argPlayerMove == "papier")
    ) {
      printMessage("You lost!");
      counterComp += 1;
    } else if (
      (argComputerMove == "kamień" && argPlayerMove == "kamień") ||
      (argComputerMove == "papier" && argPlayerMove == "papier") ||
      (argComputerMove == "nożyce" && argPlayerMove == "nożyce")
    ) {
      printMessage("Played a draw!");
    } else {
      printMessage("nieznany ruch");
    }
  }

  clearMessages();
  clearResult();

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log("Wylosowana liczba to: " + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage("Snowman:" + computerMove);

  console.log("Gracz wpisał: " + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage("You:" + playerMove);

  displayResult(computerMove, playerMove);
  console.log(counterComp + ":" + counterPlayer);
  printResult(counterComp + ":" + counterPlayer);
}
console.log("hello");

document.getElementById("play-rock").addEventListener("click", function () {
  playGame(1);
});
document.getElementById("play-paper").addEventListener("click", function () {
  playGame(2);
});
document.getElementById("play-scissors").addEventListener("click", function () {
  playGame(3);
});

let counterComp = 0;
let counterPlayer = 0;
