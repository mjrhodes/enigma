function game_start() {
  // init stuff
  requestAnimationFrame(game_loop);
}

function game_loop() {
  game_controller.update();
  game_controller.draw();
  requestAnimationFrame(game_loop);
}