/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var cantidadAlambre;
	var ancho;
	var largo;

	ancho=document.getElementById('Ancho').value;
	largo=document.getElementById('Largo').value;
	ancho=parseInt(ancho);
	largo=parseInt(largo);

	cantidadAlambre=ancho*2+largo;

	alert("La cantidad de alambre es "+cantidadAlambre+" metros.");
}
function Circulo () 
{
	var alambre;
	var radio;

	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);

	alambre=3.14*radio; 

	alert("La cantidad de alambre a comprar es "+alambre);
}
function Materiales () 
{
	var ancho;
	var largo;
	var cal;
	var cemento;
	var superficie;

	ancho=document.getElementById('Ancho').value;
	largo=document.getElementById('Largo').value;
	ancho=parseInt(ancho);
	largo=parseInt(largo);

	superficie=ancho*largo;

	cal=superficie*1;
	cemento=superficie*2;

	alert("Se precisan "+cal+" bolsas de cal y "+cemento+" bolsas de cemento.");

}