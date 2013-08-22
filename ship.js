var Asteroids = (function (Lib) {
  Lib.Ship = (function () {

    function Ship(pos) {
      var that = this;
      this.pos = pos;
      this.direction = Math.PI / 2;
      this.velocity = {x : 0, y : 0};
      this.radius = 5;
      key('left', function() { that.rotate('left') });
      key('right', function() { that.rotate('right') });
      key('up', function() { that.power() });
      key('down', function() { that.decelerate() });
    }

    Ship.inherits(Lib.MovingObject);

    Ship.prototype.draw = function (ctx) {
      ctx.fillStyle = 'red';
      ctx.save();
      ctx.translate(this.pos.x, this.pos.y);
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

    Ship.prototype.power = function () {

      var acceleration = { x : Math.cos(this.direction - (Math.PI / 2)) * .03,
                           y : Math.sin(this.direction - (Math.PI / 2)) * .03};

      this.velocity = { x : this.velocity.x + acceleration.x,
                       y : this.velocity.y + acceleration.y };

    }

    Ship.prototype.decelerate = function () {
      this.velocity = {x : this.velocity.x / 1.1,
                       y : this.velocity.y / 1.1};
    };

    Ship.prototype.rotate = function(direction) {
      var rotationScale = 0.2;

      if (direction === 'left') {
        this.direction -= rotationScale;
      } else if (direction === 'right') {
        this.direction += rotationScale;
      }
    }

    return Ship;
  })();

  return Lib;
}) (Asteroids || {});