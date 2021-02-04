var database;
var dog,sadDog,happyDog;
var add ,feedDog;
var foodObj;
var fedTime;
var lastFed;
var feed ,addFood
var foodS;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {

database=firebase.database();

  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObj = new Food();

feed = createButton("Feed the Dog");
feed.position(700,95);
feed.mousePressed(feedDog);


addFood = createButton("Add Food");
addFood.position(800,95);
addFood.mousePressed(addFoods);

}

function draw() {

  background(46,139,87);

  drawSprites();

  foodObj.display();
 
 
}

/*function to read food Stock*/


/*function to update food stock and last fed time*/
function feedDog(){

 dog.addImage(happyDog);


 if(foodObj.getFoodStock()<=0){
 foodObj.updateFoodStock(foodObj.getFoodStock()*0);
 }else{(
   foodObj.updateFoodStock(foodObj.getFoodStock()-1));
   foodObj.deductFood();
   database.ref('/').update({
    Food : foodObj.getFoodStock(),
    FeedTime:hour
    } )
 }
}
/*function to add food in stock*/
   function addFoods(){

    this.foodStocks = this.foodStocks+1
    database.ref('/').update({
    Food : this.foodStocks
    } )
  }
  /* foodS = foodS+1
   database.ref('/').update({
   Food : foodS
   } )*/
