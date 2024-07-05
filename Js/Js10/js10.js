const one = document.getElementById("1");
const two = document.getElementById("2");
const tres = document.getElementById("3");
const cuatro = document.getElementById("4");
const msj = document.getElementById("msj");

const Comparar = () => {

let numberU = parseInt(one.value, 10);
let numberD = parseInt(two.value, 10);
let numberT = parseInt(tres.value, 10);
let numberF = parseInt(cuatro.value, 10);
const numbers = [numberU,numberD,numberT,numberF];
let masAlto;

if(isNaN(numberU) || isNaN(numberD) || isNaN(numberT) || isNaN(numberF))
{
    alert("Ingrese un numero correcto por favor!")
}
else {
    masAlto = numbers[0];
    for (let i = 1; i < numbers.length; i++)
    {
        if (numbers[i] > masAlto) 
            masAlto = numbers[i];
    }

    msj.innerHTML = "El numero mas alto es " + masAlto ;
}
}
