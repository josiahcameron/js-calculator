(function (){
    "use strict";

const $numberButton = document.querySelectorAll('[number]');
const $operationButton = document.querySelectorAll('[operator]');
const $equalButton = document.querySelector('[equal-sign]');
const $plusOrMinus = document.querySelector('[plus-minus]');
const $percentButton = document.querySelector('[percent');
const $decimalButton = document.querySelector('[decimal]');
const $numberBtnLg = document.querySelector('[number btn-lg]');
//Define a variable calculation pointing to an empty array
const $calculation = [];

/*Define a function named pushNumber that alert()s the number
associated with its event argument when called;
add this function as an event listener for the number buttons
*/
pushNumber = (event) => {alert(event.target.value)
};


function pushnumber (){
    $numberButton.addEventListener("click", alert())

}
}

/*
Define a function named pushOperator that alert()s the
operator (+, -, *, /, C) associated with its event argument when called;
add this function as an event listener for the operator buttons
*/
pushOperator = (event) => {
    alert(event.target.value)
};


/*Define a function named calculate that alerts() = when pressed; 
add this function as an event listener for the = button 
*/

calculate = () => {

}

/*Using Array.prototype.push, perform actions on the calculation 
variable when numbers and operators are pressed*/

button.calculate.push(pushNumber);

button.calculate.push(pushNumber);


/*Using a for loop, alert() the calculation when = is pressed.*/



/*$operationButton.addEventListener("click", pushOperator = () => {
    window.alert(this.$operationButton.toString);})
})*/