/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var Sueldo;
	var Resultado;
	
	Sueldo=document.getElementById('sueldo').value;

	Sueldo=parseInt(Sueldo);

	Resultado=Sueldo*1.10;

	document.getElementById('resultado').value=Resultado;
	
}
