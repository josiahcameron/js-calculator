(function(){
    "use strict";
    

    const $numberButtons = document.querySelectorAll(".number");
    const $operatorButtons = document.querySelectorAll(".operator, .clear");
    const $equalButton = document.querySelector(".equal-sign");
    const calculation = [];
    
    function pushNumber(event){
        alert(event.target.value);
        calculation.push(event.target.value);
        console.log(calculation)
    };

    $numberButtons.forEach(function (button){
        button.addEventListener("click", pushNumber);
    });

    function pushOperator(event){
        alert(event.target.value);
        calculation.push(event.target.value);
        console.log(calculation)
    };

    $operatorButtons.forEach(function (button){
        button.addEventListener("click", pushOperator);
    });

    function calculate(event){
        alert(event.target.value);
        calculation.push(event.target.value);
        console.log(calculation);
        let num1 = "", num2 = "", operator = null;
    }

    equalButton.addEventListener('click', calculate)
    for(let i = 0; i < numberButtons.length; i++){
        console.log(numberButton[i])
    }

    for(let i = 0; i < calculation.length; i++){
        let char = calculation[i]
        if (operator.includes(char)){
            operator = char; 
    } else if (!operator){
        num1 += char;
    } else {
        num2 += char;
    }}

    numberButtons.addEventListener("click", pushNumber)

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (operator === '+'){
        alert(num1 + num2);
    } else if (operator === '-'){
        alert(num1 - num2);
    } else if (operator === '*'){
        alert(num1 * num2);
    } else if (operator === '/'){
        alert(num1 / num2);
    } else {
        alert("something is wrong")
    }
    $equalButton.addEventListener()




})();