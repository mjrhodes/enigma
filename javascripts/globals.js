const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;
const CHAR_CODE_OF_A = 97; // 97 to output lower case. 65 to ouput upper case.

var canvas = document.querySelector("canvas");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

var cc = canvas.getContext("2d");

var game_controller = new GameController();
var test_controller = new TestController();