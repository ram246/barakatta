import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const NewDialog = withStyles({
  paper: {
    height: "250px",
    width: "250px",
  },
})(Dialog);

const useStyles = makeStyles(() => ({
  open: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function RollDialog(props) {
  const { open, onClose } = props;
  const classes = useStyles();

  const [rollDisabled, setRollDisabled] = React.useState(false);
  const [content, setContent] = React.useState([]);
  const [rolls, setRolls] = React.useState([]);

  const finish = () => {
    setRollDisabled(false);
    setContent([]);
    setRolls([]);
    onClose(rolls);
  };

  const rollBarra = () => {
    const roll1 = Math.floor(Math.random() * 4);
    const roll2 = Math.floor(Math.random() * 4);
    let total = roll1 + roll2;
    if (roll1 + roll2 === 0) {
      total = 12;
    }
    let c = content.slice();
    c.push([roll1, roll2]);
    setContent(c);

    let r = rolls.slice();
    r.push(total);
    setRolls(r);

    console.log(rolls);
    if (total === 2 || total === 3 || total === 4) {
      // Cannot roll again
      setRollDisabled(true);
    }
  };

  return (
    <NewDialog disableBackdropClick open={open}>
      <div className={classes.open}>
        {content.map((r, i) => {
          return (
            <div key={i}>
              <div>
                First roll of barra is <b>{r[0]}</b>
              </div>
              <div>
                Second roll of barra is <b>{r[1]}</b>
              </div>
              <div>
                Total is <b>{rolls[i]}</b>
              </div>
            </div>
          );
        })}
        <div>
          <Button
            variant="contained"
            color="primary"
            disabled={rollDisabled}
            onClick={rollBarra}
          >
            Roll
          </Button>

          <Button
            variant="contained"
            color="primary"
            disabled={!rollDisabled}
            onClick={finish}
          >
            Finish
          </Button>
        </div>
      </div>
    </NewDialog>
  );
}
