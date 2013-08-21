var Asteroids = (function (Lib) {
  Lib.Ship = (function () {

    function Ship(pos) {
      this.pos = pos;
      this.direction = Math.PI / 2;
      this.velocity = {x : 1, y : 1};
      this.radius = 5;
    }

    Ship.inherits(Lib.MovingObject);

    Ship.prototype.draw = function (ctx) {
      ctx.translate(this.pos.x, this.pos.y);

      ctx.fillStyle = 'red';
      ctx.save();
      ctx.rotate(this.direction);

      ctx.beginPath();
      ctx.moveTo(0 , -14);
      ctx.lineTo(10, 11);
      ctx.lineTo(-10, 11);
      ctx.lineTo(0, -14);
      ctx.fill();
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.restore();
    };

    Ship.prototype.isHit = function (asteroids) {
      var len = asteroids.length;

      for(var i = 0; i < len; i++) {
        if(this.collidesWith(asteroids[i])) {
          return true;
        }
      }

      return false;
    }

    return Ship;
  })();

  return Lib;
}) (Asteroids || {});