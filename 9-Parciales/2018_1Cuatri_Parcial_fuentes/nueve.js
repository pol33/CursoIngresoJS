function mostrar()
{
	var cantProducto=0;
	var marca;
	var peso;
	var temp;
	var tempPares=0;
	var marcaMasPesado;
	var productoBajoCero=0;
	var promedioPeso;
	var acumPeso=0;
	var pesoMax;
	var pesoMin;
	var respuesta;
	var tempCero=0;

	while(respuesta!="no")
		{
			cantProducto++;
			marca=prompt("Ingrese marca");
			peso=prompt("Ingrese el peso");
			peso=parseInt(peso)
			while(peso>100||peso<1)
			{
				peso=prompt("Error");
				peso=parseInt(peso)

			}

			temp=prompt("Ingrese la temperatura");
			temp=parseInt(temp);
			while(temp<-30||temp>30)
			{
				temp=prompt("Error");
				temp=parseInt(temp);
			}

			acumPeso+=peso;

			if (temp%2==0)
			 {
			 	tempPares++;
			 }

			 if (cantProducto==1||peso<pesoMin)
			 {
			 	pesoMin=peso;

			 }
			 if (cantProducto==1||peso>pesoMax)
			  {
			  	pesoMax=peso;
			  	marcaMasPesado=marca;
			  }

			  if (temp<0)
			   {
			   		tempCero++;
			   }

			   respuesta=prompt("Desea continuar?");

		}

		promedioPeso=acumPeso/cantProducto;

		document.write("a)las temperaturas pares: "+tempPares);
		document.write("b)la marca es: "+marcaMasPesado);
		document.write("c)productos bajo certo: "+tempCero);
		document.write("d)el promedio es: "+promedioPeso);
		document.write("e)el peso maximo es: "+pesoMax+" y el minimo es: "+pesoMin);
		document.write("")















}
