class Util {
  convertStringToCords(s) {
    /**
     * Converts a string of 2 integer charecters (ex "12") to a list of
     * the 2 integers
     */
    let spl = s.split("");
    spl.map((item, index) => {
      spl[index] = parseInt(item);
    });
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
}

export let util = new Util();
export let consts = new Constants();
