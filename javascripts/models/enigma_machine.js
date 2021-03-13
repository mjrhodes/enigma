class EnigmaMachine {
  constructor() {
    this.rotor1 = new Rotor({
      "a": "a", "b": "h", "c": "t", "d": "g", "e": "v", "f": "b", "g": "q", "h": "i", "i": "w", "j": "k",
      "k": "s", "l": "m", "m": "x", "n": "p", "o": "u", "p": "e", "q": "d", "r": "y", "s": "n", "t": "f",
      "u": "l", "v": "o", "w": "z", "x": "c", "y": "j", "z": "r"
    });

    this.rotor2 = new Rotor({
      "a": "o", "b": "d", "c": "q", "d": "n", "e": "s", "f": "a", "g": "k", "h": "i", "i": "h", "j": "t",
      "k": "g", "l": "e", "m": "r", "n": "w", "o": "v", "p": "l", "q": "b", "r": "p", "s": "m", "t": "y",
      "u": "x", "v": "f", "w": "c", "x": "j", "y": "u", "z": "z"
    });

    this.rotor3 = new Rotor({
      "a": "x", "b": "z", "c": "m", "d": "i", "e": "e", "f": "a", "g": "c", "h": "t", "i": "o", "j": "p",
      "k": "h", "l": "s", "m": "b", "n": "d", "o": "u", "p": "n", "q": "g", "r": "w", "s": "j", "t": "q",
      "u": "r", "v": "k", "w": "y", "x": "v", "y": "f", "z": "l"
    });

    this.rotor4 = new Rotor({
      "a": "f", "b": "z", "c": "j", "d": "p", "e": "q", "f": "i", "g": "y", "h": "o", "i": "t", "j": "v",
      "k": "g", "l": "u", "m": "s", "n": "m", "o": "b", "p": "d", "q": "h", "r": "c", "s": "l", "t": "k",
      "u": "a", "v": "x", "w": "n", "x": "e", "y": "r", "z": "w"
    });

    this.rotor5 = new Rotor({
      "a": "i", "b": "q", "c": "m", "d": "x", "e": "y", "f": "a", "g": "p", "h": "c", "i": "o", "j": "r",
      "k": "n", "l": "h", "m": "u", "n": "k", "o": "t", "p": "s", "q": "z", "r": "f", "s": "e", "t": "w",
      "u": "v", "v": "b", "w": "g", "x": "l", "y": "j", "z": "d"
    });

    this.right_rotor = null;
    this.center_rotor = null;
    this.left_rotor = null;
  }
}