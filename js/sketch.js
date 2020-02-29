let keys = {};


function preload() {
    playerSheet = {};
    playerSheet.data = loadJSON('images/reimu.json');
    playerSheet.sheet = loadImage('images/reimu.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    playerSheet.animations = PlayerAnimations.loadSprites();
    player = new Player(createVector(width/2,height*7/10),
        new Destructor(10),
        100,100,
        new PlayerAnimations(playerSheet.animations),
        new PlayerController());
    fps = new FrameRate();
}

function draw() {
  background(240,218,232);
  player.run();
  fps.show();
}

function keyPressed() {
    keys[key] = true;
}
   
function keyReleased() {
    keys[key] = false;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}