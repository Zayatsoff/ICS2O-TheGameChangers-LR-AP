
function drawButton(x, y, words) {
  fill(255)
  rect(x, y, 70, 40, 6);
  fill(0, 0, 0)
  textAlign(LEFT, TOP)
  textSize(15)
  text(words, x + 15, y + 12);
}

function aksMenu() {
  SceneNum = 1;
  backgroundColour();


  //title
  stroke(2);
  textSize(73);

  fill(255, 255, 255);
  text("Jump", 150, 69  );
  text("or", 205, 122  );
  textSize(65);
  text("Thump!", 130, 180  );
  noStroke();

  //Rules
  textSize(30);
  rect(180, 255, 155, 40, 6);
  fill(0, 0, 0);
  text("Instructions", 180, 285  );

  //aboutUs
  fill(255);
  rect(15, 205, 120, 30, 6);

  fill(0, 0, 0);
  text("About us", 15, 230  );

  //options
  fill(255);
  rect(400, 220, 110, 35, 6);
  fill(0, 0, 0);
  text("Settings", 400, 245  );

  //Play button
  textSize(40);
  fill(255, 0, 0);
  text("Play!", 215, 360  );

  //logo
  fill(0);
  textSize(10);
  text('Made by', width - 115, 320);
  image(gameLogo, width - 100, 300, 100, 100);
  fill(255, 0, 0);
}



function aksInstructions() {
  SceneNum = 2;
  background(255);

  //How to play
  textSize(50);
  fill(255, 0, 0);
  text("How to Play", 140, 50  );

  //objective
  textSize(35);
  fill(0, 0, 255);
  text("Objective:", 100, 95  );

  textSize(25);
  fill(0, 0, 0);
  text("Controle your character throght the levels", 15, 118  );
  text("by avoiding obstacles and answering math ", 15, 138  );
  text("questions as you go.", 16, 158  );


  //rules
  fill(0, 0, 255);
  textSize(35);
  text("Rules:", 100, 220  );

  fill(0, 0, 0);
  textSize(25);
  text("- Use arrow keys to move", 35, 245  );
  text("- Press 'space bar' to jump", 35, 270  );
  text("- Enter the correct value to aswer the", 35, 295  );
  text("question", 35, 315  );

  //backButton
  fill(255);
  rect(30, 350, 60, 30, 6);
  fill(255, 0, 0);
  text("Back", 30, 373  );

}


function aksPlayScreen() {
  SceneNum = 3;

  background(55, 156, 229);

  textSize(45);
  text("Choose your character", 45, 50  )

  //where the character drawings will go
  fill(255);
  rect(125, 120, 80, 120, 6);

  rect(325, 120, 80, 120, 6);
  image(char1, 115, 140, 100, 100);
  image(char2, 295, 120, 130, 130);
  fill(255, 0, 0);
  //begin
  textSize(60);
  text("Play!", 200, 350  );


}


function aksSettings() {
  SceneNum = 8;
  backgroundColour();
  stroke(4);
  textSize(40);
  fill(102, 55, 188);
  text("Settings", 200, 50  );

  textSize(20);
  fill(255);
  text("What background colour?", 30, 100  );
  noStroke();
  //rainbow
  textSize(30);
  fill(255)
  rect(285, 80, 65, 30, 8)
  fill(255, 0, 0);

  text("?", 310, 105  );


  //normal
  fill(255)
  rect(385, 80, 110, 30, 8);
  fill(0, 0, 255);
  text("Normal", 390, 105  );
  textSize(20);
  fill(255);
  stroke(4);

  //text color
  text("How difficult?", 30, 200  );
  noStroke();

  //red
  textSize(30);
  fill(255);
  rect(210, 175, 70, 30, 6);
  fill(255, 0, 0);
  text("Easy", 210, 200  );

  //blue
  fill(255, 255, 255);
  rect(310, 175, 130, 30, 6);
  fill(0, 0, 255);
  text("Hard", 315, 200  );

  //backButton
  fill(255);
  rect(30, 350, 60, 30, 6);
  fill(255, 0, 0);
  textSize(20);
  text("Back", 30, 373  );

}

function aksGameOver() {
  SceneNum = 4;
  background(255, 0, 0);

  textSize(50);
  text("You are a failure!!!!", 70, 200  );

  textSize(30);
  text("Click to try again", 150, 250  );

  text("EXIT", 480, 390  );

}

function aksCorrect() {
  SceneNum = 5;
  background(55, 209, 35);


  fill(0, 0, 0);

  textSize(80);
  text("Great Job!", 90, 200  );
  textSize(35);
  text("Next", 355, 300  );
}


function aksAboutUs() {
  SceneNum = 6;
  background(255, 255, 0);

  //title
  fill(0, 0, 255);
  textSize(35);
  text("About Us", 200, 30  );


  textSize(25);
  text("Developed by the billiant student of ", 20, 100  );
  text("A.Y.Jackson, Lior Rozin and Akash Prasad.", 20, 125  );

  text("This game was inspired by the ideas of Dexter,", 20, 250  )
  text("Abygail, and Jeremy.", 20, 275  );


  textSize(15)
  text("June 21", 450, 390  );

  //backButton
  textSize(25);
  fill(255);
  rect(30, 350, 60, 30, 6);
  fill(255, 0, 0);
  text("Back", 30, 373  );
}

function aksLvl1Win() {
  pop();
  SceneNum = 9;
  background(29, 214, 128)
  textSize(50)
  fill(0)
  text("Congrats!!!", 170, 150)
  //Cofetti

  for (var i = 0; i < 500; i++) {
    confet[i].display();
    confet[i].update();
  }
  drawButton(width / 2 - 30, 300, "Go on")
}

function akslvl2Win() {
  SceneNum = 11;
  
  background(0, 221, 3)
  textSize(50)
  text("YOU WIN!!!!!", 140, 160)
  for (var i = 0; i < 500; i++) {
    confet[i].display();
    confet[i].update();
  }
  drawButton(width / 2 - 30, 300, "Go on")
}

function endScreen() {
pop();
  background(38, 239, 239)
  textSize(40)
text("Thanks for playing!",100,200)
  //confetti
  for (var i = 0; i < 500; i++) {
    confet[i].display();
    confet[i].update();
  }

}
