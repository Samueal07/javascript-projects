// selecting everything we need
const section=document.querySelector("section");
const playerLivesCount=document.querySelector("span");
// keeping it let so that we can modify it
let playerLives=6;

// linking text
playerLivesCount.textContent=playerLives;

// importing images andadding names to them 
// an array of ojects 16 cards
// when no curly after arraw it will auto maticalyy return array
const getData=()=>[
    {imgSrc:"images/atletico.png",name:"atletico"},
    {imgSrc:"images/barcelona.png",name:"barcelona"},    
    {imgSrc:"images/bayern.png",name:"bayern"},
    {imgSrc:"images/chelsea.png",name:"chelsea"},
    {imgSrc:"images/liverpool.png",name:"liverpool"},
    {imgSrc:"images/man-city.png",name:"man-city"},
    {imgSrc:"images/man-utd.png",name:"man-utd"},
    {imgSrc:"images/real-madrid.png",name:"real-madrid"},
    {imgSrc:"images/atletico.png",name:"atletico"},
    {imgSrc:"images/barcelona.png",name:"barcelona"},    
    {imgSrc:"images/bayern.png",name:"bayern"},
    {imgSrc:"images/chelsea.png",name:"chelsea"},
    {imgSrc:"images/liverpool.png",name:"liverpool"},
    {imgSrc:"images/man-city.png",name:"man-city"},
    {imgSrc:"images/man-utd.png",name:"man-utd"},
    {imgSrc:"images/real-madrid.png",name:"real-madrid"}

];

const randomize=()=>{
    //we are running the getData function inside this randomiser function
    const cardData=getData();
    // imp to randomise and array we use below trick
    //see how
    cardData.sort(()=>Math.random()-0.5);
    // we need to return this new version of card data so that
    // card generator function can use it
    return cardData;

}

// card generator
const cardGenerator=()=>{
    // running randomising it then runnning then randomizing...
    const cardData=randomize();
   
    // generate html

    // item gives us access to each individual 16 img
    cardData.forEach((item)=>{
        const card= document.createElement("div");
        // for each item we generate an back an img and a div
    //the actual img
    // here only generating 1 img we need 16 so we use loop
        const face=document.createElement("img");
    // the back withish part
        const back=document.createElement("div");
    //adding classes
        card.classList="card";
        face.classList="face";
        back.classList="back";

        // to speicify which img supeeerrr imp
        face.src=item.imgSrc;
        // attaching names
        card.setAttribute("name",item.name);
        // using section to bring allabove together
        section.appendChild(card);
        // in card we want a face and back
        card.appendChild(face);
        card.appendChild(back); 
        
        card.addEventListener("click",(e)=>{
            // it adds then removes then adss
            card.classList.toggle("toggleCard");
            checkCards(e);
        })

    });    
//checking cards
const checkCards=(e)=>{
    const clickedCard=e.target;
    // do two flips then check if match the keep flipped else unflipp
    clickedCard.classList.add("flipped");
    const flippedCards=document.querySelectorAll(".flipped");
    const toggleCard=document.querySelectorAll(".toggleCard");
    // check after two flip
    if (flippedCards.length===2){
        //checking if both samw
        if (flippedCards[0].getAttribute("name")===flippedCards[1].getAttribute("name")){
            console.log("match");
            // we need to remove fflipp on both occasion
            // if do match
            flippedCards.forEach(card=>{
                card.classList.remove("flipped");
                // but we want to keep them exposed so we dont remove toogle cards
                // but we do want to make it unclickable
                card.style.pointerEvents="none";
            })
        }
        else{
            console.log("wrong");
            // remove flipped fter 2 attmept
            flippedCards.forEach(card=>{
                card.classList.remove("flipped");
                // also unflipp it we need a delay to stop it being instant
                setTimeout(() => {
                    card.classList.remove("toggleCard");
                }, 1000);
            })
            playerLives--
            playerLivesCount.textContent=playerLives;
            // the cond for restart function
            if (playerLives===0){
                restart();
            }

        }
    }



    
}
    
}

// restarting
// we want to run this after check see in else
const restart=()=>{
    // first collecting everything
    let cardData=randomize();
    let faces=document.querySelectorAll(".face");
    let cards=document.querySelectorAll(".card");
    cardData.forEach((item,index)=>{
        // loop over each card then remove every toggled card
        cards[index].classList.remove(".toggleCard");
        // we also want to radom =mise cards pos after 0 lives
        f// delay for this to avoide jerking then randomise
        setTimeout(() => {
            // also restore pointer event on new game
            cards[index].style.pointerEvents="all";
        // get randomise version
            faces[index].src=item.imgSrc;
        //update name fformatching
            cards[index].setAttribute("name", item.name);
            
        },1000);
    });
    // ouside loop we make player lives to 6
    playerLives=6;
    playerLivesCount.textContent=playerLives;
    
}
cardGenerator();