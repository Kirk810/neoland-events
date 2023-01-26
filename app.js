//Iteracion #1: Creando Events
/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/
const button = document.createElement("button");
button.id = "btnToClick";
document.body.appendChild(button);
console.log(button)
function clickEvent (event) {
    console.log(event)
    }
button.onclick = clickEvent;

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const input = document.querySelector(".focus")
console.log(input);
function focusEvent () {
    console.log(input.value);
}
input.onfocus = focusEvent;

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input1 = document.querySelector(".value");
console.log(input1);
function inputEventClick () {
    console.log(input1.value)
}
input1.oninput = inputEventClick;