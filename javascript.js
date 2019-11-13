/*  THIS IS OUR JS CODE*/

var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;














// when we click on our start or reset
document.getElementById("startreset").onclick = function () {
    
    if (playing == true) {
        location.reload();//reload page
    } else {
        
        
        //if we are not playing
        playing =true;
        //set score to zero
        score = 0;
        document.getElementById("scoreValue").innerHTML= score;
        
       // show coutdown box
      show("timeremaining");
        timeremaining = 60;
        document.getElementById("time").innerHTML = timeremaining;
        
        // hide gameover box
        hide("gameOver");
        
        // Change button reset 
        document.getElementById("startreset").innerHTML= "Reset Game";
        
        //starting the countdown
        startCountdown();
        
        // generate a new Q&A
        generateQA();
        
    }
}

















//clicking on any answer box

for(i=1; i<5; i++){
document.getElementById("box"+i).onclick = function(){
    //check if we are playing
    if(playing == true){
        if(this.innerHTML == correctAnswer){
            //if the answer is correct
            
            //increase score by 1
            score++;
            //display score
            document.getElementById("scoreValue").innerHTML = score;
            
            // hide wrong box
            hide("wrong");
            show("correct");
            setTimeout(function() {hide("correct");},1000);
            
            //Then we generate new questions and answers
            generateQA();
            
        }else{
            // if we have a wrong answer
            
             hide("correct");
            show("wrong");
            setTimeout(function(){hide("wrong");},1000);
        }
    }
    
}
}

// if we click on the start/reset button
// if we are playing,
//reload the page.
//if we are not playing
//set score zero
        //show countdown box
        // reduce the time by  1 sec in loops
//time left?
//yes = continue
        // no = gameover

//change button to reset
// generate new question and options.




// if we click on answer box
// are we playing or not?
//correct?
//yes
    // increase score
//  show correct boxfor 1sec
// generate new question and options
//if answer is wrong
//show try again box for 1sec.




//This is where we will define all our functions that we will be constantly using for our various manipulation




//start counter

function startCountdown(){
    action = setInterval(function(){
        timeremaining -=1;
         document.getElementById("time").innerHTML = timeremaining;
        if(timeremaining == 0){
            // gameover
            stopCountdown();
           show("gameOver");
            
		displayScore();
            
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
            
        }
        
        },1000);
}








//stop Counter

function stopCountdown(){
               clearInterval(action);
}




//hide an element

function hide(Id){
    document.getElementById(Id).style.display= "none";
}





//show an element

function show(Id){
    document.getElementById(Id).style.display= "block";
}








//generate question and multiple answers(options)

function generateQA(){

    var x =1+ Math.round(9*Math.random());   
    var y =1+ Math.round(9*Math.random());   
    correctAnswer = x*y;
    
    document.getElementById("question").innerHTML = x +"X"+y;
    
    var correctPosition = 1 + Math.round(3*Math.random());
    
    document.getElementById("box"+correctPosition).innerHTML=correctAnswer;//fill one box with the corect answer
    
    var answers = [correctAnswer];
    //fill other boxes with wrong answers
    
    for(i=1; i<5; i++){
        if(i != correctPosition){
            var wrongAnswer;
            
  do{        
      wrongAnswer =1+ Math.round(9*Math.random())*
            (1+ Math.round(9*Math.random()));//a wrong answer
      
  }while(answers.indexOf(wrongAnswer)>-1 )
            
            document.getElementById("box"+i).innerHTML=wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
    
}

//this will generate our gameover message and set a score

function displayScore(){
		            document.getElementById("gameOver").innerHTML= "<p>Game over<p/><p>your score is "+ score +".</p>"
}