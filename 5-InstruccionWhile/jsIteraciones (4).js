function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(numero>10)
	{
		numero=prompt("Error");
	}

		document.getElementById('numero').value=numero;


}//FIN DE LA FUNCIÓN