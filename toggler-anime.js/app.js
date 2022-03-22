// moon datapoints
const moonPath=
"M12 27.5C12 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 12 12.3122 12 27.5Z";

//we want to morpth to moon then back to sun
const sunPath= 
"M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode=document.querySelector("#darkMode");
const heading=document.querySelector(".heading");

// a toogler to change between the upper two parts and background color etc
// let helps change value
let toggle=false;

darkMode.addEventListener('click',()=>{
    // anime js in here do animation in seqence
    // timeline func parameter of oject
    const timeline=anime.timeline({
        // duration of each animation
        duration: 750,
        // type of transition
        easing:"easeOutExpo",
    });

    // adding animationt to timeline
    // another oject as parameter
    timeline.add({
        // its like query selector
        targets:".sun",
        // the data points
        // its an AARAY OR OBJECTS
        // on click becomes moon
        d:[{value:toggle ? sunPath:moonPath}]
    })
    // addagain to timeline
    // note it waits ofr fist to morph then rotates
    .add({
        targets:"#darkMode",
        rotate:320
    },"-=350"
    // an offsset to make the animation faster to aviod that seqentieal issue
    // now it will animate at half speed
    )
    .add({
        targets:"section",
        // using ternary operator to switch color
        color:toggle?"rgb(22,22,22)":"rgb(255,255,255)",
        backgroundColor: toggle?'rgb(255,255,255)':"rgb(22,22,22)"
    }, "-=700"
    )
    .add({
        targets:heading,
        textContent:toggle?"Light Mode":"Dark Mode"
    },"-=700")
    // toggleing to stwich back to light
    // when we click if not flase then if will run and change toggle to true
    //  now if toggle not true the else will run amnd make it false
    if(!toggle){
        toggle=true;
    }else{
        toggle=false;
    }
});