class TestController {
  constructor() {
    this.failures = [];
  }

  test_rotor() {
    var rotor = new Rotor("TEST", [17, 11, 18, 12, 21, 23, 0, 25, 9, 15, 14, 16, 7, 2, 5, 13, 1, 22, 6, 3, 24, 19, 20, 10, 8, 4]);
    rotor.change_setting(7);
    if(rotor.setting != 7) this.failures.push("Failed to change setting: expected 7 got " + rotor.setting);
    if(rotor.get_letter_from_number(0).toUpperCase() !== 'A') this.failures.push("Failed to get 'A' from 0: expected 'A' got '" + rotor.get_letter_from_number(0).toUpperCase() + "'");
    if(rotor.get_letter_from_number(25).toUpperCase() !== 'Z') this.failures.push("Failed to get 'Z' from 25: expected 'Z' got '" + rotor.get_letter_from_number(25).toUpperCase() + "'");
    if(rotor.get_letter_from_number(rotor.setting).toUpperCase() !== 'H') this.failures.push("Failed to get 'H' from setting: expected 'H' got '" + rotor.get_letter_from_number(rotor.setting).toUpperCase() + "'");
    if(rotor.setting_as_letter().toUpperCase() !== 'H') this.failures.push("Failed to get 'H' from setting as letter: expected 'H' got '" + rotor.setting_as_letter().toUpperCase() + "'");

    rotor.spin();
    if(rotor.setting != 8) this.failures.push("Failed to spin from 7: expected 8 got " + rotor.setting);
    rotor.change_setting(25);
    rotor.spin();
    if(rotor.setting != 0) this.failures.push("Failed to spin from 25: expected 0 got " + rotor.setting);

    if(rotor.route_forward(0) != 17) this.failures.push("Failed to route forward from 0 to 17: expected 17 got " + rotor.route_forward(0));
    if(rotor.route_forward(5) != 23) this.failures.push("Failed to route forward from 5 to 23: expected 23 got " + rotor.route_forward(5));
    if(rotor.route_forward(25) != 4) this.failures.push("Failed to route forward from 25 to 4: expected 4 got " + rotor.route_forward(25));
  
    if(rotor.route_reversed(17) != 0) this.failures.push("Failed to route forward from 17 to 0: expected 0 got " + rotor.route_reversed(17));
    if(rotor.route_reversed(23) != 5) this.failures.push("Failed to route forward from 23 to 5: expected 5 got " + rotor.route_reversed(23));
    if(rotor.route_reversed(4) != 25) this.failures.push("Failed to route forward from 4 to 25: expected 25 got " + rotor.route_reversed(4));
  }

  test_enigma_machine() {
    var enigma = new EnigmaMachine();
    enigma.put_rotor_in_position("I", "right");
    if(!(enigma.right_rotor instanceof Rotor)) this.failures.push("Failed to put rotor in 'right' position: right_rotor not an instance of 'Rotor'");
    if(enigma.right_rotor.label !== "I") this.failures.push("Failed to put rotor 'I' in 'right' position: expected label to be 'I' got " + enigma.right_rotor.label);
    
    enigma.put_rotor_in_position("II", "center");
    if(!(enigma.center_rotor instanceof Rotor)) this.failures.push("Failed to put rotor in 'center' position: center_rotor not an instance of 'Rotor'");
    if(enigma.center_rotor.label !== "II") this.failures.push("Failed to put rotor 'II' in 'center' position: expected label to be 'II' got " + enigma.center_rotor.label);

    enigma.put_rotor_in_position("IV", "left");
    if(!(enigma.left_rotor instanceof Rotor)) this.failures.push("Failed to put rotor in 'left' position: left_rotor not an instance of 'Rotor'");
    if(enigma.left_rotor.label !== "IV") this.failures.push("Failed to put rotor 'IV' in 'left' position: expected label to be 'IV' got " + enigma.left_rotor.label);

    var rotor_settings = enigma.left_rotor.label + ", " + enigma.center_rotor.label + ", " + enigma.right_rotor.label;
    if(rotor_settings != "IV, II, I") this.failures.push("Failed to set rotors: expected 'IV, II, I' got " + rotor_settings);

    enigma.put_rotor_in_position("I", "right");
    enigma.put_rotor_in_position("II", "center");
    enigma.put_rotor_in_position("III", "left");
    enigma.right_rotor.change_setting(0);
    enigma.center_rotor.change_setting(0);
    enigma.left_rotor.change_setting(0);
    var letter = 'a';
    var output_of_entry_wheel = CHAR_CODE_OF_A - letter.charCodeAt(0);
    if(output_of_entry_wheel != 0) this.failures.push("Failed to get expected value for output_of_entry_wheel: expected 0 got " + output_of_entry_wheel);
    var output_of_right_rotor = enigma.right_rotor.route_forward(output_of_entry_wheel);
    if(output_of_right_rotor != 0) this.failures.push("Failed to get expected value for output_of_right_rotor: expected 0 got " + output_of_right_rotor);
    var output_of_center_rotor = enigma.center_rotor.route_forward(output_of_right_rotor);
    if(output_of_center_rotor != 14) this.failures.push("Failed to get expected value for output_of_center_rotor: expected 14 got " + output_of_center_rotor);
    var output_of_left_rotor = enigma.left_rotor.route_forward(output_of_center_rotor);
    if(output_of_left_rotor != 20) this.failures.push("Failed to get expected value for output_of_left_rotor: expected 20 got " + output_of_left_rotor);

    var output_of_reflector = enigma.reflector[output_of_left_rotor];
    if(output_of_reflector != 25) this.failures.push("Failed to get expected value for output_of_reflector: expected 25 got " + output_of_reflector);
    output_of_left_rotor = enigma.left_rotor.route_reversed(output_of_reflector);
    if(output_of_left_rotor != 1) this.failures.push("Failed to get expected value for output_of_left_rotor: expected 1 got " + output_of_left_rotor);
    output_of_center_rotor = enigma.center_rotor.route_reversed(output_of_left_rotor);
    if(output_of_center_rotor != 16) this.failures.push("Failed to get expected value for output_of_center_rotor: expected 16 got " + output_of_center_rotor);
    output_of_right_rotor = enigma.right_rotor.route_reversed(output_of_center_rotor);
    if(output_of_right_rotor != 6) this.failures.push("Failed to get expected value for output_of_right_rotor: expected 6 got " + output_of_right_rotor);

    var bulb = String.fromCharCode(CHAR_CODE_OF_A + output_of_right_rotor);
    if(bulb !== 'g') this.failures.push("Failed to light expected bulb: expected 'g' got " + bulb);

    var cipher = enigma.get_cipher_for_letter('a');
    if(cipher !== 'g') this.failures.push("Failed to get expected cipher: expected 'g' got " + cipher);
  }

  perform_tests() {
    this.test_rotor();
    this.test_enigma_machine();
    if(this.failures.length == 0) return true;
    this.failures.forEach(failure => {
      console.log(failure);
    });
    return false;
  }

}