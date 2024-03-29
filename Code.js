//function for countdownTimer V1 for week1-2
function blastoffTimerV1(){
    console.log("blastoffTimerV1() function started");
    //created variable currTime set it equal to 10
    var currTime = 10;
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
    //9
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 1000)
    //8
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 2000)
    //7
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 3000)
    //6
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 4000)
    //5
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 5000)
    //4
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 6000)
    //3
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 7000)
    //2
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 8000)
    //1
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 9000)
    //blastoff
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = "Blastoff!!!";
        console.log(currTime);
    }, 10000)
}

function playCraps(){
    console.log("playCraps() started");
    //generate variables: die1, die2, sum
    var die1;
    var die2;
    var sum;

    //roll the dice
    die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1); 
    die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);  
    //determine the sum of the two dice and save it in sum
    sum = die1 + die2;
    console.log("sum is equal to" + sum); 

    //follow the rules of Craps
    //first lose
    if(sum == 7 || sum == 11){
        document.getElementById("crapsStatus").innerHTML = "Craps!! You lose!"
    } else if(die1 == die2 && die1%2 == 0){
        document.getElementById("crapsStatus").innerHTML = "Huzzah! You Win!!."
    } else {
        document.getElementById("crapsStatus").innerHTML = "You did not lose."
    }

}

function blastoffTimerV2(){
    console.log("blastoffTimerV2() started");
    //want a loop that runs 11 times, 10-1 and then blastoff
    var countdownTimer = 1000;
    var stepTime = 10;

    for(var i = 0; i < countdownTimer; i = i +1){
        setTimeout(function(){
            console.log(countdownTimer);
            document.getElementById("countdownStatus").innerHTML = countdownTimer;
            countdownTimer = countdownTimer - 1;
        }, stepTime * i)
    }
    setTimeout(function(){
        console.log(countdownTimer);
        document.getElementById("countdownStatus").innerHTML = "Blastoff!!!";
    }, stepTime * countdownTimer)
}