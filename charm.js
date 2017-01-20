/* declaration of an object constructor of charms, since each element of the charms' array 
will contain a charm Object. With functions like show and move, it can also be verified
if the charm has it the spell (if it hits, it will confirm on the program to delete the charm 
from the array and therefore from the screen)*/

function Charm(x, y) {
   this.x = x; // to be able to draw different charms in diff positions
   this.y = y;
   this.r = 40;
   this.toDelete = false;
   this.xdir = 2;
   
   //to show the charms from level 1
   this.showBlue = function() {
      fill(255, 0, 200);
      image(images[2], this.x, this.y);
   }

   //charms from level 2 and 3
   this.showPink = function() {
      fill(255, 0, 200);
      image(images[14], this.x, this.y);
   }

   this.showGreen = function() {
      fill(255, 0, 200);
      image(images[15], this.x, this.y);
   }

   this.move = function() {
      this.x -= 0.5;
   }

   //level 3 mode, charms move faster
   this.moveFaster = function() {
      this.x -= 2;
   }


   this.clear = function() {
      this.toDelete = true;
   }
   
   //to check if a spell hits a charm
   this.hits = function(charm) {
      var d = dist(this.x, this.y, spell.x, spell.y);
      if (d < this.r + spell.r) {
         return true;
      } else return false;
   }

   this.getX = function() {
      return this.x;
   }

   this.getY = function() {
      return this.y;
   }
}