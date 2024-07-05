const DNI = document.getElementById("DNI");
const msj = document.getElementById("msj");

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const divisor = 23;

const calcularLetra = () => {
let numberDni = parseInt(DNI.value, 10);

if(isNaN(numberDni) || numberDni <= 0 || numberDni >= 99999999)
    alert("El numero proporcionado no es correcto!");
else{
    if(numberDni <= 9999999)
        alert("El numero ingresado no es lo suficientemente largo!")
    else{    
        let resultado = numberDni % divisor;
        let letra = letras[resultado];
        msj.innerHTML = "La letra de su dni deberia ser " + letra;
    }
}
}
