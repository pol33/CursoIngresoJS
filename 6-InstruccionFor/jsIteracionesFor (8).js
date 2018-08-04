function mostrar()
{
	var numeroIngresado;
	var numeroDivisor;
	var numeroRecorrido;
	var sumaNumerosDivisores=0;
	var respuesta;

	numeroIngresado=prompt("Ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);


	 for( numeroRecorrido=1;numeroRecorrido<numeroIngresado ;numeroRecorrido++ )
	 		{
	 			if (numeroIngresado%numeroRecorrido==0)
	 			 {
	 			 	
	 			 	numeroDivisor=numeroRecorrido;
	 			 	sumaNumerosDivisores+=numeroDivisor;
	 			 }
	 		}


	 		if (sumaNumerosDivisores==numeroIngresado)
	 		 {
	 		 	respuesta="El numero ingresado "+numeroIngresado+" es perfecto.";
	 		 }
	 		 else
	 		 		{
	 		 			respuesta="El numero ingresado "+numeroIngresado+" no es perfecto.";
	 		 			
	 		 		}

	 		 alert(respuesta);



}//FIN DE LA FUNCIÓN