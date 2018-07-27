function mostrar()
{
	var hora=document.getElementById("laHora").value;
	hora=parseInt(hora);
	var mensaje;
	
	switch(hora)
	{
		case 0:
		case 1:
		case 2:
		case 3:
		mensaje="La proxima sera";
		break;
		case 4:
		case 5:
		case 6:
		mensaje="raspando";
		if(hora<5){
			mensaje=mensaje+" debes esforzarte mas";
		}
		break;
		case 7:
		case 8:
		case 9:
		case 10:
		mensaje="Aprobo";
		if(hora>8)
		{
			mensaje=mensaje+" muy bien";
		
			}
		break;
		default:
		mensaje="Hora no valida";
		}
		alert(mensaje);
}
