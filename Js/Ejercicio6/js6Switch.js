const msj = document.getElementById("msj");

function importeTotal() {
	precio = Number(document.getElementById('precioEntrada').value);
	numEntradas = Number(document.getElementById('numEntradas').value);
	let precioTotal;
	switch (numEntradas) {
		case 1:
			precioTotal=precio;	
			break;
		case 2:
			precioTotal=precio*numEntradas*0.90;
			break;
		case 3:
			precioTotal=precio*numEntradas*0.85;
			break;
		case 4:
			precioTotal=precio*numEntradas*0.80;
			break;
		default:
			precioTotal=precio*numEntradas*0.75;
	}
	msj.innerHTML = "El precio total es "+precioTotal+" €";
}


