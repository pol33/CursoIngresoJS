function mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad<18 && estadoCivil!="Soltero"){
		alert("Usted es muy pequeño para no ser soltero!!!");
	}
	


}//FIN DE LA FUNCIÓN