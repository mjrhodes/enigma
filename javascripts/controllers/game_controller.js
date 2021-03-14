class GameController {
  constructor() {
    // init model classes
    this.enigma_machine = new EnigmaMachine();

    // init view classes
    this.main_drawer = new MainDrawer();
    this.enigma_drawer = new EnigmaDrawer();

    // init controller classes
  }

  update() {
  }

  draw() {
    this.main_drawer.clear_screen();
    var left_rotor_setting = this.enigma_machine.left_rotor == null ? null : this.enigma_machine.left_rotor.setting_as_letter().toUpperCase();
    var center_rotor_setting = this.enigma_machine.center_rotor == null ? null : this.enigma_machine.center_rotor.setting_as_letter().toUpperCase();
    var right_rotor_setting = this.enigma_machine.right_rotor == null ? null : this.enigma_machine.right_rotor.setting_as_letter().toUpperCase();
    this.enigma_drawer.draw(left_rotor_setting, center_rotor_setting, right_rotor_setting);
  }
}