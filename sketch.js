var map, car, form1, start;
var database, bg;
var order, finish, end, item, databaseitem, databasenum, databaseplace, databasetime;
var game1, game2, game3, game4, game5;
var function1, function2, function3, function4, function0;
var finish1, finish2, finish3, finish4, end1, end2, end3, end4, playerCount;

function preload(){
  bg = loadImage("images/bg.jpg")
}

function setup() {
 createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  start = new Start();
  game1 = new Game();
  game2 = new Game();
  game3 = new Game();
  game4 = new Game();
  game5 = new Game();
  item = new Game();
  function0 = new Function();
  function1 = new Function();
  function2 = new Function();
  function3 = new Function();
  function4 = new Function();
  end1 = new End();
  end2 = new End();
  end3 = new End();
  end4 = new End();
  finish1 = new Finish();
  finish2 = new Finish();
  finish3 = new Finish();
  finish4 = new Finish();
}

function draw() {
  background(bg);
  // background(239, 0, 143)
  start.display();
  touches[0];
}
