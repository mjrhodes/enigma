class EnigmaDrawer {
  constructor() {
    this.rotors_position = {x: 50, y: 50}
    this.space_between_rotors = 10;
    this.rotor_width = 25;
    this.rotor_height = 75;
  }

  draw_label(label, font_size, rotor_x, rotor_y) {
    var rotor_center = {x: rotor_x + (this.rotor_width/2), y: rotor_y + (this.rotor_height/2)}
    cc.textAlign = 'center';
    cc.fillText(label, rotor_center.x, rotor_center.y);
  }

  draw_rotors(left_rotor_setting, center_rotor_setting, right_rotor_setting) {
    cc.strokeStyle = 'black';
    cc.lineWidth = 2;
    var font_size = 24;
    cc.font = font_size+'px sans-serif';
    
    // Draw left rotor
    if(left_rotor_setting) cc.strokeRect(this.rotors_position.x, this.rotors_position.y, this.rotor_width, this.rotor_height);
    if(left_rotor_setting) this.draw_label(left_rotor_setting, font_size, this.rotors_position.x, this.rotors_position.y);

    // Draw center rotor
    var center_x = this.rotors_position.x + this.space_between_rotors + this.rotor_width;
    if(center_rotor_setting) cc.strokeRect(center_x, this.rotors_position.y, this.rotor_width, this.rotor_height);
    if(center_rotor_setting) this.draw_label(center_rotor_setting, font_size, center_x, this.rotors_position.y);

    // Draw right rotor
    var right_x = this.rotors_position.x + (this.space_between_rotors*2) + (this.rotor_width*2);
    if(right_rotor_setting) cc.strokeRect(right_x, this.rotors_position.y, this.rotor_width, this.rotor_height);
    if(right_rotor_setting) this.draw_label(right_rotor_setting, font_size, right_x, this.rotors_position.y);
  }

  draw(left_rotor_setting, center_rotor_setting, right_rotor_setting) {
    this.draw_rotors(left_rotor_setting, center_rotor_setting, right_rotor_setting);
  }
}