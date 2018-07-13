function mostrar()
{

	var numeroUno;
	var numeroDos;
	var suma;
	var resta;


	numeroUno=prompt("Ingrese un numero");
	numeroDos=prompt("Ingrese otro numero");


	if(numeroUno==numeroDos){
		alert(numeroUno+numeroDos);
	}
	
		numeroUno=parseInt(numeroUno);
	    numeroDos=parseInt(numeroDos)

	    if(numeroUno>numeroDos){

	    	resta=numeroUno-numeroDos;
	    	alert("La resta es: "+resta);

	    }
	    else{

	    	suma=numeroUno+numeroDos;
			//alert("La suma es: "+suma);
	

	  	 if(suma>10){
			alert("La suma es "+suma+" y supero el valor de 10.");
	    	}
	   	 else{
			alert("La suma es: "+suma);

	}

}
			

}
