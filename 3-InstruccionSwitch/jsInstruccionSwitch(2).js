function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño){
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		
		alert("Abrigate que hace frio");
		break;

		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		alert("Ya paso el invierno");

		break;

		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":

		alert("Falta poco para el invierno");

		break;
	
		

}

  }




