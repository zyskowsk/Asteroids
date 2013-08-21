var Asteroids = (function(Lib) {
  Lib.Game = (function() {

    function Game(xDim, yDim, canvas) {
      this.xDim = xDim;
      this.yDim = yDim;
      this.asteroids = this.generateAsteroids();
      this.ctx = canvas.getContext("2d");
    }


    Game.prototype.NUM_ASTEROIDS = 10;

    Game.prototype.generateAsteroids = function() {
      var asteroids = [];
      for(var i = 0; i < this.NUM_ASTEROIDS; i++) {
        asteroids.push(Asteroids.Asteroid.randomAsteroid(this.xDim, this.yDim));
      }

      return asteroids;
    };

    Game.prototype.draw = function () {
      console.log(this.asteroids);
      this.ctx.clearRect(0, 0, this.xDim, this.yDim);

      var len = this.asteroids.length;
      for (var i = 0; i < len; i++) {
        console.log(this.asteroids[i]);
        this.asteroids[i].draw(this.ctx);
      }
    };

    Game.prototype.update = function () {
      var len = this.asteroids.length;

      for(var i = 0; i < len; i++) {
        this.asteroids[i].update();
      }

      this.draw();
    };

    Game.prototype.start = function () {
      var that = this;
      window.setInterval(that.update.bind(that), 30);
    }

    return Game ;
  })();

  return Lib;
})(Asteroids || {});