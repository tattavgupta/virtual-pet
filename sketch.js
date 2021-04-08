var dog,happyDog,foodS
var database

function preload()
{
  dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(1000, 800);
  database=firebase.database()
  dog=createSprite(900,280,10,10)
  dog.addImage(dogImg)
  dog.scale=0.2
  foodS=database.ref('Food')
  foodS.on("value",readStock)
  milkDairy=new Food()
}


function draw() {  
  background(46,139,87)

   fill("blue")
  textSize(25)
  text("Food Remaining:"+foodS,150,200)
  drawSprites();
  //add styles here
  milkDairy.display()
}

function readStock(data){
  foodS=data.val();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    writeStock(foodS-1);
    dog.addImage(happyDogImg)
    Food.display
   }

  if (keyCode === DOWN_ARROW) {
    writeStock(foodS+1);
  }
 }

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}