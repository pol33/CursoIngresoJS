function mostrar()
{
	var libro=0;
	var nombre;
	var paginas;
	var ventas;
	var cantPaginas=0;
	var cantVentas=0;
	var temas;
	var contador=0;
	var res;
	var cantPaginasImp=0;
	var cantPaginasPar=0;
	var CeroVentas=0;
	var acumVentas=0;
	var sumaPagProg=0;
	var promedio;

	while(res!="No")
		{
			nombre=prompt("Ingrese un libro");
			paginas=prompt("Ingrese la cantidad de paginas");
			paginas=parseInt(paginas);
			while(paginas<0)
				{
					paginas=("Por favor ingrese los numeros de paginas");
					paginas=parseInt(paginas);
				}		
			tema=prompt("Ingrese el tema");
			while(tema!="robotica"&&tema!="programacion"&&tema!="patrones"&&tema!="base de datos")
				{
					tema=prompt("Error ingrese un tema valido.");
				}
			ventas=prompt("Ingrese la cantidad de ventas");
			ventas=parseInt(ventas);
			acumVentas+=ventas;
			libro++;

			if(paginas%2==0)
				{
					cantPaginasPar++;
				}
			else

				{
					cantPaginasImp++;
				}
			if (ventas==0)
			 	{
			 		CeroVentas++;
			 	}
			 if (tema=="Programacion")
			 	 {
			 	 	sumaPagProg+=paginas;
			 	 }

			 	 res=prompt("Desea continuar?");


		}

		promedio=acumVentas/3;

		document.write("a)"+cantPaginasPar+"<br>");
		document.write("b)"+cantPaginasImp+"<br>");
		document.write("c)"+CeroVentas+"<br>");
		document.write("d)"+promedio+"<br>");
		document.write("e)"+sumaPagProg+"<br>");
		//document.write("a)"	






}
