// we make a class and this class ha a special method name constructor
// inside constructor we save 2 things as properties these beling to display part

class calculator{
    constructor(previousOperandandTextElement,currentOperandandTextElement){
        this.previousOperandandTextElement=previousOperandandTextElement;
        this.currentOperandandTextElement=currentOperandandTextElement;
        // we call clear function as soon as new calculator object is created under this class
        clear();
    }
}
// all operation 

// clearing previous written+ the operator+ whats currently written
// by making them an empty string
clear(){
    this.currentOperand='';
    this.previousOperand='';
    //they dont have operation we clear things
    this.operation=undefined;
}

//delete
delete(){

}

//to put 24 25555 24343
appendNumber(number){
    // instead appending we just change it
    this.currentOperand=number;
}

// to chose operation
chooseOperation(operation){

}
// take numbers and oeration adn calculate it and display on output
compute(){

}
// to update display
updateDisplay(){
    this.currentOperandandTextElement.innerText=this.currentOperand;
}

//we put data inside bakcticks and use curlies
const numberButtons=document.querySelectorAll(`{data-number}`);
const operationButtons=document.querySelectorAll(`{data-operation}`);
const equalsButton=document.querySelector(`{data-equals}`);
const deleteButton=document.querySelector(`{data-delete}`);
const allClearButton=document.querySelector(`{data-all-clear}`);
const previousOperandTextElement=document.querySelector(`{data-previous-operand}`);
const currentOperandandTextElement=document.querySelector(`{data-current-operand}`);

// we need to store info so we make a class at start of prog
// now we intiate new object and pass in constructor arguments
const calculator= new calculator(previousOperandandTextElement,currentOperandandTextElement)

// to select number button
numberButtons.forEach(button =>{
    // select each button and add event listener to it
    button.addEventListener('click',()=>{
        // we append these numbers to our nre oject via innertext
        calculator.appendNumber(button.innerText)
        // we then update our prev and current operand displaty
        calculator.updateDisplay()
    })
})