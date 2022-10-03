/** Script */

let reset = true
let pressedNum = 0
let lpbio = false ;// last pressed button is operator
 /** Para escribir un numero en la pantalla principal */
const numberButtons = document.getElementsByClassName("numberButton");
console.log (numberButtons);
for (const numberButton of numberButtons) {
    numberButton.addEventListener('click', function onClick() {
        lpbio = false
        pressed = this.textContent;
        if (reset==true){
            pressedNum = pressed;
            reset = false;
            document.getElementById("result").textContent=`${pressedNum}`;
        } else {
            pressedNum = pressedNum + pressed;
            document.getElementById("result").textContent=`${pressedNum}`;
        }})}

/** Para definir el operador sin necesidad de llamar la funcion y resetear la pantalla principal */
let operatorActive = false;  // para que actualice el resultado si se presionan 2 operadores sin presionar antes =
let tempOperator = ''; // guarda el operador que será evaluado
const operators = document.getElementsByClassName("operator");
let temp1 = '' ;//primer numero
let temp2 = '' ;//segundo numero que se define luego en equal()

for (const operator of operators) {
    operator.addEventListener('click', function onClick() {
        console.log("3")
        pressed = this.textContent;
        if (lpbio == true){
            tempOperator = `${pressed}`;
            operationScreen2();
        } else if (operatorActive == false){
            temp1 = document.getElementById("result").textContent
            lpbio = true
            tempOperator = `${pressed}`;
            reset = true;
            operatorActive = true;
            operationScreen2();
            dot.disabled=false;
        } else {
            equal();
            lpbio = true
            operatorActive = true;
            tempOperator = `${pressed}`;
            reset = true;
            operationScreen2();
            dot.disabled=false;
            }
        })}

/**Evaluador */
function equal() {
    lpbio = false;
    dot.disabled=false;
    operatorActive = false;
    temp2 = document.getElementById("result").textContent
    operationScreen1()
    switch (tempOperator){
        case ("+"):
            document.getElementById("result").textContent = +temp1 + +temp2;
            break;
        case ("-"):
            document.getElementById("result").textContent = temp1 - temp2;
            break;
        case ("x"):
            document.getElementById("result").textContent = temp1 * temp2;
            break;
        case ("/"):
            document.getElementById("result").textContent = temp1 / temp2;
            break;
    }
    temp1 = document.getElementById("result").textContent;
    reset = true;
}

function eras() {
    document.getElementById("result").textContent = document.getElementById("result").textContent.slice(0, -1)
}

function eraseScreen() {
    reset = true;
    pressedNum = 0;
    operatorActive = false;
    tempOperator = 0;
    temp1 = 0;
    temp2 = 0;
    document.getElementById("result").textContent=''
    document.getElementById("operation").textContent='';
}
 /**Update top screen deppending of action */
function operationScreen1(){
    document.getElementById("operation").textContent=`${temp1} ${tempOperator} ${temp2} =`;
}

function operationScreen2(){
    document.getElementById("operation").textContent=`${temp1} ${tempOperator}`;
}

/** Disable dot if there is any */
const dot = document.getElementById("110")
function floate() {
    dot.disabled=true
}

/** to enable keyboard to press buttons */
window.addEventListener('keydown', function(Event) {
    const toPress = document.getElementById(`${Event.keyCode}`);
    if(!toPress) return;
    toPress.click();
})

