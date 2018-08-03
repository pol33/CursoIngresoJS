function mostrar()
{
	var nota;
	var sexo;
	var acumNotas=0;
	var promedioNotas;
	var sexoNotaMasBaja;
	var varonesMayores=0;
	var sexoMasJoven;
	var masJoven;
	var edad;
	var acumEdad=0;
	var mujer;
	var sexoMujer;
	var mensaje;
	var edadPrimeraMujer;
	var sexoPrimeraMujer;
	var notaPrimeraMujer;
	var contador=0;
	var contadorMujer=0;
	var notaMim;
	var edadMasJoven;
	var mensaje1;
	var mensaje2;
	var mensaje3;
	var mensaje4;
	var mensaje5;


while(contador<2)
	{  

			nota=prompt("INGRESE NOTA");
			nota=parseInt(nota);
			while(nota<1||nota>10||isNaN(nota))
				{
					nota=prompt("Error");
					nota=parseInt(nota);
				}
			edad=prompt("Ingrese edad entre 10 y 100");
			edad=parseInt(edad);
			sexo=prompt("Ingresee sexo");
			while(sexo!="f"&&sexo!="m")
				{
					sexo=prompt("error");
				}
			if (sexo=="f"&&contadorMujer==0)
			 {
			 	contadorMujer++;
			 	edadPrimeraMujer=edad;
			 	notaPrimeraMujer=nota;
			 }
			
			

			acumNotas+=nota;

			if (nota<notaMim||contador==0)
				 {
				 	notaMim=nota;
				 	sexoNotaMasBaja=sexo;

				 }

			if (edad>18&&nota>=6&&sexo=="m")
				 {
				 	varonesMayores++;

				 }
			if (edad<masJoven||contador==0)
				 {
				 	masJoven=edad;
				 	notaMasJoven=nota;
				 	sexoMasJoven=sexo;
				 }
			if (contadorMujer==1)
			 	{
			 		edadPrimeraMujer=edad;
			 		notaPrimeraMujer=nota;
			 	}
			 else
			 	{
			 		if (contadorMujer==0)
			 		 {
			 		 	mensaje="No hubo mujeres ingresadas";
			 		 }
			 	}

			 	contador++;

		}

		promedioNotas=acumNotas/contador;

		/*mensaje1=promedioNotas;
		mensaje2=notaMim+" y "+sexoMasJoven;
		mensaje3=varonesMayores;
		mensaje4=sexoMasJoven+" y "+notaMasJoven;
		mensaje5=edadPrimeraMujer+" y "+notaPrimeraMujer;*/
		alert("Mujeres ingresadas: "+contadorMujer+" cantidad.");


		
   alert("El promedio: "+promedioNotas+" Nota mas baja y su sexo "+notaMim+" "+sexoNotaMasBaja+" La xantidad de varones "+varonesMayores+" El sexo y nota mas joven: "+sexoMasJoven+" "+notaMasJoven)


}
