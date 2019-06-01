
var gameOver = false;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#playerForm").addEventListener("submit", function(e){
        e.preventDefault();


        var player1  = document.querySelector("#player1").value;
        var player2 = document.querySelector("#player2").value;
        console.log(player1);
        console.log(player2);

        document.getElementById("playerForm").style["display"] = "none";
        document.getElementById("tictactoe").style["display"] = "block";

        document.getElementById("playerName1").innerHTML = player1;
        document.getElementById("playerName2").innerHTML = player2;

 
      
    });
}, false);

var lastWasCross = false;
var grid = [0,0,0,0,0,0,0,0,0];
var score1 = 0;
var score2 = 0;

var turnCounter = 0;

function addMark(id) {

    if(document.getElementById(id).innerHTML.length === 0){
        if(lastWasCross){
            document.getElementById(id).innerHTML = 'O';
            grid[id]= 1;
            lastWasCross = false;
            turnCounter++;
        }else {
            document.getElementById(id).innerHTML = 'X';
            grid[id]= -1;
            lastWasCross = true;
            turnCounter++;
        }
    }else alert("Invalid move! Try again.");

    

    checkCondition();

    if(gameOver){

        for(var i = 0; i<9; i++){
            document.getElementById(i).innerHTML = "";
        }
        gameOver = false;
        grid = [0,0,0,0,0,0,0,0,0];
        document.getElementById("playerScore1").innerHTML = score1;
        document.getElementById("playerScore2").innerHTML = score2;
        turnCounter = 0;
    }
}



function  checkCondition(){

        // Check rows
        for (j = 0; j<9; j+=3){
            var sum = 0;
            for (i = 0+j; i < 3+j; i++ ){
                sum += grid[i];
        }
        if (sum === 3){
            score1++;
               alert("Zeros Won!" 
               + '\n' + score1 + ":" + score2);
               
               gameOver = true;
               return 0;
            } else if (sum === -3){
                score2++;
                alert("Crosses Won!"
                + '\n' + score1 + ":" + score2);
                
                gameOver = true;
                return 0;
            }
        }   
        //Check collumns
        for (j = 0; j<3; j++){
            var sum = 0;
            for (i = 0+j; i < 9; i+=3 ){
                sum += grid[i];
        }
        if (sum === 3){
            score1++;
               alert("Zeros Won!" 
               + '\n' + score1 + ":" + score2);
               
               gameOver = true;
               return 0;
            } else if (sum === -3){
                score2++;
                alert("Crosses Won!"
                + '\n' + score1 + ":" + score2);
                
                gameOver = true;
                return 0;
            }
        } 
        //Check diagnals
        var sum1 =  grid[0]+grid[4]+grid[8];
        var sum2 =  grid[2]+grid[4]+grid[6];
        if (sum1 === 3 || sum2 ===3){

            score1++;
               alert("Zeros Won!" + '\n' + score1 + ":" + score2);
              
               gameOver =true;
               return 0;
            } else if (sum1 === -3 || sum2 === -3){

                score2++;
                alert("Crosses Won!"+ '\n' + score1 + ":" + score2);
               
                gameOver =true;
                return 0;
            } 

    if (turnCounter >= 9){
        gameOver = true;
        alert("Draw"+ '\n' + score1 + ":" + score2);
    }

}