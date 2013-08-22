var Asteroids = (function(Lib) {
  Lib.MovingObject = (function() {

      function MovingObject(pos, velocity, radius) {
        this.pos = pos;
        this.velocity = velocity;
        this.radius = radius;
      }

      MovingObject.prototype.update = function(xDim, yDim) {
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;

        this.pos.x = (this.pos.x + xDim) % xDim;
        this.pos.y = (this.pos.y + yDim) % yDim;
      };

      MovingObject.prototype.changeVelocity = function(newVelocity) {
        this.velocity = newVelocity;
      };

      MovingObject.prototype.isOffScreen = function(xDim, yDim) {
        var isOffScreen = ((this.pos.x > xDim) || (this.pos.x < 0) ||
          (this.pos.y > yDim) || (this.pos.y < 0));

        return isOffScreen;
      };

      MovingObject.prototype.collidesWith = function(otherObject) {
        var distSqrd = Math.pow((this.pos.x - otherObject.pos.x), 2) +
                       Math.pow((this.pos.y - otherObject.pos.y), 2);
        var cartDist = Math.sqrt(distSqrd);

        return cartDist < (this.radius + otherObject.radius);
      };

    return MovingObject;
  })();

  return Lib;
})(Asteroids || { });
