var imprimo = document.getElementById("respuesta").value;
var numero1;
var numero2;
var operacion;
var cont=0;

function fun0() {
    document.getElementById("respuesta").value = 
    (document.getElementById("respuesta").value).concat("0");
}

function fun1() {
    document.getElementById("respuesta").value = 
    (document.getElementById("respuesta").value).concat("1");
}
function fun2() {
    document.getElementById("respuesta").value = 
    (document.getElementById("respuesta").value).concat("2");
}
function fun3() {
    document.getElementById("respuesta").value = 
    (document.getElementById("respuesta").value).concat("3");
}
function fun4() {
    document.getElementById("respuesta").value = 
    (document.getElementById("respuesta").value).concat("4");
}
function fun5() {
    document.getElementById("respuesta").value = 
    (document.getElementById("respuesta").value).concat("5");
}
function fun6() {
    document.getElementById("respuesta").value = 
    (document.getElementById("respuesta").value).concat("6");
}
function fun7() {
    document.getElementById("respuesta").value = 
    (document.getElementById("respuesta").value).concat("7");
}
function fun8() {
    document.getElementById("respuesta").value = 
    (document.getElementById("respuesta").value).concat("8");
}
function fun9() {
    document.getElementById("respuesta").value = 
    (document.getElementById("respuesta").value).concat("9");
}
function funmas() {
var cont = document.getElementById("respuesta").value.split("[-+*/]");

    document.getElementById("respuesta").value = 
        (document.getElementById("respuesta").value).concat("+");

}
function funmenos() {
    document.getElementById("respuesta").value = 
    (document.getElementById("respuesta").value).concat("-");
}
function funpor() {
    document.getElementById("respuesta").value = 
    (document.getElementById("respuesta").value).concat("*");
}
function fundividir() {
    document.getElementById("respuesta").value = 
    (document.getElementById("respuesta").value).concat("/");
}

function func() {
    document.getElementById("respuesta").value = "";
}

function funigual() { 
    document.getElementById("respuesta").value=eval(document.getElementById("respuesta").value);
}