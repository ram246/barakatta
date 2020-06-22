import React from "react";
import { util, consts } from "../util/util";
import GameBoard from "./GameBoard";
import GameFunctions from "./GameFunctions";

function GameMaster() {
  // Initially all peices are left off the board
  const [gameState, setGameState] = React.useState({});
  const [gameMetaData, setGameMetaData] = React.useState({});
  // A list of currently available moves for currentPlayer
  const [currentMoves, setCurrentMoves] = React.useState([]);
  // Player 0 is a standby player (a dud)
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
    let piecesMeta = {};
    let statsMeta = {};
    for (let i = 1; i <= numPlayers; i++) {
      gameSt[i] = 6;
      piecesMeta[i] = [
        consts.init_piece_data,
        consts.init_piece_data,
        consts.init_piece_data,
        consts.init_piece_data,
        consts.init_piece_data,
        consts.init_piece_data,
      ];
      statsMeta[i] = { kills: 0, deaths: 0 };
    }
    setGameState({ "00": gameSt });
    setGameMetaData({ piecesData: piecesMeta, gameStats: statsMeta });
  };

  const onStart = () => {
    setGameInProgress(true);
    setRollDisabled(false);
    setCurrentPlayer(1);
  };

  const changePlayers = (nPlayers) => {
    setNumPlayers(nPlayers);
    onRestart();
  };

  const onRoll = (roll, sum) => {
    console.log("you rolled a " + roll);

    /** IMPORTANT */
    // Edge case when a player rolls more than what they can move now because they do not have a kill
    // They should be allowed to attempt to get a kill (and if they don't undo their move) instead of
    // skipping their turn

    // Check if all these rolls can be made
    setRollDisabled(true);
  };

  return (
    <div>
      <div>Insert game score</div>
      <div>
        Game Board:
        <GameBoard />
      </div>
      <div>Insert game log</div>
      {currentPlayer ? <div>Player {currentPlayer}'s turn </div> : ""}
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
