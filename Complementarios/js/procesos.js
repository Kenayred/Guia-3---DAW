var operandoa = 0, operandob = 0, resultado=0;
var num = 0;
var operacion;
var ni = 1;

function numero(a){
    if(operandoa == 0 || ni == 1){
        texto.innerHTML = a;
        operandoa = a;
    } else {
        texto.innerHTML += a;
    }

    ni = 0;
}

function borrar(){
    operandoa = 0;
    operandob = 0;
    resultado = 0;
    texto.innerHTML = "";
}

function limpiar(){
    texto.innerHTML = "";
}

function primero(b){
    switch(b){
        case "+":
            operacion = "+";
        break;
        case "-":
            operacion = "-";
        break
        case "*":
            operacion = "*";
        break;
        case "/":
            operacion = "/";
        break;
    }
    operandoa = texto.textContent;
    limpiar();
}

function resul(){
    switch (operacion){
        case "+":
            operandob = texto.textContent;
            resultado = parseFloat(operandoa) + parseFloat(operandob);
            limpiar();
            texto.innerHTML = resultado;
        break;
        case "-":
            operandob = texto.textContent;
            resultado = parseFloat(operandoa) - parseFloat(operandob);
            limpiar();
            texto.innerHTML = resultado;
        break;
        case "*":
            operandob = texto.textContent;
            resultado = parseFloat(operandoa) * parseFloat(operandob);
            limpiar();
            texto.innerHTML = resultado;
        break;
        case "/":
            operandob = texto.textContent;
            resultado = parseFloat(operandoa) / parseFloat(operandob);
            limpiar();
            texto.innerHTML = resultado;
        break;
    } 
}

function cuadrado(){
    operandoa = texto.textContent;
    resultado = Math.pow(parseInt(operandoa), 2);
    texto.innerHTML = resultado;
}

function inversaa(){
    operandoa = texto.textContent;
    resultado = 1 / parseFloat(operandoa);
    texto.innerHTML = resultado;
}

function raizz(){
    operandoa = texto.textContent;
    resultado = Math.sqrt(parseFloat(operandoa));
    texto.innerHTML = resultado;
}

window.onload = function(){
    texto = document.getElementById('resul');
}