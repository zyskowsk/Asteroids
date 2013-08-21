$(function () {
  var canvas = $("#canvas");
  g = new Asteroids.Game(800, 800, canvas.get(0));
  g.start();
});