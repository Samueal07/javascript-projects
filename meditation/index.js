const app=()=>{
    //we need a song
    const song=document.querySelector(".song");
    //this is an ssvg
    const play=document.querySelector(".play");
    //we need to select the path of  circle inside svg

    // see circle tag inside the svg
    const outline=document.querySelector(".moving-outline circle");
    const video=document.querySelector(".vid-container video");

    // selecting all sounds
    const sounds=document.querySelectorAll(".sound-picker button");
    // time display(the h3 tag)
    const timeDisplay=document.querySelector(".time-display");
    // for
    const timeSelect= document.querySelectorAll(".time-select button")
    // to get length of svg outline to animate later
    // we get the outline length
    const outlineLength=outline.getTotalLength();

    // duration of meditation
    // its fake as we are not corealting it with sound its just a simple bitch timer which 
    // will stop sound on completion of time
    let fakeDuration=600;


    // we creat dashes in the outline of circle of 100px
    // outline.style.strokeDasharray=100
    // logic here is to animate the offset and animate offset to make it move like a timer line
    // blue line
    outline.style.strokeDasharray=outlineLength;
// the offset is kind of opposite to dashed array wherein it adds
// white line on each 200 or anyspeiced lengh
//white line
// white line decrease using length- 
    outline.style.strokeDashoffset=outlineLength;



    // to pick different sounds

    sounds.forEach(sound=>{
        sound.addEventListener("click",function(){
            song.src=this.getAttribute('data-sound')
            video.src=this.getAttribute("data-video")
            checkPlaying(song)
        })
    })
    //play sound
    play.addEventListener("click",()=>{
        // song class in audio
        checkPlaying(song);
    });


    // changing time between 10 5 2 minutes
    timeSelect.forEach(option=>{
        option.addEventListener("click",function(){
            // we are using normal func for this keyword
            // se use of data attribute in JS
            fakeDuration=this.getAttribute("data-time");
            timeDisplay.textContent=`${Math.floor(fakeDuration/60)}:${Math.floor(fakeDuration%60)}`
            // to reset everting at end of session 
            if (currentTime>=fakeDuration){
                song,pause()
                song.currentTime=0;
                play.src="svg/play.svg"
                video.pause()
            }
        })
    })

    // we need to stop play and even pause song and ven change icon
    const checkPlaying=song=>{
        // if song paused and now clicked then play song and change icon to pause
        // also notice that we didnt call func we just took defintion of func
        if (song.paused){
            song.play();
            video.play();
            play.src="svg/pause.svg";
        }
        // if already playing and then clicked
        else{
            song.pause();
            video.pause();
            play.src="svg/play.svg";
        }
    }

    // for animatiing circle as per the time
    // whenever we play song this function starts
    song.ontimeupdate=()=>{
        // starts from zero
        let currentTime=song.currentTime;
        let elapsed= fakeDuration-currentTime;
        // jumps to zzero at 60 sec
        let seconds=Math.floor(elapsed % 60);
        let minutes=Math.floor(elapsed/60);

        // animating the circle border
        // below is equation to determine speed of animation
        let progress= outlineLength-(currentTime/fakeDuration)*outlineLength;
        outline.style.strokeDashoffset=progress

        // animating text 
        timeDisplay.textContent=`${minutes}:${seconds}`;
    }
}




app();