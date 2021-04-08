class Food{
   constructor(){
    this.foodIMG=loadImage("images/Milk.png")
    this.foodStock=foodS
   }
    display(){
   var x=80,y=100;

   imageMode(CENTER);
   console.log(this.foodStock)
   if(this.foodStock!=0){
     for(var i;i<this.foodStock;i++){
       if(i%10==0){
         x=80;
         y=y+50;
       }
       image(this.foodIMG,x,y,50,50);
       x=x+30;
     }
   }
   image(this.foodIMG,200,200,50,50)
   }
}