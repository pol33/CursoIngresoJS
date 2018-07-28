/*Vamos a ingresasr estos datos
 Maria f 15
 Jose m 33
 Fer f  25*/
function mostrar()
{

	/*	var nota;
		var sexo;
		var promedio;
		var notaMinima;
		var sexoNotaBaja;
		var cantidadVarones=0;
		var respuesta;
		var cantNotas=0;
		var acumNotas=0;

		while(respuesta!="no")
		{
			nota=prompt("ingrese una nota");
			nota=parseInt(nota);

			while(nota>10||nota<0)
			{
				nota=prompt("Nota invalida");
			}			
			sexo=prompt("Ingrese f,fememnino y m:masculino");
			while(sexo!="m"&&sexo!="f")
			{
				sexo=prompt("Sexo invalido");
			}
			cantNotas++;
			acumNotas+=nota;
			promedio=acumNotas/cantNotas;

			if (cantNotas==1||nota<notaMinima)
			 {
			 	notaMinima=nota;
			 	sexoVarones=sexo;
			 	
			 }
			if (sexo=="m"&&nota>=6)
			 {
			 	cantidadVarones++;
			 }
		
		respuesta=prompt("Desea continuar");

		}	 
			
			 alert("Elpromedio de las notas totales es: "+promedio+" la nota minima y su sexo es: "+notaMinima+" "+sexoVarones+"C- "+cantidadVarones)*/


 /*Maria f 15
 Jose m 33
 Fer f  25*/
 		var nombre;
 		var sexo;
 		var edad;
 		var contador=0;
 		var cantM=0;
 		var cantV=0;
 		var cantMen=0;
 		var cantMay=0;
 		var cantVmen=0;
 		var cantMmen=0;
 		var cantVmay=0;
 		var cantMmay=0;
 		var promedio;
 		var promedioV;
 		var promedioM;
 		var nombreMay;
 		var nombreMen;
 		var nombreMujerMay;
 		var sexoMay;
 		var sexoMen;
 		var sumaEdades=0;
 		var edadMinima;
 		var edadMaxima;
 		var sumaEdadV=0;
 		var sumaEdadM=0;


 		while(contador<3)
 		{  

	 		nombre=prompt("ingrese un nombre");
	 		
	 		sexo=prompt("Ingrese un sexo");
	 		while(sexo!="f"&&sexo!="m")
	 		{
	 			sexo=prompt("error ,Ingrese un sexo");
	 		}

	 		edad=prompt("Ingrese la edad");
	 		edad=parseInt(edad);
	 		while(isNaN(edad)|| edad>100||edad<0)
	 		{
	 			edad=prompt("Edad invalida");
	 			edad=parseInt(edad);
	 		}

	 		
	 		
	 		if (sexo=="f"&&edad<18) 
	 			{
	 				cantM++;
	 				cantMmen++;
	 				sumaEdadV+=edad;
	 				
	 			}	
	 		else
	 			{
	 				if (sexo=="f"&&edad>18)
	 				 {
	 				 	cantMmay++;
	 				 	nombreMujerMay=nombre;
	 				 	sumaEdadM+=edad;

	 				 }
	 				 else
	 				 	{
	 				 		if (sexo=="m"&&edad<18)
	 				 		 {
	 				 		 	cantV++;
	 				 		 	cantVmen++;
	 				 		 	sumaEdadV+=edad;

	 				 		 }
	 				 		 else
	 				 		 	{
	 				 		 		if (sexo=="m"&&edad>18)
	 				 		 		 {
	 				 		 		 	cantVmay++;
	 				 		 		 	sumaEdadV+=edad;

	 				 		 		 }
	 				 		 	}		 				 		
	 				 	}
	 				}

	 				if (contador==0||edad<edadMinima)
	 				 {
	 				 	edadMinima=edad;
	 				 	sexoMay=sexo;
	 				 }
	 				if (contador==0||edad>edadMayima)
	 				 {
	 				 	edadMayima=edad;
	 				 	sexoMen=sexo;

	 				 }

	 		
		 	 	
		 			 sumaEdades+=edad;

		 	 
		 	
		 	

	 				contador++;

 		 		

 		    }
 	

 			 promedio=sumaEdades/3;
		 	 promedioV=sumaEdadV/cantV;
		 	 promedioM=sumaEdadM/cantM;



					
	  document.write("Cantidad de varones "+cantV+" cantidad de mujeres "+cantM+" el menor es  "+cantMen+" el mayor "+cantMay+"<br/>");
	  document.write("Cantidad mujeres mayores "+cantMmay+" cantidad mejeres menores "+cantMen+" cantidad varones mayores "+cantVmay+"<br/>");
	  document.write("Cantidad varones menores "+cantVmen+"EL promedio total "+promedio+"E l promedio de los varones "+promedioV+"el promedio de las mujeres "+promedioM);
		
		

}