var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
var Piedra=0;
var Papel=1;
var Tijera=2;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
		eleccionMaquina=Math.random()*2;
		eleccionMaquina=(eleccionMaquina.toFixed(0));
		//alert(eleccionMaquina);
			document.getElementById('ganadas').value=ContadorDeGanadas;
	document.getElementById('empatadas').value=ContadorDeEmpates;
	document.getElementById('perdidas').value=ContadorDePerdidas;

		



}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina==Papel)
	{
		alert("Gano");
		ContadorDeGanadas++;
	}
	else
	{
		if (eleccionMaquina==Piedra)
			 {
			 	alert("Empato");
			 	ContadorDeEmpates++;
			 }
			 else
			 {
			 	alert("Perdio");
			 	ContadorDePerdidas++;
			 }
	}

}//FIN DE LA FUNCIÓN
function papel()
{
		if(eleccionMaquina==Piedra)
	{
		alert("Gano");
		ContadorDeGanadas++;
	}
	else
	{
		if (eleccionMaquina==Papel)
			 {
			 	alert("Empato");
			 	ContadorDeEmpates++;
			 }
			 else
			 {
			 	alert("Perdio");
			 	ContadorDePerdidas++;
			 }
	}

}//FIN DE LA FUNCIÓN
function tijera()
{
		if(eleccionMaquina==Papel)
	{
		alert("Gano");
		ContadorDeGanadas++;
	}
	else
	{
		if (eleccionMaquina==Tijera)
			 {
			 	alert("Empato");
			 	ContadorDeEmpates++;
			 }
			 else
			 {
			 	alert("Perdio");
			 	ContadorDePerdidas++;
			 }
	}
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	ContadorDeGanadas=document.getElementById('ganadas').value;
	ContadorDeEmpates;
	ContadorDePerdidas;      	

}