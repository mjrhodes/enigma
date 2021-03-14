class Rotor {
  constructor(label, wirings) {
    this.label = label;
    this.setting = 0;
    this.wirings = wirings;
    this.reversed = new Array(26);
    for(var i = 0; i < 26; i++) this.reversed[this.wirings[i]] = i;
  }

  change_setting(new_setting) {
    this.setting = new_setting;
  }

  spin() {
    if(this.setting === 25) {
      this.setting = 0;
    } else {
      this.setting++;
    }
    return this.setting;
  }

  get_letter_from_number(number) {
    return String.fromCharCode(number + CHAR_CODE_OF_A);
  }

  setting_as_letter() {
    return this.get_letter_from_number(this.setting);
  }

  route_forward(input) {
    return this.wirings[input];
  }

  route_reversed(input) {
    return this.reversed[input];
  }
}