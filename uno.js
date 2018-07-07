
function mostrar()
{
	 var base;
	 var altura;
	 var superficie;
	 var perimetro;

	 base=prompt("Inggrese la base");
	 altura=prompt("Ingrese la altura");

	 base=parseInt(base);
	 altura=parseInt(altura);

	 perimetro=base*3;

	 superficie=base*altura/2;

	 alert("El perimetro es "+perimetro+" y a superficie es "+superficie);

}
