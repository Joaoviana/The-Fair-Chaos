var blueCharms = []; // array of charms for level 1

// 2 arrays of charms for level 2 
var pinkCharms = [];
var greenCharms = [];

// 2 arrays of charms for level 3
var pinkCharmsThree = [];
var greenCharmsThree = [];


//initialising score variable in order to update it everytime a spell hits a charm
var score = 0;
var scoreText;

function PlayMenu() {

   this.charlesBackground = function() {
      image(images[3], 0, 0);
   }

   this.albertBackground = function() {
      image(images[12], 0, 0);
   }

   this.angusBackground = function() {
      image(images[13], 0, 0);
   }

   /* level one funtion, makes charms show/move, spells display and move from the 
   magicians coordinates; checks if they charms and spells collide, so that
   they can be deleted from the array*/

   this.showLevelOne = function() {
      for (var i = 0; i < blueCharms.length; i++) {
         blueCharms[i].showBlue();
         blueCharms[i].move();
      }

      for (var i = 0; i < spells.length; i++) {
         spells[i].show();
         spells[i].move();
         for (var j = 0; j < blueCharms.length; j++) {
            if (spells[i].hits(blueCharms[j])) {
               sounds[1].play();
               spells[i].clear();
               blueCharms[j].clear();
            }
         }
      }

      for (var i = spells.length - 1; i >= 0; i--) {
         if (spells[i].toDelete) {
            spells.splice(i, 1);
            score += 100;
         }
      }

      textSize(60);
      text(score, 700, 50);
      fill(0, 0, 0);

      for (var i = blueCharms.length - 1; i >= 0; i--) {
         if (blueCharms[i].toDelete) {
            blueCharms.splice(i, 1);
         }
      }
   }

   /* If theres no more blue charms left, you have won the game*/
   this.checkIfWonLevelOne = function() {
      if (blueCharms.length == 0) {
         println("clear");
         state = 5;
      }
   }

   //if one blue charm surpasses the magician, you lose
   this.checkIfLostLevelOne = function() {
      for (i = 0; i < blueCharms.length; i++) {
         if (blueCharms[i].getX() < 0) {
            state = 6;
         }
      }
   }

   //click the x button to go back to main Menu
   this.buttonX = function() {
      if (mouseIsPressed) {
         if (mouseX > 721 && mouseX < 780 && mouseY > 540 && mouseY < 575) {
            state = 0;
         }
      }
   }

   /* level two funtion, makes pink and green charms show/move, spells  and special spells
    display and move from the magicians coordinates; checks if they charms and spells collide, so that
   they can be deleted from the array*/
   this.showLevelTwo = function() {
      for (var i = 0; i < pinkCharms.length; i++) {
         pinkCharms[i].showPink();
         pinkCharms[i].move();
      }

      for (var i = 0; i < greenCharms.length; i++) {
         greenCharms[i].showGreen();
         greenCharms[i].move();
      }

      for (var i = 0; i < spells.length; i++) {
         spells[i].show();
         spells[i].move();
         for (var k = 0; k < greenCharms.length; k++) {
            if (spells[i].hits(greenCharms[k])) {
               sounds[1].play();
               spells[i].clear();
               greenCharms[k].clear();
            }
         }
      }

      for (var i = 0; i < specialSpells.length; i++) {
         specialSpells[i].showSpecialSpell();
         specialSpells[i].move();
         for (var j = 0; j < pinkCharms.length; j++) {
            if (specialSpells[i].hits(pinkCharms[j])) {
               sounds[1].play();
               specialSpells[i].clear();
               pinkCharms[j].clear();
            }
         }
      }

      for (var i = spells.length - 1; i >= 0; i--) {
         if (spells[i].toDelete) {
            spells.splice(i, 1);
            score += 100;
         }
      }

      for (var i = specialSpells.length - 1; i >= 0; i--) {
         if (specialSpells[i].toDelete) {
            specialSpells.splice(i, 1);
            score += 50;
         }
      }

      textSize(60);
      text(score, 700, 50);
      fill(0, 0, 0);

      for (var i = pinkCharms.length - 1; i >= 0; i--) {
         if (pinkCharms[i].toDelete) {
            pinkCharms.splice(i, 1);
         }
      }

      for (var i = greenCharms.length - 1; i >= 0; i--) {
         if (greenCharms[i].toDelete) {
            greenCharms.splice(i, 1);
         }
      }
   }

   this.checkIfWonLevelTwo = function() {
      if (pinkCharms.length == 0 && greenCharms.length == 0) {
         state = 5;
      }
   }

   this.checkIfLostLevelTwo = function() {
      for (i = 0; i < greenCharms.length; i++) {
         if (greenCharms[i].getX() < 0) {
            state = 6;
         }
      }
      for (i = 0; i < pinkCharms.length; i++) {
         if (pinkCharms[i].getX() < 0) {
            state = 6;
         }
      }
   }

   //level 3, the same as level 2 function but in this case, the charms move faster
   this.showLevelThree = function() {
      for (var i = 0; i < pinkCharmsThree.length; i++) {
         pinkCharmsThree[i].showPink();
         pinkCharmsThree[i].moveFaster();
      }

      for (var i = 0; i < greenCharmsThree.length; i++) {
         greenCharmsThree[i].showGreen();
         greenCharmsThree[i].moveFaster();
      }

      for (var i = 0; i < spells.length; i++) {
         spells[i].show();
         spells[i].move();
         for (var k = 0; k < greenCharmsThree.length; k++) {
            if (spells[i].hits(greenCharmsThree[k])) {
               sounds[1].play();
               spells[i].clear();
               greenCharmsThree[k].clear();
            }
         }
      }

      for (var i = 0; i < specialSpells.length; i++) {
         specialSpells[i].showSpecialSpell();
         specialSpells[i].move();
         for (var j = 0; j < pinkCharmsThree.length; j++) {
            if (specialSpells[i].hits(pinkCharmsThree[j])) {
               sounds[1].play();
               specialSpells[i].clear();
               pinkCharmsThree[j].clear();
            }
         }
      }

      for (var i = spells.length - 1; i >= 0; i--) {
         if (spells[i].toDelete) {
            spells.splice(i, 1);
            score += 100;
         }
      }

      for (var i = specialSpells.length - 1; i >= 0; i--) {
         if (specialSpells[i].toDelete) {
            specialSpells.splice(i, 1);
            score += 50;
         }
      }

      textSize(60);
      text(score, 700, 50);
      fill(0, 0, 0);

      for (var i = pinkCharmsThree.length - 1; i >= 0; i--) {
         if (pinkCharmsThree[i].toDelete) {
            pinkCharmsThree.splice(i, 1);
         }
      }

      for (var i = greenCharmsThree.length - 1; i >= 0; i--) {
         if (greenCharmsThree[i].toDelete) {
            greenCharmsThree.splice(i, 1);
         }
      }
   }
   
   this.checkIfWonLevelThree = function() {
      if (pinkCharmsThree.length == 0 && greenCharmsThree.length == 0) {
         state = 5;
      }
   }

   this.checkIfLostLevelThree = function() {
      for (i = 0; i < greenCharmsThree.length; i++) {
         if (greenCharmsThree[i].getX() < 0) {
            state = 6;
         }
      }
      for (i = 0; i < pinkCharmsThree.length; i++) {
         if (pinkCharmsThree[i].getX() < 0) {
            state = 6;
         }
      }
   }


}