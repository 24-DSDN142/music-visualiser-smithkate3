let img;
firstRun = true 

ellipse (400,y,100)



// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  background(60, 10, 92);//purple 
  strokeWeight (0);

   fill(255,255,255);
  let circleSize = map(counter,0,50,100,230);
  fill(255,77,42);
  ellipse (500,500,circleSize,circleSize);

  let circle2Size = map(counter,0,50,100,220);
  fill(255,108,42);
  ellipse (500,500,circle2Size,circle2Size);

  let circle3Size = map(counter,0,50,100,210);
  fill(255,130,42);
  ellipse (500,500,circle3Size,circle3Size);

  let circle4Size = map(counter,0,50,100,200);
  fill(255,150,42);
  ellipse (500,500,circle4Size,circle4Size);

  let circle5Size = map(counter,0,50,100,190);
  fill(255,170,42);
  ellipse (500,500,circle5Size,circle5Size);

  let circle6Size = map(counter,0,50,100,180);
  fill(255,200,42);
  ellipse (500,500,circle6Size,circle6Size);
  //yellow circle that zooms out at start of song 

  if  (counter > 12800 && counter < 20000){
    // do something when counter is bigger than 12800 but smaller then 20000
    
    background(205,0,30)
    let endellipseSize = map (drum,0,100,500,2000)
    fill(60, 10, 92)
    ellipse(500,500,endellipseSize,endellipseSize)
    //end purple circle
  }

  else if (counter > 600 && counter < 1500){
    // do something else when counter is bigger than 600 but smaller than 1500
  //600 is around 10 secondes
  //1500 is around around half minute
    let FBellipseSize = map(bass, 0, 50, 100, 300);
    fill(245,259,100); 
    ellipse(500,500,FBellipseSize,FBellipseSize);

    let FB2ellipseSize = map(bass, 0, 50, 100, 300);
    fill(245,259,193); 
    ellipse(500,500,FB2ellipseSize-10,FB2ellipseSize-10);
    //FB = First Behind 
  }

  else if (counter > 1500 && counter < 4000){
    // do something else when counter is bigger than 1500 but smaller than 4000
    
    let SBellipse000Size = map(other, 0, 50, 100, 500);
    fill(255,255,184);
    ellipse (500,500,SBellipse000Size+800, SBellipse000Size+800);

    let SBellipse00Size = map(other, 0, 50, 100, 500);
    fill(255,255,125);
    ellipse (500,500,SBellipse00Size+150, SBellipse00Size+150);
   
    let SBellipse0Size = map(other, 0, 50, 100, 500);
    fill(255,247,3);
    ellipse (500,500,SBellipse0Size+100, SBellipse0Size+100);

    let SBellipse1Size = map(other, 0, 50, 100, 500);
      fill(255,230,3);
      ellipse (500,500,SBellipse1Size+50, SBellipse1Size+50);
      
    let SBellipseSize = map(other, 0, 50, 100, 500);
      fill(255,205,3);
      ellipse (500,500,SBellipseSize, SBellipseSize);
  
      let SB2ellipseSize = map(other, 0, 50, 100, 500);
      fill(245,175,3);
      ellipse (500,500,SB2ellipseSize-50, SB2ellipseSize-50);
  
      let SB3ellipseSize = map(other, 0, 50, 100, 500);
      fill(245,137,3);
      ellipse (500,500,SB3ellipseSize-100, SB3ellipseSize-100);

      let SB4ellipseSize = map(other, 0, 50, 100, 500);
      fill(245,102,3);
      ellipse (500,500,SB4ellipseSize-150, SB4ellipseSize-150);

      let SB5ellipseSize = map(other, 0, 50, 100, 500);
      fill(245,69,3);
      ellipse (500,500,SB5ellipseSize-200, SB5ellipseSize-200);

      let SB6ellipseSize = map(other, 0, 50, 100, 500);
      fill(245,40,3);
      ellipse (500,500,SB6ellipseSize-250, SB6ellipseSize-250);

      let SB7ellipseSize = map(other, 0, 50, 100, 500);
      fill(245,20,3);
      ellipse (500,500,SB7ellipseSize-300, SB7ellipseSize-300);
      //SB = Second Behind 
    }

    else if (counter > 4000 && counter < 6000){
    //do something if counter is bigger than 4000 but smaller than 6000
 
      var drumMap = map(bass,0,100,0,7)

      for(var i = 0; i < drumMap;i++){
      //something maps drum volum up and down
    
        let TBellipseSize = map(drum,0,100,100,250)
        fill(245,34,10)
        ellipse(500,i*200,TBellipseSize ,TBellipseSize )
    
        fill(245,34,122)
        ellipse(500,i*200,TBellipseSize-20,TBellipseSize-20)
      }   
    }

  else if(counter > 6000 && counter < 8000){

    background(255,130,42)

    let smallsideellipseSize = map(drum, 0,100,50,100)
  
fill(255,200,42)
ellipse(500,70,smallsideellipseSize,smallsideellipseSize);
ellipse(500,930,smallsideellipseSize,smallsideellipseSize);
ellipse(100,500,smallsideellipseSize,smallsideellipseSize);
ellipse(900,500,smallsideellipseSize,smallsideellipseSize);
ellipse(200,185,smallsideellipseSize,smallsideellipseSize);
ellipse(785,185,smallsideellipseSize,smallsideellipseSize);
ellipse(200,800,smallsideellipseSize,smallsideellipseSize);
ellipse(785,800,smallsideellipseSize,smallsideellipseSize);


let smallside1ellipseSize = map(drum, 0,100,80,100)
fill(255,170,42)
ellipse(500,70,smallside1ellipseSize-40,smallside1ellipseSize-40)
ellipse(500,930,smallside1ellipseSize-40,smallside1ellipseSize-40)
ellipse(100,500,smallside1ellipseSize-40,smallside1ellipseSize-40)
ellipse(900,500,smallside1ellipseSize-40,smallside1ellipseSize-40)
ellipse(200,185,smallside1ellipseSize-40,smallside1ellipseSize-40);
ellipse(785,185,smallside1ellipseSize-40,smallside1ellipseSize-40);
ellipse(200,800,smallside1ellipseSize-40,smallside1ellipseSize-40);
ellipse(785,800,smallside1ellipseSize-40,smallside1ellipseSize-40);

let smallside2ellipseSize = map(drum, 0,100,80,100)
fill(255,140,42)
ellipse(500,70,smallside2ellipseSize-60,smallside2ellipseSize-60)
ellipse(500,930,smallside2ellipseSize-60,smallside2ellipseSize-60)
ellipse(100,500,smallside2ellipseSize-60,smallside2ellipseSize-60)
ellipse(900,500,smallside2ellipseSize-60,smallside2ellipseSize-60)
ellipse(200,185,smallside2ellipseSize-60,smallside2ellipseSize-60);
ellipse(785,185,smallside2ellipseSize-60,smallside2ellipseSize-60);
ellipse(200,800,smallside2ellipseSize-60,smallside2ellipseSize-60);
ellipse(785,800,smallside2ellipseSize-60,smallside2ellipseSize-60);
//small circles aroun star

  }

  else if (counter > 8000 && counter < 9500){
    
    background(255,200,42)

    fill(255,140,42)
    let smallerellipseSize = map(drum,0,100,30,100)
    ellipse(300,400,smallerellipseSize,smallerellipseSize)
    ellipse(300,600,smallerellipseSize,smallerellipseSize)
    ellipse(420,720,smallerellipseSize,smallerellipseSize)
    ellipse(600,720,smallerellipseSize,smallerellipseSize)
    ellipse(700,600,smallerellipseSize,smallerellipseSize)
    ellipse(700,400,smallerellipseSize,smallerellipseSize)
    ellipse(600,300,smallerellipseSize,smallerellipseSize)
    ellipse(400,300,smallerellipseSize,smallerellipseSize)
  
    fill(255,170,42)
    ellipse(300,400,smallerellipseSize-20,smallerellipseSize-20)
    ellipse(300,600,smallerellipseSize-20,smallerellipseSize-20)
    ellipse(420,720,smallerellipseSize-20,smallerellipseSize-20)
    ellipse(600,720,smallerellipseSize-20,smallerellipseSize-20)
    ellipse(700,600,smallerellipseSize-20,smallerellipseSize-20)
    ellipse(700,400,smallerellipseSize-20,smallerellipseSize-20)
    ellipse(600,300,smallerellipseSize-20,smallerellipseSize-20)
    ellipse(400,300,smallerellipseSize-20,smallerellipseSize-20)
  
    fill(255,200,42)
    ellipse(300,400,smallerellipseSize-40,smallerellipseSize-40)
    ellipse(300,600,smallerellipseSize-40,smallerellipseSize-40)
    ellipse(420,720,smallerellipseSize-40,smallerellipseSize-40)
    ellipse(600,720,smallerellipseSize-40,smallerellipseSize-40)
    ellipse(700,600,smallerellipseSize-40,smallerellipseSize-40)
    ellipse(700,400,smallerellipseSize-40,smallerellipseSize-40)
    ellipse(600,300,smallerellipseSize-40,smallerellipseSize-40)
    ellipse(400,300,smallerellipseSize-40,smallerellipseSize-40)

  }

  else if (counter > 9500 && counter < 12800){
    
    background(205,2,40)

    let bigredellipseSize = map(vocal,0,100,200,300)
    
    fill(205,0,30);
    ellipse(500,500,bigredellipseSize+700,bigredellipseSize+700);
  
    fill(205,10,50);
    ellipse(500,500,bigredellipseSize+600,bigredellipseSize+600);
  
    fill(205,30,70);
    ellipse(500,500,bigredellipseSize+500,bigredellipseSize+500);
  
    fill(207,50,90);
    ellipse(500,500,bigredellipseSize+400,bigredellipseSize+400);
  
    fill(207,70,110);
    ellipse(500,500,bigredellipseSize+300,bigredellipseSize+300);
  
    fill(207,90,130);
    ellipse(500,500,bigredellipseSize+200,bigredellipseSize+200);
  
    fill(207,110,150);
    ellipse(500,500,bigredellipseSize+100,bigredellipseSize+100);
  
    fill(207,130,170);
    ellipse(500,500,bigredellipseSize+25,bigredellipseSize+25);

    fill(207,130,170)
    let smallerellipseSize = map(drum,0,100,30,100)
    ellipse(300,400,smallerellipseSize,smallerellipseSize)
    ellipse(300,600,smallerellipseSize,smallerellipseSize)
    ellipse(420,720,smallerellipseSize,smallerellipseSize)
    ellipse(600,720,smallerellipseSize,smallerellipseSize)
    ellipse(700,600,smallerellipseSize,smallerellipseSize)
    ellipse(700,400,smallerellipseSize,smallerellipseSize)
    ellipse(600,300,smallerellipseSize,smallerellipseSize)
    ellipse(400,300,smallerellipseSize,smallerellipseSize)

    fill(207,110,150)
    ellipse(300,400,smallerellipseSize-20,smallerellipseSize-20)
    ellipse(300,600,smallerellipseSize-20,smallerellipseSize-20)
    ellipse(420,720,smallerellipseSize-20,smallerellipseSize-20)
    ellipse(600,720,smallerellipseSize-20,smallerellipseSize-20)
    ellipse(700,600,smallerellipseSize-20,smallerellipseSize-20)
    ellipse(700,400,smallerellipseSize-20,smallerellipseSize-20)
    ellipse(600,300,smallerellipseSize-20,smallerellipseSize-20)
    ellipse(400,300,smallerellipseSize-20,smallerellipseSize-20)

    fill(207,90,130)
    ellipse(300,400,smallerellipseSize-40,smallerellipseSize-40)
    ellipse(300,600,smallerellipseSize-40,smallerellipseSize-40)
    ellipse(420,720,smallerellipseSize-40,smallerellipseSize-40)
    ellipse(600,720,smallerellipseSize-40,smallerellipseSize-40)
    ellipse(700,600,smallerellipseSize-40,smallerellipseSize-40)
    ellipse(700,400,smallerellipseSize-40,smallerellipseSize-40)
    ellipse(600,300,smallerellipseSize-40,smallerellipseSize-40)
    ellipse(400,300,smallerellipseSize-40,smallerellipseSize-40)
  //big red circle at main chorus
 
  }

fill(255,90,130);
triangle(310,300,500,420,420,500);

triangle(310,700,420,500,500,580);

triangle(690,300,500,420,580,500);

triangle(690,700,500,580,580,500);
//smaller star

 fill(255,90,130);
 triangle(500,map(bass,0,100,150,100),435,445,565,445);
 
 triangle(500,map(bass,0,100,850,900),435,555,565,555);
 
 triangle(map(bass,0,100,200,150),500,445,435,445,565);
 
 triangle(map(bass,0,100,800,850),500,555,435,555,565);

 fill(255,90,100);
 triangle(500,225,445,445,555,445);
 triangle(500,775,445,555,555,555);
 triangle(265,500,445,445,445,555);
 triangle(750,500,555,445,555,555);

 fill(255,80,90);
 triangle(500,300,445,445,555,445);
 triangle(500,700,445,555,555,555);
 triangle(325,500,445,445,445,555);
 triangle(680,500,555,445,555,555);
//big star

fill(245,34,122);//light pink
let ellipseSize = map(drum,0,100,200,300);
ellipse (500,500,ellipseSize,ellipseSize);

fill(245,34,94);//pink
ellipse (500,500,ellipseSize-25,ellipseSize-25);

fill(245,34,66);//darker pink
ellipse (500,500,ellipseSize-50,ellipseSize-50);

fill(245,34,40);//red
ellipse (500,500,ellipseSize-100,ellipseSize-100);

fill(245,34,20);//red
ellipse (500,500,ellipseSize-150,ellipseSize-150);

fill(245,34,10);//red
ellipse (500,500,ellipseSize-200,ellipseSize-200);
//main middle pink circle 

}