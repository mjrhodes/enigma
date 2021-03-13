class Rotor {
  constructor(wirings) {
    this.wirings = wirings;
    this.setting = 'a';
    this.reversed = {};
    for (const [key, value] of Object.entries(wirings)) {
      this.reversed[value] = key;
    }
  }

  change_setting(new_setting) {
    this.setting = new_setting;
  }

  spin() {
    if(this.setting === 'z') {
      this.setting = 'a';
    } else {
      this.setting = String.fromCharCode(this.setting.charCodeAt(0)+1);
    }
    return this.setting;
  }

  get_position_from_character(character) {
    var position = 0;
    var c = this.setting;
    while (c !== character) {
      if (c === 'z') {
        c = 'a';
      } else {
        c = String.fromCharCode(c.charCodeAt(0)+1);
      }
      position++;
    }
    return position;
  }

  get_character_from_position(position) {
    var character = this.setting;
    for (let i = 0; i < position; i++) {
      if (character === 'z') {
        character = 'a';
      } else {
        character = String.fromCharCode(character.charCodeAt(0)+1);
      }      
    }
    return character;
  }

  route(input) {
    var char_in = this.get_character_from_position(input);
    var char_out = this.wirings[char_in];
    return this.get_position_from_character(char_out);
  }
}