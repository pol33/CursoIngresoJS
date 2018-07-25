function mostrar()
{

	var contador=0;
	// declarar 
	var maximo;
	var minimo;
	var numeroIngresado;
	var bandera;
	
	var respuesta='si';
	//maximo=-999999;
	//minimo=999999;
	bandera=0;

	while(respuesta!='no')
	{
			numeroIngresado=prompt("Ingrese un numero");
			numeroIngresado=parseInt(numeroIngresado);		

			contador++;
			if(bandera==0)
			{
				maximo=numeroIngresado;
				minimo=numeroIngresado;
				bandera=1;
			}
			else{  
					if(numeroIngresado>maximo)
					{
						maximo=numeroIngresado;
					}
			
					if(numeroIngresado<minimo)
					{
						minimo=numeroIngresado;
					}
			
				}
			//contador++;



		respuesta=prompt("Ingrese no para salir");
	
	}
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN