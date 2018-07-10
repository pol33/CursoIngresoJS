
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var superficie;

	ancho=prompt("Ingrese el ancho.");
	largo=prompt("Ingrese el largo.");

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=largo*2+ancho*2;
	superficie=largo*ancho;


	alert("El perimetro es "+perimetro+" y la supérficie es "+superficie);
}
