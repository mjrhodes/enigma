class GameController {
  constructor() {
    // init model classes
    this.enigma_machine = new EnigmaMachine();

    // init view classes
    this.main_drawer = new MainDrawer();

    // init controller classes
  }

  update() {
  }

  draw() {
    this.main_drawer.clear_screen();
  }
}