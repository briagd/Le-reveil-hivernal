var snowflakes = [];
var numParticles = 100;
var mrSnow;
var missChara;
var time = 0;

var scenes = 0;
var isQuestion = false;
var points = 0;
var end = 0;

var interimAlpha = 100;

var questionPlusXmin;
var questionPlusXmax;
var questionMinusXmin ;
var questionMinusXmax ;
var questionYmin;
var questionYmax ;
var fadeOutTime = 60;
var animation1;
var animation2;
var animation3;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(0);
  frameRate(30);
  for (let i =0; i<numParticles; i++){
    snowflakes.push(new Snowflake());
  }
  mrSnow = new MrSnow();
  missChara = new MissChara();

  questionPlusXmin = width/2-width*0.15;
  questionPlusXmax = width/2;
  questionMinusXmin =  width/2+15;
  questionMinusXmax = width/2+width*0.15+15;
  questionYmin = height*0.25;
  questionYmax = height*0.25+height/5;

}


function draw() {

  if (scenes ==0){
    startScreen();
  }
  if (scenes==1){
    reveil();
  } else if (scenes==2){
    interm1();
  } else if (scenes == 3){
    rencontre();
  }else if (scenes == 4){
    intem2();
  } else if (scenes == 5){
    questionement();
  } else if (scenes == 6){
    intem3();
  } else if (scenes == 7){
    retour();
  } else if (scenes == 8){
    final();
  }
}

function addSnow(){
  for (let i =0; i<50; i++){
    snowflakes.push(new Snowflake());
  }
}
//scenes = 0
function startScreen(){
  background(0);
  fill(255);
  textSize(32);
  text("Cliquez pour commencer.", width/3,height/2,width/3, height/4);
}


var scene1TextNum = 0;
var scene1Text = ["Encore… ",
"Chaque matin la même chose.",
"Le même réveil.",
"Le même vide et la même sensation.",
"Comme une pulsation.",
"C'est comme si mes sens ne répondaient plus.",
"Ma perception entière est une oscillation scintillante.",
"Je ne suis plus que pulsation.",
"Une fois de plus la neige tombe.",
"La neige me procure une sensation:",
"Il y a toujours une part d'inconnu, comme si je partageai ma conscience avec le chaos.",
"Cette situation m'apparaît de plus en plus:"];
var scene1IsClickable = false;
//scene = 1
function reveil(){
  if (scene1TextNum==12){
    scene1IsClickable = false;
    scenes = 2;
    time = 0;
    animation1 = new anim1(points);
    addSnow();
  } else{

  background(0);
  if (time<200){
    fill(255,time+55);
    textFont("Courrier");
    textSize(32);
    text("Instant cherche éternité pour former un nouvel espace.", width/3,height/2,width/3, height/4);
    time+=1;
  } else{
  scene1IsClickable = true;


    textbox("Mademoiselle Kara:",scene1Text[scene1TextNum]);

  if  (scene1TextNum >= 4){
    missChara.update();
    missChara.display();
  }
  if (scene1TextNum>7){
    for (let i =0; i<snowflakes.length; i++){
      snowflakes[i].update();
      snowflakes[i].display();
    }
  }
  if(scene1TextNum==9){
    isQuestion = true;
    quest("de bien-être", "glaçante");
  } else if  (scene1TextNum==11){
      isQuestion = true;
      quest("accueillante", "chaleureuse");
    }


}
}
}



var scene2TextNum = 0;
var scene2Text =[
"Je sais qu'il ne va tarder.",
"Il revient toujours.",
"Sa présence dans cette pénombre me rassure et me réconforte.",
"J'appréhende ce moment et aimerai pouvoir m'enfuir une fois pour toute."
];
var scene2IsClickable = false;
//scene = 2
function interm1(){
  if (scene2TextNum>=3){
    scenes = 3;
    time = 0;
    missChara.amp += 10;
    missChara.pulseFrequency+=0.05;
    missChara.isNoisy = true;
  } else{
  if (time<fadeOutTime){
    background(0,15);
    time+=1;
  } else{

    background(0,interimAlpha);
    animation1.update();
    animation1.display();
    scene2IsClickable = true;
    if (scene2TextNum<2){
      textbox("Mademoiselle Kara:",scene2Text[scene2TextNum]);
  } else if (points>=0){
    textbox("Mademoiselle Kara:",scene2Text[2]);
  } else {
    textbox("Mademoiselle Kara:",scene2Text[3]);
  }
  }
}
}

var scene3TextNum = 0;
var scene3Text =[
"Le revoilà.",
"Je ne sais même pas si il a un nom. Mais j'avais décidé de l'appeler Yuki.",
"Il semble que tu ne puisses pas te passer de moi.",
"Cette neige ne semble pas vouloir s'arrêter.",
"Ecoute, nous ferons mieux de résonner ensemble.",
"Dis moi comment te sens-tu?",
"Crois tu vraiment que tous cela peux continuer.",
"Il va bien falloir que tu trouves une solution.",
"Souviens toi de ce matin d'hiver.",
"Qu'a t-il pu se passer pour que tu ne puisses plus échapper à ta propre âme?",
"Dis-moi ce que tu ressens?"
]
var scene3IsClickable = false;
//scene = 3
function rencontre(){
  if (scene3TextNum>=11){
    scenes = 4;
    time = 0;
    animation2 = new anim2(points);
    addSnow();
  } else{

  if (time<fadeOutTime){
    background(0,15);
    time+=1;
  } else{
    background(0);
    missChara.update();
    missChara.display();
    for (let i =0; i<snowflakes.length; i++){
      snowflakes[i].update();
      snowflakes[i].display();
    }
    scene3IsClickable = true;
    if (scene3TextNum<2){


      textbox("Mademoiselle Kara:",scene3Text[scene3TextNum]);
    } else{
      mrSnow.display();
      textbox("Yuki:",scene3Text[scene3TextNum]);
      if(scene3TextNum==5){
        isQuestion = true;
        quest("content de te revoir", "confus");
      } else if(scene3TextNum==10){
        isQuestion = true;
        quest("du réconfort", "un vide profond");
      }
    }
  }
}
}




var scene4TextNum = 0;
var scene4Text =[
  "Pourquoi cela m'arrive toujours à moi?" ,
  "Suis-je seul dans mon propre monde?",
  "Heureusement que Yuki est là. Grâce à lui, je pense pouvoir résoudre ce mystère.",
  "J'appréhende ce moment et aimerai pouvoir m'enfuir une fois pour toute.",
  "Je crois de moins en moins que cette expérience m'apportera quoi que ce soit."
];
var scene4IsClickable = false;

//scene = 4
function intem2(){
  if (scene4TextNum>=3){
    scenes = 5;
    time = 0;
    missChara.amp += 10;
    missChara.octave += 1;
    missChara.pulseFrequency+=0.05;
  } else{
  if (time<fadeOutTime){
    background(0,15);
    time+=1;
  } else{

    background(0,100);
    animation2.update();
    animation2.display();
    scene4IsClickable = true;
    if (scene4TextNum<2){
      textbox("Mademoiselle Kara:",scene4Text[scene4TextNum]);
  } else if (points>0){
    textbox("Mademoiselle Kara:",scene4Text[2]);
  } else if (points<0){
    textbox("Mademoiselle Kara:",scene4Text[3]);
  } else {
    textbox("Mademoiselle Kara:",scene4Text[4]);
  }
  }
  }
}

var scene5TextNum = 0;
var scene5Text =[
  "Si je ressens ces pulsations, c'est que je dois forcement être:",
  "Chaque jour je me plis à la conformité. Je vis le rêve des autres.",
  "Comme si ma réalité se diffuse peu à peu comme ces flocons de neige qui vagabondent.",
  "Comment pourrai-je connaître ma propre réalité?",
  "Suis je bien plus qu'un désir ou ne suis-je que les sensations qui m'animent?",
  "Yuki, es tu parti?",
  "Je suis que tu reviendra.",
  "Il faut absolument que je:"
];
var scene5IsClickable = false;
//scene = 5
function questionement(){
  if (scene5TextNum>=8){
    scenes = 6;
    time = 0;
    animation3 = new anim3(points);
    addSnow();
  } else{

  if (time<fadeOutTime){
    background(0,15);
    time+=1;
  } else{
    background(0);
    missChara.update();
    missChara.display();
    for (let i =0; i<snowflakes.length; i++){
      snowflakes[i].update();
      snowflakes[i].display();
    }
    scene5IsClickable = true;


      textbox("Mademoiselle Kara:",scene5Text[scene5TextNum]);
      if(scene5TextNum==0){
        isQuestion = true;
        quest("dans un rêve", "dans une réalité");
      } else if(scene5TextNum==7){
        isQuestion = true;
        quest("reste dans cet état", "me réveille");
      }

    }
  }
}

var scene6TextNum = 0;
var scene6Text =[
  "Pourquoi cela m'arrive toujours à moi?" ,
  "Suis-je seul dans mon propre monde?",
  "Comment le néant peut-il continuer à me poursuivre de cette façon.",
  "Ai-je bien mérité tout cela?",
  "Yuki va revenir. Il me manque déjà. Est-il vrai que nous pouvons nous unir?",
  "Yuki va revenir. Je lui fais de moins en moins confiance.",
  "Je veux me réveiller."
];
var scene6IsClickable = false;

//scene = 6
function intem3(){
  if (scene6TextNum>=3){
    scenes = 7;
    time = 0;
    missChara.amp += 10;
    missChara.octave += 1;
    missChara.pulseFrequency+=0.05;
  } else{
  if (time<fadeOutTime){
    background(0,15);

    time+=1;
  } else{

    background(0,interimAlpha);
    animation3.update();
    animation3.display();
    scene6IsClickable = true;
    if (scene6TextNum<2){
      textbox("Mademoiselle Kara:",scene6Text[scene6TextNum]);
  } else if (points>1){
    textbox("Mademoiselle Kara:",scene6Text[2]);
  } else if (points<-1){
    textbox("Mademoiselle Kara:",scene6Text[3]);
  } else {
    textbox("Mademoiselle Kara:",scene6Text[4]);
  }
  }
  }
}

var scene7TextNum = 0;
var scene7Text =[
  "Nous ne changerons pas.",
  "Es-tu enfin prêt m'accepter et à t'accepter?",
  "Tu ne crois pas en moi.",
  "Ne suis-je vraiment que nuisance pour toi?",
  "Il va falloir faire un choix.",
  "Es tu prêt à croire en nous?"
];
var scene7IsClickable = false;
//scene = 7
function retour(){
  if (scene7TextNum>=2){
    scenes = 8;
    time = 0;
  } else{

  if (time<fadeOutTime){
    background(0,15);
    time+=1;
  } else{
    background(0);
    missChara.update();
    missChara.display();
    mrSnow.display();
    for (let i =0; i<snowflakes.length; i++){
      snowflakes[i].update();
      snowflakes[i].display();
    }
    scene7IsClickable = true;
      if(points>1){
        textbox("Yuki:",scene7Text[scene7TextNum]);
        if(scene7TextNum==1){
          isQuestion = true;
          quest("Oui", "Non");
        }
      } else if(points<-1){
        if (scene7TextNum==0){
        textbox("Yuki:",scene7Text[2]);
      } else {
          textbox("Yuki:",scene7Text[3]);
          isQuestion = true;
          quest("Oui", "Non");
        }
      } else {
        if (scene7TextNum==0){
        textbox("Yuki:",scene7Text[4]);
      } else {
          textbox("Yuki:",scene7Text[5]);
          isQuestion = true;
          quest("Oui", "Non");
        }
      }

    }
  }
}

//scene = 8
function final(){
  if (time<fadeOutTime){
    background(0,15);

  } else if (time<4*fadeOutTime) {

    if (end==0){//fusion
      background(0);
      textbox("","Nous resterons ensemble pour un instant éternel.");
      finalPositive();
      missChara.update();
      missChara.display();
      mrSnow.display();
    } else if (end == 1){//neutral
      background(0,15);

      if(time%10==0){

        noStroke();
        let w = random(width/10,width/2);
        for (let i = 0;i<10;i++){
        fill(25*i);
        ellipse(width/2,height/2, w+3*(10-i));
      }
    }

      textbox("","Ceci n'est qu'un rêve, je peux enfin me réveiller.");
    }else{//destruction
      background(0,3);

      mrSnow.speak = false;
      finalNegative();
      mrSnow.display();

      textbox("","Cela ne peut plus durer. Tu dois partir Yuki, je ne veux plus te revoir.");
    }
  } else if (time<5*fadeOutTime){
    background(0,15);

  }else {
    background(0);
    fill(255);
    textSize(40);
    text("Fin", width/2,height/2);

  }
  time+=1;
}

var numOfAdd = 0;
function finalNegative(){

  mrSnow.position = createVector(width/2,height/3);
  mrSnow.w = height/40;
  mrSnow.h = height/20;

  for (let j = 0;j<numOfAdd;j++){
    mrSnow.w*=0.95;
    mrSnow.h *= 0.95;
  }
  numOfAdd +=1;

}

function finalPositive(){
  missChara.originalPos[0]= createVector(width/2,height/3);
  for(let i = 1; i<missChara.positions.length; i++){
    let x = width/2+100*cos(i*PI/3);
    let y = height/3+100*sin(i*PI/3);
    missChara.originalPos[i]= createVector(x,y);

  }
  missChara.maxAlpha = 70;
  missChara.isNoisy = true;
  mrSnow.position = createVector(width/2,height/3);
}




function mouseClicked(){
  if (scenes == 0) scenes+=1;
  if (scenes == 1 && scene1IsClickable && !isQuestion) scene1TextNum+=1;
  if (scenes == 2 && scene2IsClickable && !isQuestion) scene2TextNum+=1;
  if (scenes == 3 && scene3IsClickable && !isQuestion) scene3TextNum+=1;
  if (scenes == 4 && scene4IsClickable && !isQuestion) scene4TextNum+=1;
  if (scenes == 5 && scene5IsClickable && !isQuestion) scene5TextNum+=1;
  if (scenes == 6 && scene6IsClickable && !isQuestion) scene6TextNum+=1;
  if (scenes == 7 && scene7IsClickable && !isQuestion) scene7TextNum+=1;
  if (isQuestion){
    if (mouseX > questionPlusXmin&& mouseX < questionPlusXmax &&
       mouseY > questionYmin && mouseY< questionYmax){
      if (scenes == 7) {
        scene7TextNum+=1;
        if (points>1) {
          end=0;
        } else if (points<-1) {
          end=1;
        }else {
          end=0;
        }
      }
      points+=1;
      isQuestion = false;
      if (scenes == 1) scene1TextNum+=1;
      if (scenes == 3) scene3TextNum+=1;
      if (scenes == 5) scene5TextNum+=1;

    }else if (mouseX > questionMinusXmin&& mouseX < questionMinusXmax &&
       mouseY > questionYmin && mouseY< questionYmax){
         if (scenes == 7) {
           scene7TextNum+=1;
           if (points>1) {
             end=1;
           } else if (points<-1) {
             end=2;
           }else {
             end=2;
           }
         }
      points-=1;
      isQuestion = false;
      if (scenes == 1) scene1TextNum+=1;
      if (scenes == 3) scene3TextNum+=1;
      if (scenes == 5) scene5TextNum+=1;

  }
}
}


//Question
function quest(option1, option2){
  let y = height*0.25;
  let x = width/2;
  let w = width*0.15;
  let h = height/5;
  fill(120);
  rect(x-w-5,y-5,w+10, h+10,20);
  rect(x+15-5,y-5,w+10, h+10,20);
  if (mouseX>x-w && mouseX<x && mouseY>y &&mouseY<y+h){
    fill(155);
  } else {
    fill(0);
  }
  rect(x-w,y,w, h,20);
  if (mouseX>x+15 && mouseX<x+w+15 && mouseY>y &&mouseY<y+h){
    fill(155);
  } else {
    fill(0);
  }
  rect(x+15,y,w, h,20);
  fill(255);
  textFont('Arial');
  textSize(20);
  text(option1, x-w+10, y+10, w-20, h-20);
  text(option2, x+15+10, y+10, w-20, h-20);
}


//textbox
function textbox(n, t){
  rectMode(CORNER);
  fill(255);
  let x = width*0.29;
  let y = height*0.65;
  let w = width*0.45 ;
  let h = height/4;

  rect(x-5,y-5,w+10, h+10,20);

  fill(0);
  rect(x,y,w, h,20);
  fill(255);
  textFont('Arial');
  textSize(28);
  text(n, x+10, y+10, w-20, h-20);
  fill(255);
  textFont("Courrier");
  textSize(20);
  text(t, x+10, y+52, w-20, h-20);
}



//Mademoiselle Kara
var MissChara = function(){
  this.positions = [];
  this.positions.push(createVector(width/5,height/2));
  this.originalPos = [];
  this.originalPos.push(createVector(width/5,height/2));
  this.sizes = [];
  this.sizes.push(15);
  for (let i=1;i<7;i++){
    this.sizes.push(15);
    let x = width/5+100*cos(i*PI/3);
    let y = height/2+100*sin(i*PI/3);
    this.positions.push(createVector(x,y));
    this.originalPos.push(createVector(x,y));
  }
  this.isNoisy = false;
  this.amp = 0;
  this.syncInPulse = 1;
  this.pulseFrequency = 0.2;
  this.octave = 7;
  this.t = 0;
  this.maxAlpha = 200;
}

MissChara.prototype.update = function(){
  if (this.isNoisy){
for(let i = 0; i<this.positions.length; i++){

  this.positions[i].x = this.originalPos[i].x+ this.amp*(2*noise(this.t/100 + i)-1);
  this.positions[i].y = this.originalPos[i].y + this.amp*(2*noise(this.t/100+i*2)-1);
  }
}

  this.t+=1;
}

MissChara.prototype.display = function(){
fill(255,50*sin(this.t*this.pulseFrequency)+this.maxAlpha);
ellipse(this.positions[0].x,this.positions[0].y,this.sizes[0],this.sizes[0]*1.2);
for(let i = 1; i<this.positions.length; i++){
  if (scenes ==1){
    strokeWeight(5 +4*sin(sin(this.t/2*this.pulseFrequency)));
    stroke(255,70*sin(this.t/2*this.pulseFrequency)+this.maxAlpha);
  } else{
    strokeWeight(5 +4*sin(sin(i*this.t/this.octave*this.pulseFrequency)));
    stroke(255,70*sin(i*this.t/this.octave*this.pulseFrequency)+this.maxAlpha);
  }
  line(this.positions[0].x,this.positions[0].y,this.positions[i].x,this.positions[i].y );
  if( i<this.positions.length-1){
    line(this.positions[i+1].x,this.positions[i+1].y,this.positions[i].x,this.positions[i].y );
  }
  noStroke();
  ellipse(this.positions[i].x,this.positions[i].y,this.sizes[i]);
  }
    strokeWeight(5 +4*sin(sin(this.t/2*this.pulseFrequency)));
    stroke(255,70*sin(this.t/2*this.pulseFrequency)+this.maxAlpha);

  line(this.positions[this.positions.length-1].x,this.positions[this.positions.length-1].y,
   this.positions[1].x,this.positions[1].y );
   noStroke();
}

//Mr. Snow
var MrSnow = function(){
  this.position = createVector(width/5*4,height/3);
  this.w = height/40;
  this.h = height/20;
  this.t = 0;
  this.pulseFrequency = TWO_PI*0.5;
  this.alphaFactor = 18;
  this.speak = true;
}

MrSnow.prototype.display= function(){
noStroke();
rectMode(CENTER);
if(this.speak){
fill(255,this.alphaFactor*10*sin(this.pulseFrequency*this.t));
} else{
  fill(0);
}
rect(this.position.x,this.position.y,this.w,this.h);
  for (let i = 1 ;i<10;i++){
    fill(255,this.alphaFactor*(9-i)*noise(this.t/10+i*0.007));
    rect(this.position.x+i*this.w,this.position.y,this.w,this.h*i);
    rect(this.position.x-i*this.w,this.position.y,this.w,this.h*i);
    rect(this.position.x,this.position.y+i*this.w+this.h/2,this.h*i+this.w,this.h);
    rect(this.position.x,this.position.y-i*this.w-this.h/2,this.h*i+this.w,this.h);
  }
  this.t += 0.1;
}


//individual snowflake function
var Snowflake = function(){
  this.acceleration = createVector(0, random(0.03, 0.07));
  this.velocity = createVector(0, random(0.5, 1));
  this.size = this.acceleration.y*this.acceleration.y*2000;
  this.position = createVector(random(0,width),random(-this.size,-200));
  this.wind = false;
  this.t = random(0,100);
  this.transparency = random(1,100);
  this.windStrength = createVector(0.1,0);
}

Snowflake.prototype.ChangeWind= function(){
    this.wind = !this.wind;
}

Snowflake.prototype.update= function(){
  //adds gravity
  this.velocity.add(this.acceleration);
  //adds wind
  if (this.wind){
    this.velocity.add(this.windStrength);
  }

  //adds random motion
  this.position.add(this.velocity);
  if(this.position.y>height+1.5*this.size){
    this.reset();
  }
  this.position.x += this.size*(noise(this.t)-0.5);
  this.position.y += 10*(noise(this.t)-0.5);
  this.t+=0.01;
}

Snowflake.prototype.display= function(){
  noStroke();
  fill(255,this.transparency);
  ellipse(this.position.x,this.position.y,this.size);

}

Snowflake.prototype.reset = function(){
  this.acceleration = createVector(0, random(0.03, 0.07));
  this.velocity = createVector(0, random(0.5, 1));
  this.size = this.acceleration.y*this.acceleration.y*2000;
  this.position = createVector(random(0,width),random(-10,-60));
  this.wind = false;
  this.t = random(0,100);
  this.transparency = random(1,100);
  this.windStrength = createVector(0,0);
}

var anim1 = function(points){
  this.points = points;
  this.t = 0;
	this.current = 0;
  this.num = 7;
  this.pos = [];
	this.center = createVector(width/2,height/3);
  this.radius = height/5;
  for (let i =0;i<this.num;i++){
    if (points<0){
      this.pos.push(createVector(this.center.x,this.center.y));
    } else {
      let angle = TWO_PI * i/this.num;
      this.pos.push(createVector(this.center.x+this.radius*cos(angle),
								 this.center.y+this.radius*sin(angle)));
    }
  }
	this.size = width/30;

	this.finished = false;
	this.pulseTime = 0;
}

anim1.prototype.update = function () {
	let angle = TWO_PI * this.current/this.num;
  if (this.points<0){
	this.pos[this.current] =
		createVector(this.center.x+this.radius*cos(angle)*this.t*this.t*this.t,
								 this.center.y+this.radius*sin(angle)*this.t*this.t*this.t);
  } else {
    this.pos[this.current] =
      createVector(this.center.x+this.radius*cos(angle)*(1-this.t*this.t*this.t),
                   this.center.y+this.radius*sin(angle)*(1-this.t*this.t*this.t));
  }
	if(this.t<1){
		this.t+=0.03;
	} else{


		if(this.current<this.num-1){
			//this.finished = true;
			this.t=0;
			this.current+=1;
		}
	}
};

anim1.prototype.display = function () {
	if(!this.finished){
	 for (let i =0;i<=this.current;i++){
		fill(255,100+55*(2*cos((i+1)*this.pulseTime))+1);
		 rectMode(CENTER);
    rect(this.pos[i].x, this.pos[i].y,this.size,this.size);
  }
	this.pulseTime +=0.01;
	}
};

var anim2 = function(points){
  this.points = points;
  this.t = 0;
	this.current = 0;
  this.num = 7;
  this.pos = [];
	this.center = createVector(width/2,height/3);
  this.radius = [];
	this.size = width/30;
  for (let i =0;i<this.num;i++){
		this.radius.push(0);
		if (this.points==0){
			this.pos.push(createVector(this.center.x+(i-this.num/2)*(this.size), this.center.y));
		} else {
      this.pos.push(createVector(this.center.x, this.center.y));
		}
  }

	this.finished = false;
	this.pulseTime = 0;
	this.alphaTime = 0;
}

var anim2 = function(points){
  this.points = points;
  this.t = 0;
	this.current = 0;
  this.num = 7;
  this.pos = [];
	this.center = createVector(width/2,height/3);
  this.radius = [];
	this.size = width/30;
  for (let i =0;i<this.num;i++){
		this.radius.push(0);
		if (this.points==0){
			this.pos.push(createVector(this.center.x+(i-this.num/2)*(this.size), this.center.y));
		} else {
      this.pos.push(createVector(this.center.x, this.center.y));
		}
  }

	this.finished = false;
	this.pulseTime = 0;
	this.alphaTime = 0;
}

anim2.prototype.update = function () {
	let angle = TWO_PI * this.current/this.num;
  if (this.points>0){
		this.radius[this.current] = height/5*this.t;
    this.pos[this.current] =
			createVector(this.center.x+cos(TWO_PI*this.t*2)*this.radius[this.current],
                   this.center.y+sin(TWO_PI*this.t*2)*this.radius[this.current]);
	}
	if(this.t<1){
		this.t+=0.02;
	} else{


		if(this.current<this.num-1){
			//this.finished = true;
			this.t=0;
			this.current+=1;
		}
	}
	for (let i =0;i<=this.current;i++){
		if (this.points>0){
    this.pos[i].x+=(2*noise(this.pulseTime+i*10)-1)/2;
		this.pos[i].y+=(2*noise(this.pulseTime+i)-1)/2;
		} else if (this.points<0){
			this.pos[i].x+=5*(2*noise(this.pulseTime+i*10)-1);
			this.pos[i].y+=5*(2*noise(this.pulseTime+i)-1);
		}
  }
	this.pulseTime+=0.03;
};

anim2.prototype.display = function () {
	if(!this.finished){
	 for (let i =0;i<=this.current;i++){
		 if (this.points==0){
			 fill(255,255*noise(this.pulseTime+i*0.1));
			  rectMode(CENTER);
    rect(this.pos[i].x, this.pos[i].y,this.size*noise(this.pulseTime+i*0.03),this.size*noise(this.pulseTime+i*0.03));
		 } else{
			fill(255,255*noise(this.pulseTime+i*10));
			  rectMode(CENTER);
    rect(this.pos[i].x, this.pos[i].y,this.size*noise(this.pulseTime+i*10),this.size*noise(this.pulseTime+i*10));
		 }

  }
	}
	this.alphaTime+=0.1;
};

var anim3 = function(points){
  this.points = points;
  this.t = 0;
	this.current = 0;
  this.num = 30;
  this.pos = [];
	this.center = createVector(width/2,height/5);
  this.amp = height/20;
	this.size = width/50;
  for (let i =0;i<this.num;i++){
			this.pos.push(createVector(-i*width/this.num, this.center.y));
  }

	this.finished = false;
	this.pulseTime = 0;
	this.alphaTime = 0;
}

anim3.prototype.update = function () {
	 for (let i =0;i<this.num;i++){
	this.pos[i].x+= 2;
		if (this.pos[i].x>width) this.pos[i].x = 0;
		 if (this.points!=0){
				this.pos[i].y = this.center.y+this.amp*sin(this.pos[i].x/30);
		 }
	 }

	this.pulseTime+=0.03;
};

anim3.prototype.display = function () {
	if(!this.finished){
 	 for (let i =0;i<this.num;i++){
		 fill(255,50+200*noise(this.alphaTime+i));
		rect(this.pos[i].x, this.pos[i].y,this.size,this.size);
		if (this.points<0) this.pos[i].y = this.center.y+this.amp*sin(3*this.pos[i].x/30);
		rect(this.pos[i].x, this.pos[i].y+this.amp*2.5,this.size,this.size);
		if (this.points<0) this.pos[i].y = this.center.y+this.amp*sin(5*this.pos[i].x/30);
		rect(this.pos[i].x, this.pos[i].y+this.amp*5,this.size,this.size);
		if (this.points<0)  this.pos[i].y = this.center.y+this.amp*sin(7*this.pos[i].x/30);
		rect(this.pos[i].x, this.pos[i].y+this.amp*7.5,this.size,this.size);

   }

	}
	this.alphaTime+=0.03;
};
