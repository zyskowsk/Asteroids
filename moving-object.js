var Asteroids = (function(Lib) {
  Lib.MovingObject = (function() {

      function MovingObject(pos) {
        this.pos = pos;
      }

      MovingObject.prototype.update = function(velocity) {
        this.pos.x += velocity.x;
        this.pos.y += velocity.y;
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
