//wjen page is fully LOADED also windowsonly has it so we used it
window.addEventListener("load",()=>{
    // we need to have class on audio(making a list)
    const sounds=document.querySelectorAll(".sound");
    // to make suree sound is olayed on click(take div inside the big pad)
    const pads=document.querySelectorAll(".pads div");
    const visual=document.querySelector(".visual");
    const colors=[
        // whenever we tap resp pad the color pops up
        '#D18CE0',
        '#97DBAE',
        '#85F4FF',
        '#F999B7',
        '#FFBF86',
        '#28FFBF' 
    ]




    // playing of sound
    // looping through each pad and for rach pad we add a eventlistener
    // index is the number of each sound
    pads.forEach((pad,index)=>{
        //using normal function to have asscess to this keyword
        pad.addEventListener("click",function(){
            // before playing sound we need to reset any current sound
            sounds[index].currentTime=0;
            // indexing needed to access each sound
            sounds[index].play();
            // really imp the index in colors in create bubble wont work in that const but will 
            //worok when passed in here
            createBubbles(index);


        })
    })
    // function to trigger bubble
    const createBubbles=(index)=>{
        const bubble=document.createElement("div");
        // attach to the visual div
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation="jump 1s ease";
        // to remove the bubble once the sound has been played
        bubble.addEventListener("animationend",function(){
            visual.removeChild(this);
        })
    }
})