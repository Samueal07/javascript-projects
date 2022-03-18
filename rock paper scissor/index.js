//whole gamefunction
// instead of declaring all varialbe at start to make them global and thenuse them
// we make a big game function and include everything inside of it and at last call the enitre function

const game=()=>{
    // using let as we want to update score and const cant be updated
    let pScore=0;
    let cScore=0;

// to start game
    const startGame=()=>{
        const playBtn=document.querySelector(".intro button");
        const introScreen=document.querySelector(".intro");
        // below is because its faded out and we want to fade it in on click
        const match=document.querySelector(".match");

        playBtn.addEventListener('click',()=>{
            introScreen.classList.add("fadeout");
            match.classList.add("fadein");

        });
    };

    // for the playing of match

    const playMatch=()=>{
        const options=document.querySelectorAll(".options button");
        const playerHand=document.querySelector(".player-hand");
        const computerHand=document.querySelector(".computer-hand");

        // super cooollllllll

        const hands=document.querySelectorAll(".hands img");
// fpr each hand after the event of animation is done we would like to repace animation with empty to end it
// this endsure ewe can click on another option and again get animation
        hands.forEach(hands=>{
            hands.addEventListener("animationend",function(){
                this.style.animation='';
            });
        })
        // randomly generate computer choice
        const computerOptions=['rock','paper','scissors'];

        // for each options i.e button we wnat a function which takes the button as parameter and adds event listenr to it

        options.forEach(options =>{
            // imp concept not to use arraw func with this as it wouldnt bound this to options
            // instead it would bound this to window
            options.addEventListener("click", function(){
                const computerNumber=Math.floor(Math.random()*3);
                // taking any element in array computeroptions using random
                const computerChoice=computerOptions[computerNumber];

                // to check usage of this use the below line
                // console.log(this);


                // we want to update the score display the winner right after animation
                // so we use timeout function to delay all this by 2s ensuring our animation goes first for 2s then updating
                
                setTimeout(()=>{
                    compareHands(this.textContent,computerChoice);
                // to display images as per the choice
                //this selects the enitre button and text coetnt selects the content ie rock or paper or scissor
                    playerHand.src=`./assets/${this.textContent}.png`;
                    computerHand.src=`./assets/${computerChoice}.png`; 
                } , 2000)
                // to remove animation after they finish we go up in player match
                playerHand.style.animation="shakePlayer 2s ease";
                computerHand.style.animation="shakeComputer 2s ease";


            });

        });

    };

    //updating score  call after choice is made
    const updateScore=()=>{
        const playerScore=document.querySelector(".player-score p");
        const computerScore=document.querySelector(".computer-score p");
            // here by changing pScore by inc we can change the both scores
        playerScore.textContent=pScore;
        computerScore.textContent=cScore;
        
        // to add the keyframe styling
        
        
    }


    // to comapre choices and declare winner
    const compareHands=(playerChoice,computerChoice)=>{
    // upate text
    const winner = document.querySelector(".winner");
    if (playerChoice=== computerChoice){
        //note major differnce in innerHTML and text context is that we cant acess tag using text content its just changes textr part
        // go to https://www.w3schools.com/jsref/prop_node_textcontent.asp and see at last example diff
        winner.textContent="Its a Tie!";
        return;//to end the entire winner function so that it doesnt go below
    }
    // for rock
    if (playerChoice==="rock"){
        if (computerChoice==="scissor"){
            winner.textContent="You WIn";
            pScore++;
            // only after increment we update score
            updateScore();
            return;
        }
        else{
            winner.textContent="You Lose";
            cScore++;
            updateScore();
            return;
        }
    }
    // for paper
    if (playerChoice==="paper"){
        if (computerChoice==="scissor"){
            winner.textContent="You Lose";
            cScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent="You Win";
            pScore++;
            updateScore();
            return;
        }
    }
    // for scissor
    if (playerChoice==="scissor"){
        if (computerChoice==="paper"){
            winner.textContent="You WIn";
            pScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent="You Lose";
            cScore++;
            updateScore();
            return;
        }
    }
    
    }

    // calling all function
    startGame();
    playMatch();
    

}
// at last call big function
game();