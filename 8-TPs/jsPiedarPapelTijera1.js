/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var Piedra=0;
var Papel=1;
var Tijera=2;

function comenzar()
{
		eleccionMaquina=Math.random()*2;
		eleccionMaquina=(eleccionMaquina.toFixed(0));
		alert(eleccionMaquina);
		

}//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina==Tijera)
	 {
	 	alert("Gano");
	 }

}//FIN DE LA FUNCIÓN
function papel()
{
	if(eleccionMaquina==Piedra)
	{
		alert("Gano");
	}

}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina==Papel)
	{
		alert("Gano");
	}	

}//FIN DE LA FUNCIÓN