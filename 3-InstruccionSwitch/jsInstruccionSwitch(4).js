function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Febrero":
		alert("Tiene 28 dias");
		break;

		case "Junio":
		case "Abril":
		case "Septiembre":
		case "Noviembre":
		alert("Este mes tiene 30 dias");
		break;

		default:
		alert("Este mes tienen 31 dias");
	}

	
	



}//FIN DE LA FUNCIÓN