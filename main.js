(function(){
    "use strict";
    
    //querySelector pulls node list of the classes
    const $numberButtons = document.querySelectorAll(".number");
    //console.dir displays an interactive list of the properties of an object
    //console.dir($numberButtons);
    const $operatorButtons = document.querySelectorAll(".operator, .clear");
    const $equalButton = document.querySelector(".equal-sign");
    const calculation = [];
    let $display = document.querySelector(".calculator-screen");


    // screen.value go into push button functions
    // let displayValue = ' '(empty string) and have it display to the dom using .push

    //Event listener runs this function and is what fits in the (event) parameter
    function pushNumber(event){
        //push() drills down:
        //event. is the event listener for the $numberButtons node list
        //.target. is a DOM node, and will retrieve the .value of the event
        //push() will grab that value and toss it to the end of the calculation array
        calculation.push(event.target.value);
        $display.value = event.target.value;
        // $numberButtons.addEventListener('click', pushNumber)
    };
    //Same as above
    function pushOperator(event){
        calculation.push(event.target.value);
        $display.value = event.target.value;
    };

    //Clicking on a number will call the pushNumber function;
    //i.e. pushing '7' will tell JS to call pushNumber and pass it on as the event
    //$numberButtons.addEventListener('click', pushNumber);
    $equalButton.addEventListener('click', calculate);

    
    //-->calculate function
    function calculate(){
        console.log('=');
        console.log(calculation);
        //Coerces the loop as an undefined string to be concatenated
        let num1 = "",
        num2 = "",
        operator = null;
        //Creates an array of operators as strings the for loop searches through 
        const operators = ['*', '/', '+', '-'];
        //This for loop will run for the length of the array made by the calculation function
        for(let i = 0; i < calculation.length; i++){
            //char is whatever the array value on the index of 'i' is
            //i.e. if "'7', '3', '+', '4' '='" are pressed, calculation[0] would be 7
            let char = calculation[i];
            //Will check to see if char contains operators
            if (operators.includes(char)){
                operator = char; 
            //As long as operator is still null, this will concatenate the num1 string by char 
            } else if (!operator){
            num1 += char;
            //After an operator is logged, this will concatenate the char value to num2
            } else {
            num2 += char;
            }}
        //parseFloat will take the string values from the for loop above and convert them to float (number data type) 
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        //Whatever the operator is logged from the previous loop will decide the option selected
        if (operator === '+'){
            let answer = num1 + num2;
            $display.value = answer;
        } else if (operator === '-'){
            let answer = num1 - num2;
            $display.value = answer;
        } else if (operator === '*'){
            let answer = num1 * num2;
            $display.value = answer;
        } else if (operator === '/'){
            let answer = num1 / num2;
            $display.value = answer;
        } else {
            console.log("something is wrong")
        }
    }
    

    //Once the equal button is clicked, the calculate function run
    $equalButton.addEventListener('click', calculate)

    //forEach() loops through the node list from $numberButtons and listens for a click event
    //Once heard, the pushNumber function runs
    $numberButtons.forEach(function (button){
        button.addEventListener("click", pushNumber);
    });
    //Same as above
    $operatorButtons.forEach(function (button){
        button.addEventListener("click", pushOperator);
    });


})();