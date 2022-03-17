//logic is tonuse event listener when edit button click
// on input event listener to text area which updates main paert

// here we make  the enite note we made earlier only when we click on thsi add button
const addBtn= document.getElementById("add");
// to send data to webs server data has to be a string and .stringify does that and pasre to convert it
//see json and whats written below
// const notes = JSON.parse(localStorage.getItem("notes"));

// if (notes){
//     //then we want to go
//     notes.forEach(note=>{
//         addNewNote(note);
//     });
// }

addBtn.addEventListener("click",()=>{
    addNewNote();
})

function addNewNote(text=""){
    // creating div after click
    const note=document.createElement("div");
    // giving it class of note
    note.classList.add("note");
    // putting content inside div with class of note
    // make sure of the indexing
    note.innerHTML=`
        <div class="notes">
            <div class="tools">
            <button class="edit"><i class="fa-regular fa-pen-to-square"></i></button>
            <button class="delete"><i class="fa-solid fa-trash"></i></button>
            </div>
            <div class="main hidden"></div>
         <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
    `;

    const editBtn= note.querySelector(".edit");
    const deleteBtn=note.querySelector(".delete");
    

// notesE1 has main and text area inside notes div
    const main=note.querySelector(".main");
    const textArea= note.querySelector("textArea");

    textArea.value=text;


// event listener to delete button

    deleteBtn.addEventListener("click",()=>{
        note.remove();
        updateLS();
    });
// whenever edit button click we want to toggle in between the main div and text area
    editBtn.addEventListener("click",() =>{
    // toggle helps add or remove the class hidden whenever the editbtn is clicked
        main.classList.toggle("hidden");
    // one will get triggered at a time 
        textArea.classList.toggle("hidden");
    } );


    textArea.addEventListener("input",(e)=>{
    //{} part of destructuring assigment wherin we dont have to write const value =e.value.oject
        const { value }=e.target;
        main.innerHTML=marked(value);
        // updatinglocal storage so that when we load this again we back it up
        updateLS();
    });    
    //appending this div inside of body
    document.body.appendChild(note);
}

function updateLS(){
    const notesText=document.querySelectorAll('textarea');
//we append all the notes text to this empty array const and then while loading again we convt const to string and display it
    const notes=[];
// use to iterate in a aaray
    notes.forEach(note =>{
        notes.push(note.value);
    });

    localStorage.setItem('notes',JSON).stringify(notes);

}


 