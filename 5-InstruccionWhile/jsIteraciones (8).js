function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

		while(respuesta=="si")
	{
		numero=parseInt(prompt("Ingrese un numero"));
		if(numero>0)
		{
			positivo=positivo+numero;
		}
		if(numero<0)
		{
			negativo=negativo*numero;
		}
		contador++;
		respuesta=prompt("Desea seguir ingresando numeros?");
	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN