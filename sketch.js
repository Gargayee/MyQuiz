var canvas, background;
var gameState = 0;
var contestantCount, allContestants, answer;
var database;
var question, contestant, riddle;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  riddle = new Riddle();
  riddle.getState();
  riddle.start();
}


function draw(){
  background("pink");
  
    if(contestantCount === 4){
      riddle.update(1);
    }
    if(gameState === 1){
      clear();
      riddle.play();
    }
}
