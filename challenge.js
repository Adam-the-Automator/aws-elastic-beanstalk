
function rpsGame(yourChoice){
    var humanChoice, robotChoice;
    console.log(yourChoice)
    humanChoice=yourChoice.id;
    //robotChoice is computer choice
    robotChoice=numberToChoice(randToRpsInt());
    console.log( robotChoice);
    result=decideWinner(humanChoice,robotChoice);
    console.log(result);
    message=finalMessage(result);
    console.log(message);
    rpsFrontEnd(humanChoice,robotChoice,message);

}
//this to get the robot choice
function randToRpsInt(){
    return Math.floor(Math.random()*3);
};
function numberToChoice(number){
    return ['rock','paper','scissors'] [number];
};
//this is to get the result
//using json library
function decideWinner(yourChoice,computerChoice){
    var rpsWinStreak={
    'rock':{'scissors':1,'rock':0.5,'paper':0},
    'paper':{'rock':1, 'paper':0.5, 'scissors':0},
    'scissors':{ 'paper':1, 'scissors':0.5, 'rock':0}
    };
    var yourScore=rpsWinStreak[yourChoice][computerChoice];
     var computerScore=rpsWinStreak[computerChoice][yourChoice];

     return [yourScore,computerScore];
};
function finalMessage([yourScore,computerScore]){
    if(yourScore=== 0){
        return{'message':'You lost!', 'color':'red'};
    }
    else if(yourScore=== 0.5){
        return{'message':'You tied!','color' :'yellow'};
    }
    else{
        return{'message':'You won!','color':'green'};
    }
}
function rpsFrontEnd(humanImageChoice,robotImageChoice,finalMessage){
   var imgDatabase={
       'rock':document.getElementById('rock').src,
       'paper':document.getElementById('paper').src,
       'scissors':document.getElementById('scissors').src
   }
   
    //to remove images when you click on it

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv=document.createElement('div');
   var robotDiv=document.createElement('div');
   var messageDiv=document.createElement('div');

    humanDiv.innerHTML="<img src='" + imgDatabase[humanImageChoice] + "'height= 150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1)'>"
    messageDiv.innerHTML="<h1 style='color: "+ finalMessage['color'] +";font-size:60px; padding:30px;'>" + finalMessage['message']+"</h1>"
    robotDiv.innerHTML="<img src='" + imgDatabase[robotImageChoice] + "'height= 150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1)'>"
   
   
    document.getElementById('flexin').appendChild(humanDiv);
    document.getElementById('flexin').appendChild(messageDiv);
    document.getElementById('flexin').appendChild(robotDiv);
    

}
 