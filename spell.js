/* Object Constructor for spell, 
functions that display the normal spell, the special spell, makes it move and checks
if it has hit a charm*/

function Spell(x, y) {
   this.x = x;
   this.y = y;
   this.r = 8;
   this.toDelete = false;

   this.show = function() {
      noStroke();
      fill(10, 100, 200);
      image(images[1], this.x, this.y);
   }

   this.showSpecialSpell = function() {
      noStroke();
      fill(10, 100, 200);
      image(images[16], this.x, this.y);
   }

   this.clear = function() {
      this.toDelete = true;
   }

   this.hits = function(charm) {
      var d = dist(this.x, this.y, charm.x, charm.y);
      if (d < this.r + charm.r) {
         return true;
      } else {
         return false;
      }
   }

   this.move = function() {
      this.x += 1 * 5;
   }
}