
// Variables
let operandoA;
let operandoB;
let operation;
// calculator function
function init(){
    //Variables y/o constantes
    const result = document.getElementById("result");
    const reset1 = document.getElementById("reset1");
    const reset2 = document.getElementById("reset2");
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const multiplication = document.getElementById("multiplication");
    const division = document.getElementById("division");
    const equal = document.getElementById("equal");
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");
    const cero = document.getElementById("cero");
    const point = document.getElementById("point");

    //Eventos
    one.onclick = function(e){
        result.textContent = result.textContent + "1"
    }
    two.onclick = function(e){
        result.textContent = result.textContent + "2"
    }
    three.onclick = function(e){
        result.textContent = result.textContent + "3"
    }
    four.onclick = function(e){
        result.textContent = result.textContent + "4"
    }
    five.onclick = function(e){
        result.textContent = result.textContent + "5"
    }
    six.onclick = function(e){
        result.textContent = result.textContent + "6"
    }
    seven.onclick = function(e){
        result.textContent = result.textContent + "7"
    }
    eight.onclick = function(e){
        result.textContent = result.textContent + "8"
    }
    nine.onclick = function(e){
        result.textContent = result.textContent + "9"
    }
    cero.onclick = function(e){
        result.textContent = result.textContent + "0"
    }
    point.onclick = function(e){
        result.textContent = result.textContent + "."
    }
    reset1.onclick = function(e){
        operandoA = "";
        operandoB = "";
        operation = "";
        resete();
    }
    reset2.onclick = function(e){
        clean();
    }
    plus.onclick = function(e){
        operandoA = result.textContent;
        operation = "+"; 
        clean();
    }
    minus.onclick = function(e){
        operandoA = result.textContent;
        operation = "-"; 
        clean();
    }
    multiplication.onclick = function(e){
        operandoA = result.textContent;
        operation = "*"; 
        clean();
    }
    division.onclick = function(e){
        operandoA = result.textContent;
        operation = "/"; 
        clean();
    }
    equal.onclick = function(e){
        operandoB = result.textContent;
        answer();
    }
    // Metodos

    function clean(){
        result.textContent = "";
    }

    function resete(){
        result.textContent = "";
        operandoA = 0;
        operandoB = 0;
        operation = "";
    }

    function answer(){
        let res = 0;
        switch(operation){
            case "+": 
                res = parseFloat(operandoA) + parseFloat(operandoB);break;
            case "-": 
                res = parseFloat(operandoA) - parseFloat(operandoB);break;
            case "*": 
                res = parseFloat(operandoA) * parseFloat(operandoB);break;
            case "/": 
                res = parseFloat(operandoA) / parseFloat(operandoB);break; 
        }
        resete();
        result.textContent = res;
    }
    

}



