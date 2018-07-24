/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

	var numeroSecreto; 
	var contadorIntentos=0;
	var numeroIngresado;
	var mensaje;
	var reseteoContador;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.random()*10;
	numeroSecreto=(numeroSecreto.toFixed(0));	
		alert(numeroSecreto);
}

function verificar()
{
		numeroIngresado=document.getElementById('numero').value;
		contadorIntentos++;
		if(numeroIngresado==numeroSecreto){  

		switch(contadorIntentos)
		{
			case 1:

			//if (numeroIngresado==numeroSecreto)
			//	{
					mensaje="Usted es un psiquico!!!";
			//	}
					contadorIntentos=0;
			break;
			case 2:

			//if (numeroIngresado==numeroSecreto)
			//	{
					mensaje="Excelente persepcion!!!";
			//	}
			break;
			case 3:

			//if (numeroIngresado==numeroSecreto)
			//	{
					mensaje="Esto es suerte!!!";
			//	}
			break;
			case 4:

			//if (numeroIngresado==numeroSecreto)
			//	{
					mensaje="Excelente tecnica!!!";
			//	}
			break;
			case 5:

			//if (numeroIngresado==numeroSecreto)
			//	{
					mensaje="Usted esta en la media";
			//	}
			break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:

			//if (numeroIngresado==numeroSecreto)
			//	{
					mensaje="Falta tecnica";
			//	}
			break;
			default:
				mensaje="Afortunado en el amor";
		}
		
	}
	else
			{
				mensaje="Siga participando";
			}

			alert(mensaje);
			document.getElementById('intentos').value=contadorIntentos; 


}