import React from "react";
import { util, consts } from "../util/util";
import GameBoard from "./GameBoard";
import GameFunctions from "./GameFunctions";

function GameMaster() {
  // Initially all peices are left off the board
  const [gameState, setGameState] = React.useState({});
  // A list of currently available moves for currentPlayer
  const [currentMoves, setCurrentMoves] = React.useState([]);
  // Player 0 is a standbay player (a dud)
  const [currentPlayer, setCurrentPlayer] = React.useState(0);
  const [gameInProgress, setGameInProgress] = React.useState(false);
  const [rollDisabled, setRollDisabled] = React.useState(true);
  const [numPlayers, setNumPlayers] = React.useState(2);

  const makeMove = (player, move) => {};
  const enterPieces = (player, move) => {
    if (player !== currentPlayer || player === 0) {
      console.log(
        "Something went wrong current player is not the onw making a move!!"
      );
      return;
    }
  };

  const onRestart = () => {
    setGameInProgress(false);
    setRollDisabled(true);
    let gameSt = {};
    for (let i = 1; i <= numPlayers; i++) {
      gameSt[i] = 6;
    }
    setGameState({ "00": gameSt });
  };

  const onStart = () => {
    setGameInProgress(true);
    setRollDisabled(false);
  };

  const changePlayers = (nPlayers) => {
    setNumPlayers(nPlayers);
    onRestart();
  };

  const onRoll = (roll) => {
    console.log("you rolled a " + roll);
    // If number is not repeatable then disable roll
  };

  return (
    <div>
      <div>Insert game score</div>
      <div>
        Game Board:
        <GameBoard />
      </div>
      <div>Insert game log</div>
      <GameFunctions
        gameInProgress={gameInProgress}
        rollDisabled={rollDisabled}
        numPlayers={numPlayers}
        onRestart={onRestart}
        changePlayer={changePlayers}
        onStart={onStart}
        onRoll={onRoll}
      />
    </div>
  );
}

export default GameMaster;
