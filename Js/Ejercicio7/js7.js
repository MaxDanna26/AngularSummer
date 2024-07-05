const msj = document.getElementById("msj");

function mayorSuma() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let suma = numero1 + numero2;

    if(numero1 > numero2)
        msj.innerHTML = "El numero mas grande es " + numero1 + " y su suma da como resultado " + suma;
    else if(numero2 > numero1)
        msj.innerHTML = "El numero mas grande es " + numero2 + " y su suma da como resultado " + suma;
    else
        msj.innerHTML = "Los numeros son iguales y su suma es " + suma; 
}