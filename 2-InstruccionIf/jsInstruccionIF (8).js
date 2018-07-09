function mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil="Soltero";

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

		if(edad>18&&estadoCivil=="Soltero"){

			alert("Es soltero y no es menor");
		}
		else{
				alert("Nada");

		}


}//FIN DE LA FUNCIÓN