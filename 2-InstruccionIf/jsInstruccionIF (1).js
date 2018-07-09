function mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad==15){
		alert("Niña bonita!!");
	}
	else{
		alert("nO ES UMA NIÑA BONITA");
	}


}//FIN DE LA FUNCIÓN