const msj = document.getElementById("msj");

function calcularNota() {
	nota = Number(document.getElementById('nota').value);
	switch (true) {
		case (nota>=19 && nota<=20):
			letra = 'La letra de la nota '+nota+' es A';
			break;
		case (nota>=16 && nota<19):
			letra = 'La letra de la nota '+nota+' es B';
			break;
		case (nota>=12 && nota<16):
			letra = 'La letra de la nota '+nota+' es C';
			break;
		case (nota>=9 && nota<12):
			letra = 'La letra de la nota '+nota+' es D';
			break;
		case (nota>=0 && nota<9):
			letra = 'La letra de la nota '+nota+' es E';
			break;
		case (isNaN(nota)):
			letra = 'Has introducido una nota no númerica';
			break;
		default:
			letra = 'La nota '+nota+' está fuera de rango';
	}
	msj.innerHTML = letra;
}


