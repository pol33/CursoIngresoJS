function mostrar()
{
//tomo la edad  
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad>=18){
		alert("Mayor de edad");
	}
	else{
		alert("No es mayor de edad");
	}


}

