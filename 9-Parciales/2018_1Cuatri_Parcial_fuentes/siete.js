function mostrar()
{
	var notas;
	var canatNotas=0;
	var edad;
	var cantNotas=0;
	var acumNotas=0;
	var promedio;
	var notaMinima;
	var sexoNotaMinima;
	var edadMinima;
	var sexoEdadMinima;
	var varonesMayores=0;
	var cantMujer=0;
	var edadPrimeraMujer;
	var notaPrimeraMujer;
	var respuesta;

		while(cantNotas<5)
		{
			nota=prompt("Ingrese una nota");
			nota=parseInt(nota);
			while(nota>10||nota<0)
			{
				nota=prompt("Nota invalida");
				nota=parseInt(nota);
			}
			sexo=prompt("Ingrese un sexo");
			while(sexo!="f"&&sexo!="m")
			{
				sexo=prompt("Sexo invalido");
			}
			edad=prompt("Ingrese la edad");
			edad=parseInt(edad);

			cantMujer++;
			cantNotas++;
			acumNotas+=nota;
			promedio=acumNotas/5;
			if (cantNotas==1||nota<notaMinima)
			 {
			 	notaMinima=nota;
			 	sexoNotaMinima=sexo;
			 }
			 if (sexo=="m"&&edad>18&&nota>=6)
			  {
			  	varonesMayores++;
			  }
			 if (edad<edadMinima||cantNotas==1)
			  {
			  	edadMinima=edad;
			  	sexoEdadMinima=sexo;
			  }
			if (sexo=="f"&&cantMujer==1)
			 {
			 	edadPrimeraMujer=edad;
			 	notaPrimeraMujer=nota;
			 }
			 else
			 {
			 	alert("No hubo mujeres");
			 }

			 
		}










}
