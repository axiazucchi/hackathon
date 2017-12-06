var mic;

function preload(){
  
  img1 = loadImage("./assets/tree.png");
  img2 = loadImage("./assets/p2.png");
  img3 = loadImage("./assets/p1.1.png");
  img4 = loadImage("./assets/p3.png");
  img5 = loadImage("./assets/leg2.png");
  img6 = loadImage("./assets/backp.png");
  img7 = loadImage("./assets/backp2.png");
  img8 = loadImage("./assets/happy.png");
  
}

function setup() {
  
  angleMode(DEGREES);
  createCanvas(windowWidth,windowHeight);
  
  fromCol = color('yellow');
  toCol = color(255,241,161);


  mic = new p5.AudioIn();
  mic.start();

}


function draw() {

background(244,244,244);

 
var vol = mic.getLevel(); 

//backgroundpeople+text
imageMode(BOTTOM);
image(img6,width/2-50,height/2+50,300,300);
image(img7,width/2+100,height/2+50,300,300);
image(img8,width/2,height/2-250,250,40);

//tree 
  imageMode(CENTER);
  image(img1,width/2,height/2,300,400);

//man+leg  
push();
  imageMode(RIGHT);
  translate(-vol*15,0);
  image(img5,width/2+250,height/2+45,350,300);
pop();  
  image(img4,width/2+250,height/2+50,350,300);

//woman+leg
push();
  translate(width-200,50);
  scale(-1.0,1.0);
push();
  imageMode(RIGHT);
  translate(-vol*15,0);
  image(img3,width/2,height/2,300,300);
pop();
  imageMode(CENTER);
  image(img2,width/2,height/2,300,300);
pop();

//treeballs
noStroke();
fill(lerpColor(fromCol, toCol, vol*100));
ellipse(width/2,height/2,10);
ellipse(width/2+20,height/2+100,10);
ellipse(width/2+55,height/2-100,10);
ellipse(width/2-50,height/2-80,10);
ellipse(width/2+90,height/2-20,15);
ellipse(width/2-90,height/2+60,10);
ellipse(width/2-130,height/2+140,15);
ellipse(width/2+100,height/2+50,10);
ellipse(width/2+130,height/2+170,10);


}


function windowResized(){
resizeCanvas(windowWidth,windowHeight);
}
