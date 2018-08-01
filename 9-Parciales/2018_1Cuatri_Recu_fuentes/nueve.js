function mostrar()
{
	var animal;
	var peso;
	var temp;	
	var nombreMasPesado;
	var animalCero=0;
	var temPar=0;
	var promedioPeso;
	var respuesta;
	var acumPeso=0;
	var contador=0;
	var tempMasPesado;
	var bajoCero=0;
	var contCero=0;
	var pesoMinCero;
	var pesoMaxCero;



		while(respuesta!="no")
		{
			animal=prompt("iNGRESE ANIMAL");

			peso=prompt("Ingrese un peso");
			peso=parseInt(peso);
			while(peso>1000||peso<1)
					{
						peso=prompt("Error");
						peso=parseInt(peso);
					}
			temp=prompt("Ingrese un temperatura");
			temp=parseInt(temp);
			while(temp<(-30)&&temp>30)
					{
						temp=paraseInt("Error ");
						temp=paraseInt(temp);
					}
			acumPeso+=peso;
			
			if (temp<0&&(peso<pesoMinCero||contCero==0))
			 {
			 	
			 	pesoMinCero=peso;
			 	bajoCero++;
			 	//animalCero++;
			 }
			if (temp<0&&(peso>pesoMaxCero||contCero==0))
			 {
			 	pesoMaxCero=peso;
			 	contCero++;

			 }
			if (temp%2==0)
			 {
			 	temPar++;
			 }
			
			 
			 if(contador==0||peso<pesoMin)
			 	{
			 		pesoMin=peso;
			 	}
			 if (contador==0||peso>pesoMax)
			 	 {
			 	 	pesoMax=peso;
			 	 	nombreMasPesado=animal;
			 	 	tempMasPesado=temp;
			 	 }
			 
			    contador++;

			 	respuesta=prompt("Desea continuar?"); 	

		}

		promedioPeso=acumPeso/contador;


		document.write("a) "+temPar+"<br>");
		document.write("b) "+nombreMasPesado+" "+tempMasPesado+"<br>");
		document.write("c) "+bajoCero+"<br>");
		document.write("d)"+promedioPeso+"<br>");
		document.write("e) "+pesoMaxCero+" y "+pesoMinCero);
		











}
