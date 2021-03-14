class EnigmaMachine {
  constructor() {
    this.rotor1 = new Rotor("I", [0, 7, 19, 6, 21, 1, 16, 8, 22, 10, 18, 12, 23, 15, 20, 4, 3, 24, 13, 5, 11, 14, 25, 2, 9, 17]);

    this.rotor2 = new Rotor("II", [14, 3, 16, 13, 18, 0, 10, 8, 7, 19, 6, 4, 17, 22, 21, 11, 1, 15, 12, 24, 23, 5, 2, 9, 20, 25]);

    this.rotor3 = new Rotor("III", [23, 25, 12, 8, 4, 0, 2, 19, 14, 15, 7, 18, 1, 3, 20, 13, 6, 22, 9, 16, 17, 10, 24, 21, 5, 11]);

    this.rotor4 = new Rotor("IV", [5, 25, 9, 15, 16, 8, 24, 14, 19, 21, 6, 20, 18, 12, 1, 3, 7, 2, 11, 10, 0, 23, 13, 4, 17, 22]);

    this.rotor5 = new Rotor("V", [8, 16, 12, 23, 24, 0, 15, 2, 14, 17, 13, 7, 20, 10, 19, 18, 25, 5, 4, 22, 21, 1, 6, 11, 9, 3]);

    this.reflector = [12, 24, 7, 19, 15, 9, 10, 2, 22, 5, 6, 23, 0, 18, 21, 4, 17, 16, 13, 3, 25, 14, 8, 11, 1, 20];

    this.right_rotor = null;
    this.center_rotor = null;
    this.left_rotor = null;
  }

  put_rotor_in_position(rotor, position) {
    switch (rotor) {
      case "I":
        rotor = this.rotor1;
        break;

      case "II":
        rotor = this.rotor2;
        break;

      case "III":
        rotor = this.rotor3;
        break;

      case "IV":
        rotor = this.rotor4;
        break;

      case "V":
        rotor = this.rotor5;
        break;
    
      default:
        console.log("ERROR: (EnigmaMachine@put_rotor_in_position) Unknown value '" + rotor + "' for 'rotor'");
        return false;
        break;
    }

    switch (position) {
      case "right":
        this.right_rotor = rotor;
        break;

      case "center":
        this.center_rotor = rotor;
        break;
  
      case "left":
        this.left_rotor = rotor;
        break;
        
      default:
        console.log("ERROR: (EnigmaMachine@put_rotor_in_position) Unknown value '" + position + "' for 'position'");
        return false;
        break;
    }

    return true;
  }

  spin_rotors() {
    if(this.center_rotor.setting == 25 && this.right_rotor.setting == 25) this.left_rotor.spin();
    if(this.right_rotor.setting == 25) this.center_rotor.spin();
    this.right_rotor.spin();
    return this.toString();
  }

  get_cipher_for_letter(letter) {
    if (this.right_rotor == null || this.center_rotor == null || this.left_rotor == null) {
      console.log("ERROR: Rotors are not in place");
      return false;
    }
    //Ignore plugs for now

    // Take input letter through rotors, right to left.
    var output_of_entry_wheel = CHAR_CODE_OF_A - letter.charCodeAt(0);
    var output_of_right_rotor = this.right_rotor.route_forward(output_of_entry_wheel);
    var output_of_center_rotor = this.center_rotor.route_forward(output_of_right_rotor);
    var output_of_left_rotor = this.left_rotor.route_forward(output_of_center_rotor);

    // Take result back through rotors from left to right.
    var output_of_reflector = this.reflector[output_of_left_rotor];
    output_of_left_rotor = this.left_rotor.route_reversed(output_of_reflector);
    output_of_center_rotor = this.center_rotor.route_reversed(output_of_left_rotor);
    output_of_right_rotor = this.right_rotor.route_reversed(output_of_center_rotor);

    this.spin_rotors();
    return String.fromCharCode(CHAR_CODE_OF_A + output_of_right_rotor);
  }

  toString() {
    var left_position = "unset";
    var center_position = "unset";
    var right_position = "unset";
    if(this.left_rotor != null) left_position = `${this.left_rotor.label}:${this.left_rotor.setting_as_letter().toUpperCase()}`;
    if(this.center_rotor != null) center_position = `${this.center_rotor.label}:${this.center_rotor.setting_as_letter().toUpperCase()}`;
    if(this.right_rotor != null) right_position = `${this.right_rotor.label}:${this.right_rotor.setting_as_letter().toUpperCase()}`;
    var str = `[${left_position}, ${center_position}, ${right_position}]`;
    return str;
  }
}