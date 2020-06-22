import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const NewDialog = withStyles({
  paper: {
    height: "600px",
    width: "400px",
  },
})(Dialog);

const useStyles = makeStyles(() => ({
  open: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttons: {
    margin: "0px 20px",
    marginBottom: "20px",
  },
  rollsLog: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: "20px",
    marginTop: "20px"
  }
}));

export default function RollDialog(props) {
  const { open, onClose } = props;
  const css = useStyles();
  const refButtons = React.useRef();

  const [rollDisabled, setRollDisabled] = React.useState(false);
  const [content, setContent] = React.useState([]);
  const [rolls, setRolls] = React.useState([]);
  const [totalRolls, setTotalRolls] = React.useState(0);

  React.useEffect(()=>{
    if (refButtons.current){
      refButtons.current.scrollIntoView();
    }
  });

  const finish = () => {
    setRollDisabled(false);
    setContent([]);
    setRolls([]);
    onClose(rolls, totalRolls);
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
    setTotalRolls(totalRolls + total);

    if (total === 2 || total === 3 || total === 4) {
      // Cannot roll again
      setRollDisabled(true);
    }
  };

  return (
    <NewDialog disableBackdropClick open={open}>
      <div className={css.open}>
        <div className={css.rollsLog}>
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
        </div>
        <div ref={refButtons}>
          <Button
            variant="contained"
            color="primary"
            classes={{root: css.buttons}}
            disabled={rollDisabled}
            onClick={rollBarra}
          >
            Roll
          </Button>

          <Button
            variant="contained"
            color="primary"
            classes={{root: css.buttons}}
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
