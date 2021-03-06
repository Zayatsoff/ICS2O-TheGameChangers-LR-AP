// keyCodes: http://keycode.info/

function preload() {

  gameLogo = loadImage('https://i.imgur.com/G36MJb4.png');
  bgIMG = loadImage('https://i.imgur.com/K4nIOAW.jpg');
  char1 = loadImage('https://i.imgur.com/tF9LW7z.png');
  char2 = loadImage('https://i.imgur.com/IuWv9Ll.png');
  level1bg = loadImage('https://i.imgur.com/jcSn7hc.jpg');
  level2bg = loadImage('https://i.imgur.com/FgzAsGQ.jpg');
  //10$
  coin1 = loadImage('https://i.imgur.com/953ODrC.png');
  //15$
  coin2 = loadImage('https://i.imgur.com/Ez119et.png');
  //20$
  coin3 = loadImage('https://i.imgur.com/01TBZBQ.png');
  //50$
  coin4 = loadImage('https://i.imgur.com/FAT0qp7.png');
  //100$
  coin5 = loadImage('https://i.imgur.com/2KzYn6t.png');
}
//Variables
let splash;
var confet = [];
var SceneNum = 0;
var player;
var keyUsed = 0;
var bgColour;
var leaf = [];
var numLeaf = 100;
var plat = [];
let OurChar = null;
var coin = [];
var money = 0;
var questions = [];
var questions2 = [];
var quest = 0;


function setup() {
  createCanvas(550, 400);
  for (var i = 0; i < 3; i++) {
    questions[i] = new Questions();
    questions2[i] = new Questions2();
  }
    //splash screen
    splash = new Splash();
    //confetti
    for (var i = 0; i < 500; i++) {
      confet[i] = new Confetti();
    }
    player = new Player();
    for (var i = 0; i <= numLeaf; i++) {
      leaf[i] = new Leaf();
    }

    for (var i = 0; i <= 26; i++) {
      plat[i] = new Plat(i);
    }

    for (var i = 0; i <= 10; i++) {
      coin[i] = new Coin();
    }

    player = new Player();
    ground = new Ground();
  }

  function draw() {

    //Menu
    if (SceneNum === 1) {
      aksMenu();
    }
    //Instructions
    else if (SceneNum === 2) {
      aksInstructions();
    }
    //Play Screen1
    else if (SceneNum === 3) {
      aksPlayScreen();
    }
    //About us
    else if (SceneNum === 6) {
      aksAboutUs();
    }
    //Play
    else if (SceneNum === 7) {
      playDev();
    } else if (SceneNum === 10) {
      playDev2();
    }

    //Settings
    else if (SceneNum === 8) {
      aksSettings();
    }
    // Win screens
    else if (SceneNum === 9) {
      aksLvl1Win();

    } else if (SceneNum === 11) {
      akslvl2Win();
    } else if (SceneNum === 12) {
      questions[0].display();
    } else if (SceneNum === 13) {
      questions2[0].display();
    }
    //Splash
    else {
      push();
      splash.update();
      splash.show();
      pop();
      if (keyCode === 32 && SceneNum === 0) {
        aksMenu();
      }
    }

  }

  function mouseClicked() {
    //Open Instructions from Menu
    if (SceneNum === 1 && mouseX >= 180 && mouseX <= 335 && mouseY >= 255 && mouseY <= 295) {
      aksInstructions();
      SceneNum = 2;
    }
    //Back to Menu from Instructions
    else if (SceneNum === 2 && mouseX >= 30 && mouseX <= 90 && mouseY >= 325 && mouseY <= 375) {
      aksMenu();
      SceneNum = 1;
    }
    //Open Play screen from Menu
    else if (SceneNum === 1 && mouseX >= 215 && mouseX <= 385 && mouseY >= 330 && mouseY <= 370) {
      aksPlayScreen();
      SceneNum = 3;
    } else if (SceneNum === 1 && mouseX >= 15 && mouseX <= 135 && mouseY >= 205 - 5 && mouseY <= 235) {
      aksAboutUs();
      SceneNum = 6;
    }
    //Back to Menu from Instructions
    else if (SceneNum === 6 && mouseX >= 30 && mouseX <= 90 && mouseY >= 325 && mouseY <= 375) {
      aksMenu();
      SceneNum = 1;
    }

    //Back to Menu from Instructions
    else if (SceneNum === 3 && mouseX >= 200 && mouseX <= 290 && mouseY >= 300 && mouseY <= 400) {
      playDev();
      SceneNum = 7;
      //
    }
    //Open Settings screen from Menu
    else if (SceneNum === 1 && mouseX >= 340 && mouseX <= 500 && mouseY >= 225 - 5 && mouseY <= 270) {
      aksSettings();
      SceneNum = 8;
    }
    //Back to Menu from Instructions
    else if (SceneNum === 8 && mouseX >= 30 && mouseX <= 90 && mouseY >= 325 && mouseY <= 375) {
      aksMenu();
      SceneNum = 1;
    }
    //Settings : Rainbow colour  285, 80, 65, 30, 8
    else if (SceneNum === 8 && mouseX >= 280 && mouseX <= 280 + 65 && mouseY >= 80 && mouseY <= 110) {
      bgColour = 1;
    }

    //Settings : noRainbow
    else if (SceneNum === 8 && mouseX >= 385 && mouseX <= 385 + 100 && mouseY >= 80 && mouseY <= 110) {
      bgColour = 0;

    }

    //Settings : Easy
    else if (SceneNum === 8 && mouseX >= 210 && mouseX <= 280 && mouseY >= 175 && mouseY <= 175 + 30) {
      aksMenu();
      SceneNum = 1;
    }

    //Settings : Hard
    else if (SceneNum === 8 && mouseX >= 310 && mouseX <= 440 && mouseY >= 175 && mouseY <= 175 + 30) {
      aksMenu();
      background(255);
      SceneNum = 1;

    }
    // Char select
    else if (SceneNum === 3 && mouseX >= 125 && mouseX <= 205 && mouseY >= 120 && mouseY <= 240) {
      OurChar = char1;

    } else if (SceneNum === 3 && mouseX >= 325 && mouseX <= 405 && mouseY >= 120 && mouseY <= 240) {
      OurChar = char2;
    }

    // From win to next level
    else if (SceneNum === 9 && mouseX >= width / 2 - 30 && mouseX <= (width / 2 - 30) + 70 && mouseY >= 300 && mouseY <= 340) {
      player.y = height - player.h;
      player.x = width / 2;
      playDev2();
      SceneNum = 10;

    }

    //from win to main menu
    else if (sceneNum = 11 && mouseX >= 245 && mouseX <= 315 && mouseY >= 300 && mouseY <= 340) {
background(50);
    }

    // question time
    else if (quest === 1 && mouseX >= 230 && mouseX <= 330 && mouseY >= 200 && mouseY <= 250) {
      aksLvl1Win();
    } else if (quest === 2 && mouseX >= 380 && mouseX <= 480 && mouseY >= 200 && mouseY <= 250) {
      aksLvl1Win();
    } else if (quest === 3 && mouseX >= 80 && mouseX <= 180 && mouseY >= 200 && mouseY <= 250) {
      aksLvl1Win();
    } else if (quest === 4 && mouseX >= 230 && mouseX <= 330 && mouseY >= 200 && mouseY <= 250) {
      akslvl2Win();
    } else if (quest === 5 && mouseX >= 380 && mouseX <= 480 && mouseY >= 200 && mouseY <= 250) {
      akslvl2Win();
    } else if (quest === 6 && mouseX >= 80 && mouseX <= 180 && mouseY >= 200 && mouseY <= 250) {
      akslvl2Win();
    }
  }
