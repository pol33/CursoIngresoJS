/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
  var numeroSecreto;
  var numeroIngresado; 
  var contadorIntentos;
  var contadorAciertos=0;

function comenzar()
{
		//numeroIngresado=document.getElementById('numero').value;
	//Genero el número RANDOM entre 1 y 100
	     numeroSecreto=Math.random()*600;
		numeroSecreto=(numeroSecreto.toFixed(0));
		contadorIntentos=0; 
		alert(numeroSecreto );
		//numeroIngresado=document.getElementById('numero').value;
		//contadorIntentos++;
		

}

function verificar()
{
		numeroIngresado=document.getElementById('numero').value;
		contadorIntentos++;

		if (numeroIngresado==numeroSecreto)
		 {
		 	alert("Usted tiene poderes mentales!!!");
		 	contadorAciertos++;
			alert("Vamos carajo!!!Felicitaciones ya tiene "+contadorAciertos+"aciertos!!!!!");

		 }
		else
			{
				if (numeroIngresado>numeroSecreto)
					{
						alert("Te pasaste!!!");
					}
				else
					{
						alert("Te falto!!!");
					}
		    }
		document.getElementById('intentos').value=contadorIntentos;			

}