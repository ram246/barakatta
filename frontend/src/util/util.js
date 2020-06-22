class Util {
  convertStringToCords(s) {
    /**
     * Converts a string of 2 integer charecters (ex "12") to a list of
     * the 2 integers
     */
    let spl = s.split("");
    for (let i = 0; i < spl.length; i++) {
      spl[i] = parseInt(spl[i]);
    }
    console.log(spl);
    return spl;
  }
  convertCordsToString(c) {
    return "" + c[0] + c[1];
  }
}

class Constants {
  // Constants:
  // Cordinates are listed as strings first char being the x and second is y
  player_starts = ["", "14", "74", "47", "41"];
  // Max moves is 49 when there play has at least one kill
  init_piece_data = {"onBoard": false, "completed": false, "cord": [0,0], "maxMove": 25};
  
}

export let util = new Util();
export let consts = new Constants();

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
