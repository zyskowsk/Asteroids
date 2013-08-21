var Asteroids = (function(Lib) {
  Lib.MovingObject = (function() {

      function MovingObject(pos, velocity) {
        this.pos = pos;
        this.velocity = velocity;
      }

      MovingObject.prototype.update = function() {
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;
      };

      MovingObject.prototype.changeVelocity = function(newVelocity) {
        this.velocity = newVelocity;
      };

      MovingObject.prototype.isOffScreen = function(xDim, yDim) {
        var isOffScreen = ((this.pos.x > xDim) || (this.pos.x < 0) ||
          (this.pos.y > yDim) || (this.pos.y < 0));

        return isOffScreen;
      }

    return MovingObject;
  })();

  return Lib;
})(Asteroids || { });
