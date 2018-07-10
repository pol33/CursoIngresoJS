function mostrar()
{

	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=prompt("NumeroUno");
	numeroDos=prompt("NumeroDos");


	if(numeroUno==numeroDos){
		alert(numeroUno+numeroDos);
	}
	else{
			numeroUno=parseInt(numeroUno);
	        numeroDos=parseInt(numeroDos)
			suma=numeroUno+numeroDos;
	}

	if(suma>10){
		alert("La suma es "+suma+" y supero el 10.");
	}

}
