const number = document.getElementById("number");
const msj = document.getElementById("msj");

const calcularParImpar = () => {

let parOimpar = parseInt(number.value, 10);


if(isNaN(parOimpar))
{
    alert("Ingrese un numero por favor!")
}
else
{
    if(parOimpar % 2 == 0)
        msj.innerHTML = "El numero ingresado es par!";
    else
        msj.innerHTML = "El numero ingresado es impar!";
}
}

