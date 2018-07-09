function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var nota;

	nota=Math.random()*10;
	nota=nota.toFixed(0);

	//alert(numeroRANDOM.toFixed(0));
	if(nota<11&&nota>8){
		alert("EXELENTE");
	}
	else if(nota<9&&nota>3){
		  alert("aprobo");
		}
	
	else{
		alert("La proxima sera");
	}
}//FIN DE LA FUNCIÓN