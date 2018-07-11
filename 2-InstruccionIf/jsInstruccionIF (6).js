function mostrar()
{
//tomo la edad 	 
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	
	if (edad<13) {
		alert("Menor");
	}
	else{
		 if(edad>17){
			alert("Mayor");
		 }
		 else{
			alert("Adolescente");
		 }
	}



}//FIN DE LA FUNCIÓN