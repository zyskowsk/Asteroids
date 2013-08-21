var Asteroids = (function (Lib) {
  Lib.Ship = (function () {

    function Ship(pos) {
      this.pos = pos;
      this.direction = { x : -1, y : 0};
      this.velocity = {x : 0, y : 0};
      this.radius = 5;
    }

    Ship.inherits(Lib.MovingObject);

    Ship.prototype.draw = function (ctx) {
      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.moveTo(this.pos.x , this.pos.y - 14);
      ctx.lineTo(this.pos.x + 10, this.pos.y + 11);
      ctx.lineTo(this.pos.x - 10, this.pos.y + 11);
      ctx.lineTo(this.pos.x, this.pos.y - 14);
      ctx.fill();
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1.5;
      ctx.stroke();
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