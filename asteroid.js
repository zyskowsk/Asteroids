var Asteroids = (function (Lib) {
  Lib.Asteroid = (function () {

    function Asteroid(pos, radius) {
      this.pos = pos;
      this.radius = radius;
    }

    Asteroid.inherits(Asteroids.MovingObject);
    Asteroid.MAX_RADIUS = 25;

    Asteroid.randomAsteroid = function (maxX, maxY) {
      return new Asteroid(
        { x : maxX * Math.random(),
          y : maxY * Math.random() },
          this.MAX_RADIUS * Math.random()
      );
    };

    Asteroid.prototype.draw = function (ctx) {
      ctx.fillStyle = "black";
      ctx.beginPath();

      ctx.arc(
        this.pos.x,
        this.pos.y,
        this.radius,
        0,
        2 * Math.PI,
        false
      );

      ctx.fill();
    };

    return Asteroid;
  })();

  return Lib;
})(Asteroids || {});