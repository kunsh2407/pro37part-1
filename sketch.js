var gameState=0, contestantCount, database, quiz, question,canvas,contestant;

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database()
  quiz=new Quiz()
  quiz.getState()
quiz.start()
}


function draw(){
  background("pink");

  
}
