import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import RollDialog from "./RollDialog";

const styles = makeStyles(() => ({
  main: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  functionBox: {
    borderRadius: "15px",
    border: "2px black solid",
    display: "flex",
    justifyContent: "space-around",
    width: "max(60%, 400px)",
  },
  buttons: {
    padding: "5px",
    margin: "10px 5px",
  },
}));

function GameFunctions(props) {
  const {
    onRestart,
    rollDisabled,
    onRoll,
    changePlayer,
    numPlayers,
    gameInProgress,
    onStart,
  } = props;

  const [changePlayerAnchor, setChangePlayerAnchor] = React.useState(null);
  const [openRollDialog, setOpenRollDialog] = React.useState(false);

  const css = styles();

  const changeP = (event) => {
    setChangePlayerAnchor(null);
    changePlayer(parseInt(event.currentTarget.textContent));
  };

  const rollBarra = () => {
    setOpenRollDialog(true);
  };

  const rollsDone = (allRolls) => {
    setOpenRollDialog(false);
    onRoll(allRolls);
  };

  return (
    <div className={css.main}>
      <div className={css.functionBox}>
        <div className={css.buttons}>
          <Button
            variant="contained"
            onClick={(event) => {
              setChangePlayerAnchor(event.currentTarget);
            }}
          >
            Change Players ({numPlayers})
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={changePlayerAnchor}
            keepMounted
            open={Boolean(changePlayerAnchor)}
            onClose={() => {
              setChangePlayerAnchor(null);
            }}
          >
            <MenuItem onClick={changeP} value="2">
              2
            </MenuItem>
            <MenuItem onClick={changeP}>3</MenuItem>
            <MenuItem onClick={changeP}>4</MenuItem>
          </Menu>
        </div>
        <div className={css.buttons}>
          <Button
            variant="contained"
            color="primary"
            disabled={rollDisabled}
            onClick={rollBarra}
          >
            Roll
          </Button>
        </div>
        <div className={css.buttons}>
          <Button
            variant="contained"
            color="secondary"
            onClick={gameInProgress ? onRestart : onStart}
          >
            {gameInProgress ? "Restart" : "Start"}
          </Button>
        </div>
      </div>
      <RollDialog open={openRollDialog} onClose={rollsDone} />
    </div>
  );
}

export default GameFunctions;
