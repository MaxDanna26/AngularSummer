const fct = document.getElementById("Factorial");
const msj = document.getElementById("msj");

const calcularFactorial = () => {

let fctNumber = parseInt(fct.value, 10);


if(isNaN(fctNumber))
{
    alert("Ingrese un numero por favor!")
}
else
{
    let factorial = 1;
    for (let i = 1; i <= fctNumber; i++) {
        factorial *= i;
    }
    msj.innerHTML = "El factorial de " + fctNumber + " es " + factorial;
}
}

