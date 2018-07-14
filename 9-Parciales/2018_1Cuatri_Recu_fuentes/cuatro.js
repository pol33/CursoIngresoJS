function mostrar()
{


	var numeroUno;
	var numeroDos;
	var suma;
	var division;


	numeroUno=prompt("Ingrese un numero");
	numeroDos=prompt("Ingrese otro numero");


	if(numeroUno==numeroDos){
		alert(numeroUno+numeroDos);
	}

	else{
			numeroUno=parseInt(numeroUno);
	    	numeroDos=parseInt(numeroDos)

	        if(numeroUno>numeroDos){

	    	division=numeroUno/numeroDos;
	    	alert("La resta es: "+resta);

	       }
	          else{

	    	  suma=numeroUno+numeroDos;
			//alert("La suma es: "+suma);
	

	  	     if(suma<50){
			 alert("La suma es "+suma+" y  es menor a 50.");
	    	}

	   	     else{
			 alert("La suma es: "+suma);
		   }
		
	}

	}

	
}
