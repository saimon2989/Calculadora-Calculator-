
//Variables y/o constantes
const numberButton = document.getElementsByName('dataNumber');
const opeButton =document.getElementsByName('opeButton');
const reset1 = document.getElementsByName("reset1")[0];
const reset2 = document.getElementsByName("reset2")[0];
const equal = document.getElementsByName("equal")[0];
const point = document.getElementById("point");
let result = document.getElementById("result");
// Variables especiales
let operA = '';
let operB = '';
let operation = undefined;
//Eventos
numberButton.forEach(function(button){
button.addEventListener('click', function(){
    addNumber(button.innerText);
    })
});
opeButton.forEach(function(button){
    button.addEventListener('click', function(){
        selecOperation(button.innerText);
    })
});
equal.addEventListener('click', function(){
    answer();
    refreshDisplay();
});
reset1.addEventListener('click', function(){
    clean();
    refreshDisplay();
})
reset2.addEventListener('click', function(){
    deleteOne();
})
point.addEventListener('click', function(){
    addPoint();
})
// Metodos y funciones
function addNumber(num){
    operA = operA.toString() + num.toString();
    refreshDisplay();
}
function selecOperation(op){
    if (selecOperation === "") return;
    if (operB !== ""){
        answer()
    }
    operation = op.toString();
    operB = operA;
    operA = "";
}
function refreshDisplay(){
    result.value = operA;
}
function deleteOne(){
    operB = operB;
    operA = "" ;
    result.textContent = "";
    operation = operation;
}
function clean(){
    result.textContent = "";
    operA = "";
    operB = "";
    operation = "";
    document.getElementById('result').value = "0";
}
function addPoint(num){
    operA = operA + ".";
    refreshDisplay();
}
function answer(){
    let calculate;
    const anterior = parseFloat(operB);
    const actual = parseFloat(operA);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch(operation){
        case "+":
            calculate = anterior + actual;
            break;
        case "-":
            calculate  = anterior - actual;
            break;
        case "*":
            calculate = anterior * actual;
            break;
        case "/":
            calculate = anterior / actual;
            break;
        default:
            return;
    }
    operA = calculate;
    operation = undefined;
    operB = ""; 
}
clean();




