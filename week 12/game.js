var player;

var speed = 2;

var gravity = 2;

var platform;

var obstacle;


function setup() {
	createCanvas(720,360);
    player = createSprite(100, 100, 40, 40);
    platform = createSprite(width/2, height, width, 20);
    obstacle = createSprite(300, height, 60, 40);
 
}

function draw() {
	background("black");
    console.log(player);
    
    if ( keyWentDown("a") ) {
	player.velocity.x -= speed;
    
    } else if ( keyWentDown("d") ) {
	player.velocity.x += speed;
    
    }
    
    player.velocity.y += gravity
    if ( player.collide(platform) ) {
	     player.velocity.y = 0;
    }
    
    if ( player.collide(obstacle) ) {
	player.remove();
}
    
    drawSprites();
}