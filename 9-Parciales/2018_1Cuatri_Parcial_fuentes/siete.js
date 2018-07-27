function mostrar()
{/*
	var nota;
	var promedio;
	var suma=0;
	var sexo;
	var sexoMin;
	var sexoVarones;
	var notaMin;
	var notaMax;
	var notaVarones=0;
	var aux=0;
	var i;
	
	for(i=1;i<6;i++)
	{
		nota=prompt("");
		nota=parseInt(nota);
		while(nota==isNaN)
		{
		nota=prompt("Nota invalida");
		}
		//suma+=nota;
		sexo=prompt("Elija sexo");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Sexo invalido");
		}
		if(nota<notaMin || aux==0)
		{
			notaMin=nota;
			sexoMin=sexo;
			aux=1;
		}
		if(nota>notaMax ||aux==0)
		{
			notaMax=nota;
		}
		if(nota>=6 && sexo=="m")
		{
			notaVarones++;
			//sexoVarones=;
		}
		suma+=nota;
	}
	alert("a)El promedio: "+suma/5+"b)Nota mas baja y su sexo: "+notaMin+" y "+sexoMin+"c)cantidad de varones con notas>=6: "+notaVarones);
*/
		var nota;
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
			
			 alert("Elpromedio de las notas totales es: "+promedio+" la nota minima y su sexo es: "+notaMinima+" "+sexoVarones+"C- "+cantidadVarones)





					
	
		
		
}
