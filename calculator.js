
//Variables y/o constantes
const reset1 = document.getElementsByName("reset1")[0];
const reset2 = document.getElementsByName("reset2")[0];
const opeButton =document.getElementsByName('opeButton');
const equal = document.getElementsByName("equal")[0];
const numberButton = document.getElementsByName('dataNumber');
const point = document.getElementById("point");
let result = document.getElementById("result");

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
    reset();
    refreshDisplay();
})


point.addEventListener('click', function(){
    addPoint();
})


// reset2.addEventListener('click', function(){
//     clean();
// }) 

// Metodos

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

function refreshDisplay(){
    result.value = operA;
}

function reset(){
    operA = 0;
    operB = "";
    operation = "";

}

function clean(){
    operA = "";
    operB = "";
    operation = undefined;
}

function addPoint(num){
    operA = operA + ".";
    refreshDisplay();
}

clean();




