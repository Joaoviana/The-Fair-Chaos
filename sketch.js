
// THE FAIR CHAOS GAME
// AN ARCADE GAME WHERE THE PURPOSE IS TO USE YOUR MAGICIAN'S SPELLS TO DESTROY THE ENEMY'S CHARMS

// important variables
var mainMenu, playMenu, winningMenu, losingMenu, levelsMenu, pauseMenu, howToPlayMenu, spell, magician, charactersMenu;

//images array
var images = [];

//sounds array
var sounds = [];

//array of spells
var spells = [];
var specialSpells = [];

//initialising a state, where state 0 is the main menu
var state = 0;

//current state, in order to create the pause feature
var currentState;

//initialising character variable: charles:0;albert:1;angus:2
var characterChosen;

/*preload of important images, such as the menus, the magician, spell, charm and background image
also, preload of sounds*/
function preload() {
   images[0] = loadImage("charlesImage.png");
   images[1] = loadImage("spellImage.png");
   images[2] = loadImage("charmImage.png");
   images[3] = loadImage("charlesBackground.png"); 
   images[4] = loadImage("mainMenuImage.png"); 
   images[5] = loadImage("winningMenuImage.png"); 
   images[6] = loadImage("losingMenuImage.png"); 
   images[7] = loadImage("levelsMenuImage.png"); 
   images[8] = loadImage("charactersMenuImage.png"); 
   images[9] = loadImage("albertImage.png");
   images[10] = loadImage("angusImage.png");
   images[11] = loadImage("mouseCursorImage.png");
   images[12] = loadImage("albertBackground.png");
   images[13] = loadImage("angusBackground.png");
   images[14] = loadImage("pinkCharm.png");
   images[15] = loadImage("greenCharm.png");
   images[16] = loadImage("specialSpell.png");
   images[17] = loadImage("newLevelsMenuImage.png");
   images[18] = loadImage("pauseMenuImage.png");
   images[19] = loadImage("howToPlayMenuImage.png");

   sounds[0] = loadSound("spell.wav");
   sounds[1] = loadSound("hits.wav");
   sounds[2] = loadSound("mainMenuTheme.mp3");
   sounds[3] = loadSound("winningTheme.wav");
   sounds[4] = loadSound("losingTheme.wav");
}

function setup() {

   frameRate(100);
   noCursor();
   createCanvas(800, 600);

   //instantiation of several menus
   mainMenu = new MainMenu();
   playMenu = new PlayMenu();
   winningMenu = new WinningMenu();
   losingMenu = new LosingMenu();
   levelsMenu = new LevelsMenu();
   charactersMenu = new CharactersMenu();
   pauseMenu = new PauseMenu();
   howToPlayMenu = new HowToPlayMenu();

   //setting up the array of charms
   
   //blueCharms for level 1
   for (var i = 0; i < 8; i++) {
      blueCharms[i] = new Charm(width - 20, i * 60 + 40);
   }

   //pink and green charms for level 2 an 3
   for (var i = 0; i < 4; i++) {
      pinkCharms[i] = new Charm(width - 20, i * 150 + 70);
      greenCharms[i] = new Charm(width - 20, i * 150);
      pinkCharmsThree[i] = new Charm(width - 20, i * 150 + 70);
      greenCharmsThree[i] = new Charm(width - 20, i * 150);
   }
}

function draw() {
   //MAIN MENU STATE
   if (state == 0) {
      mainMenu.show();
   }
   
   //HOW TO PLAY MENU STATE
   if (state == 10) {
      howToPlayMenu.show();
   }

   //LEVELS MENU STATE
   if (state == 1) {
      levelsMenu.show();
   }

   //CHARACTERS MENU STATE for level 1 2 and 3 RESPECTIVELY 
   if (state == 3 || state == 2 || state == 9) {
      charactersMenu.show();
   }

   //PLAYING MENU STATE FOR LEVEL 1
   if (state == 4) {
      if (characterChosen == 0) {
         playMenu.charlesBackground();
         magician.charles();
      } else if (characterChosen == 1) {
         playMenu.albertBackground();
         magician.albert();
      } else if (characterChosen == 2) {
         playMenu.angusBackground();
         magician.angus();
      }
      playMenu.showLevelOne();
      playMenu.checkIfWonLevelOne();
      playMenu.checkIfLostLevelOne();
      playMenu.buttonX();
   }

   //WINNING MENU STATE
   if (state == 5) {
      setup();
      sounds[3].play();
      winningMenu.show();
   }

   //LOSING MENU STATE
   if (state == 6) {
      sounds[4].play();
      losingMenu.show();
   }

   // PLAYING MENU STATE FOR LEVEL 2
   if (state == 7) {
      if (characterChosen == 0) {
         playMenu.charlesBackground();
         magician.charles();
      } else if (characterChosen == 1) {
         playMenu.albertBackground();
         magician.albert();
      } else if (characterChosen == 2) {
         playMenu.angusBackground();
         magician.angus();
      }
      playMenu.showLevelTwo();
      playMenu.checkIfWonLevelTwo();
      playMenu.checkIfLostLevelTwo();
      playMenu.buttonX();
   }

   // PLAYING MENU STATE FOR LEVEL 3
   if (state == 8) {
      if (characterChosen == 0) {
         playMenu.charlesBackground();
         magician.charles();
      } else if (characterChosen == 1) {
         playMenu.albertBackground();
         magician.albert();
      } else if (characterChosen == 2) {
         playMenu.angusBackground();
         magician.angus();
      }
      playMenu.showLevelThree();
      playMenu.checkIfWonLevelThree();
      playMenu.checkIfLostLevelThree();
      playMenu.buttonX();
   }

   //PAUSE MENU STATE
   if (state == 11) {
      pauseMenu.show();
   }

   //MOUSE CURSOR IMAGE
   image(images[11], mouseX, mouseY);
}

function keyPressed() {
   //If up arrow pressed, magician moves up and vice-versa
   if (keyCode == UP_ARROW) {
      magician.move(-1);
   } else if (keyCode == DOWN_ARROW) {
      magician.move(1);
   }

   //If space tab pressed, magician throws a spell(star)
   if (keyCode == 32) {
      var spell = new Spell(40, magician.y);
      spells.push(spell); // adds a spell to the spells array
      sounds[0].play();
   }

   //If enter button pressed, magician throws a special spell (yellow and purple star)
   if (keyCode == 13) {
      var specialSpell = new Spell(40, magician.y);
      specialSpells.push(specialSpell); // adds a spell to the spells array
      sounds[0].play();
   }

   //if esc key is pressed, pauses the game 
   if (keyCode == 27 && (state == 4 || state == 7 || state == 8)) {
      currentState = state;
      state = 11;
   }

}

function mousePressed() {
   if (state == 0) {
      //PLAY BUTTON ON MAIN MENU
      if (mouseX > 258 && mouseX < 521 && mouseY > 351 && mouseY < 457) {
         state = 1;
      //HOW TO PLAY BUTTON
      } else if (mouseX > 294 && mouseX < 480 && mouseY > 476 && mouseY < 554) {
         state = 10;
      }
   } else if (state == 1) {
      //LEVEL ONE BUTTON
      if (mouseX > 82 && mouseX < 256 && mouseY > 256 && mouseY < 374) {
         state = 2;
      }
      //LEVEL TWO BUTTON
      else if (mouseX > 300 && mouseX < 483 && mouseY > 248 && mouseY < 362) {
         state = 3;
      }
      //LEVEL THREE BUTTON
      else if (mouseX > 556 && mouseX < 730 && mouseY > 246 && mouseY < 366) {
         state = 9;
      }
   } else if (state == 2) {
      //LEVEL ONE
      //CHARLES CHOSEN
      if (mouseX > 51 && mouseX < 230 && mouseY > 170 && mouseY < 524) {
         state = 4;
         characterChosen = 0;
      }//ALBERT CHOSEN 
      else if (mouseX > 312 && mouseX < 490 && mouseY > 180 && mouseY < 524) {
         state = 4;
         characterChosen = 1;
      } //ANGUS CHOSEN 
      else if (mouseX > 580 && mouseX < 758 && mouseY > 172 && mouseY < 522) {
         state = 4;
         characterChosen = 2;
      }

   } else if (state == 3) {
      //LEVEL TWO
       //CHARLES CHOSEN
      if (mouseX > 51 && mouseX < 230 && mouseY > 170 && mouseY < 524) {
         state = 7;
         characterChosen = 0;
      }//ALBERT CHOSEN  
      else if (mouseX > 312 && mouseX < 490 && mouseY > 180 && mouseY < 524) {
         state = 7;
         characterChosen = 1;
      }//ANGUS CHOSEN 
      else if (mouseX > 580 && mouseX < 758 && mouseY > 172 && mouseY < 522) {
         state = 7;
         characterChosen = 2;
      }
   } else if (state == 9) {
      //LEVEL THREE
      //CHARLES CHOSEN 
      if (mouseX > 51 && mouseX < 230 && mouseY > 170 && mouseY < 524) {
         state = 8;
         characterChosen = 0;
      }//ALBERT CHOSEN 
      else if (mouseX > 312 && mouseX < 490 && mouseY > 180 && mouseY < 524) {
         state = 8;
         characterChosen = 1;
      }//ANGUS CHOSEN  
      else if (mouseX > 580 && mouseX < 758 && mouseY > 172 && mouseY < 522) {
         state = 8;
         characterChosen = 2;
      }
   } else if (state == 5) {
      // IF YOU WANT CLICKED ON THE BUTTON TO GO BACK TO MAIN MENU
      if (mouseX > 221 && mouseX < 581 && mouseY > 351 && mouseY < 453) {
         setup(); // refreshes the elements of the arrays that were deleted
         state = 0;
         sounds[3].stop();
      }
   } else if (state == 6) {
      // IF YOU WANT CLICKED ON THE BUTTON TO GO BACK TO MAIN MENU
      if (mouseX > 221 && mouseX < 581 && mouseY > 351 && mouseY < 453) {
         setup(); // refreshes the elements of the arrays that were deleted
         state = 0;
         sounds[4].stop();
      }
   } else if (state == 11) {
      // GAME PAUSED BUT YOU CLICK THE BUTTON  'GO BACK' TO UNPAUSE IT
      if (mouseX > 262 && mouseX < 528 && mouseY > 354 && mouseY < 456) {
         state = currentState;
      }

   } else if (state == 10) {
      //HOW TO PLAY MENU AND GOING BACK TO THE MAIN MENU
      if (mouseX > 636 && mouseX < 792 && mouseY > 520 && mouseY < 592) {
         state = 0;
      }
   }

}