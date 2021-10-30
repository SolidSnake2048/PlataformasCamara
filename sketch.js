var trex;
var ground,invisibleGround;
var obstacle1,obstacle2,obstacle3;
var edges;
function preload(){

}
function setup(){
      createCanvas(600,200);
      trex=createSprite(300,160,30,30);
      trex.setCollider("circle",1,0,20)
      trex.debug=false;
      ground=createSprite(500,180,1000,10);
      invisibleGround=createSprite(500,190,1000,10);
      invisibleGround.visible=false;
      
      obstacle1=createSprite(400,155,20,40);
      obstacle2=createSprite(600,155,20,40);
      obstacle3=createSprite(800,155,20,40);

      trex.shapeColor="red";
      ground.shapeColor="blue";
      obstacle1.shapeColor="green";
      obstacle2.shapeColor="green";
      obstacle3.shapeColor="green";

      edges=createEdgeSprites();
}
function draw(){
      background(216, 216, 216);

      text("Presiona D para avanzar",20,30);
      text("Presiona A para retroceder",20,50);
      text("Presiona W para brincar",20,70);

      camera.position.x=trex.x;
      //camera.position.y=trex.y;
      
      if(keyDown("D")){
        trex.velocityX=4;
      }
      else{
        trex.velocityX=0;
      }
      if(keyDown("A")){
        trex.velocityX=-4;
      }
      trex.velocityY=trex.velocityY+1;
      if(keyDown("W")&&trex.y>=height-180){
          trex.velocityY=-10;
      }
      trex.collide(invisibleGround);

      trex.collide(obstacle1);
      trex.collide(obstacle2);
      trex.collide(obstacle3);
      drawSprites();
}

