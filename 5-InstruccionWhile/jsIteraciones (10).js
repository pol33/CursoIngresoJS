function mostrar()
{

	var contador=0;
	//declarar contadores y variables
	var positivo=0;
	var negativo=0;
	var ceros=0;
	var diferencia;
	var sumaPositivos=0;
	var sumaNegativos=0;
	var numerosPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var respuesta="si";
	var numero;

	while(respuesta!="no")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		while(numero==isNaN)
		{
			numero=prompt("Ingrese un numero");
			numero=parseInt(numero);

		}

		//contador++;
		if (numero<0) 
			{
				negativo=numero;
				sumaNegativos+=numero;
			}
			else
			{
				if (numero==0)
				 {
				 	ceros=numero;
				 }
				 else
				 	{
				 		positivo=numero;
				 		sumaPositivos+=numero;
				 	}
			}	

		if (numero%2==0||numero==0)
			 {
			 	numerosPares=numero;
			 }
		if (negativo==0)
			 {
			 	negativo=1;
			 }	
		if (positivo==0)
		 	{
		 		positivo=1;
		 	}
		promedioPositivos=sumaPositivos/positivo;
		promedioNegativos=sumaNegativos/negativo;

		diferencia=positivo-negativo;


		respuesta=prompt("Desea continuar");




			
	}

	document.write("1) "+sumaNegativos+"<br/>");
	document.write("2) "+sumaPositivos+"<br/>");
	document.write("3) "+positivo+"<br/>");
	document.write("4) "+negativo+"<br/>");
	document.write("5) "+ceros+"<br/>");
	document.write("6) "+numerosPares+"<br/>");
	document.write("7) "+promedioPositivos+"<br>");
	document.write("8) "+promedioNegativos+"<br/>");
	document.write("9) "+diferencia);




}//FIN DE LA FUNCIÓN