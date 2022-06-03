var PLAY = 1;
var END = 0;
var gameState = PLAY;
var player, playerAnim;
var road, roadImg;
var coin, coinImg;
var score = 0;

function preload() {
  playerAnim = loadAnimation("Runner-1.png", "Runner-2.png");
  roadImg = loadImage("road.png");
  coinImg = loadImage("coin.png");
}

function setup() {
  createCanvas(600, 600);

  road = createSprite(250, 200, 10, 10);
  road.addImage(roadImg);
  road.velocityY = 4;

  player = createSprite(200, 500, 20, 20);
  player.addAnimation("running", playerAnim);
  player.scale = 0.1;
}

function draw() {
  background(0);

  player.x = World.mouseX;

  score += Math.round(getFrameRate() / 60);

  if (road.y > 400) {
    road.y = height / 2;
  }

  if ((gameState = PLAY)) {
    spawnCoins();
  }

  drawSprites();
  textSize(20);
  fill("black");
  text("Score: " + score, 30, 50);
}

function spawnCoins() {
  if (World.frameCount % 80 === 0) {
    var coin = createSprite(Math.round(random(50, 350), 40, 10, 10));
    coin.addImage(coinImg);
    coin.scale = 0.5;
    coin.velocityY = 3;
    coin.lifetime = 150;
  } 
}
