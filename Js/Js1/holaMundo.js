// var numero1;
// var numero2;

// numero1 = prompt("Digame un numero");
// numero2 = prompt("Digite otro por favor!");

// if(numero1 == numero2)
//     {
//         alert("El primer numero es mas alto!")
//     }
// else if(numero1 > numero2)
//     {
//         alert("El primer numero es mas alto!")
//     }
// else
// {   
//     alert("El segundo es el mas alto!")
// }

// 19 20 A
// 16 18 B
// 12 15 C
// 9 11 D
// 0 8 E

var input = document.getElementById("input");
var Btn = document.getElementById("Btn");
var parrafo = document.getElementById("parrafo");

var respuesta = input.value;
function button(){
    if(respuesta >= "19")
        {
            parrafo.innerHTML('Calificacion A!')
        }
}



