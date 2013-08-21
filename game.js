var Asteroids = (function(Lib) {
  Lib.Game = (function() {

    function Game(xDim, yDim, canvas) {
      this.xDim = xDim;
      this.yDim = yDim;
      this.asteroids = this.generateAsteroids();
      this.ship = new Asteroids.Ship({x : (xDim / 2), y : (yDim / 2)})
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
      this.ctx.clearRect(0, 0, this.xDim, this.yDim);

      var len = this.asteroids.length;
      for (var i = 0; i < len; i++) {
        this.asteroids[i].draw(this.ctx);
      }

      this.ship.draw(this.ctx);
    };

    Game.prototype.gameOver = function () {
      window.clearInterval(gameTimer);
      this.ctx.fillStyle = "black";
      this.ctx.font = "40pt Arial ";
      this.ctx.fillText("You have lost. GAME OVER.", 100, 100);
    }

    Game.prototype.update = function () {
      var len = this.asteroids.length;

      for(var i = 0; i < len; i++) {
        this.asteroids[i].update(this.xDim, this.yDim);
      }

      this.draw();

      if (this.ship.isHit(this.asteroids)) {
        this.gameOver();
      }
    };

    Game.prototype.start = function () {
      var that = this;
      gameTimer = window.setInterval(that.update.bind(that), 2);
    }

    return Game ;
  })();

  return Lib;
})(Asteroids || {});