/* Declaring new object Magician, the game's main character. 
with functions like: show, which displays the character on screen; 
move; 
check, to check the distance between the magician and the charms*/

var magician = new Object();

magician.x = 20;
magician.y = 300;
magician.r = 8;

magician.charles = function() {
   rectMode(CENTER);
   image(images[0], 50, this.y);
}

magician.albert = function() {
   rectMode(CENTER);
   image(images[9], 50, this.y);
}

magician.angus = function() {
   rectMode(CENTER);
   image(images[10], 50, this.y);
}

magician.move = function(dir) {
   this.y += dir * 20;
}

magician.getX = function() {
   return magician.x;
}

magician.getY = function() {
   return magician.y;
}