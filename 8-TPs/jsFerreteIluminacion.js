/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
/*{
 	var cantidad;
 	var marca;
 	var descuento;
 	var precioDescuento;
 	var TotalLamparas;
 	var precio;
 	var IIBB;
 	var precioIIBB;

 	cantidad=document.getElementById('Cantidad').value;
 	cantidad=parseInt(cantidad);
 	marca=document.getElementById('Marca').value;

 	precio=35;
 	TotalLamparas=precio*cantidad;

 	//Si compra 6 lamparas o mas:
 	if(cantidad>5){
 		precioDescuento=TotalLamparas-TotalLamparas*0.5;
	}
	//Si compra 5 lamparas o menos se ejecuta el siguiente else:----------------------------
	else{
		if(cantidad==5){
			if(marca=="ArgentinaLuz"){
				precioDescuento=TotalLamparas*0.4;
			}
			else{
				precioDescuento=TotalLamparas-TotalLamparas*0.3;
			}
		}

		//Si compra  4 lamparas:
		else{
			if(cantidad==4){
				if(marca=="ArgentinaLuz"||marca=="FelipeLamparas"){
				precioDescuento=TotalLamparas-TotalLamparas*0.25;
			}
			else{
				precioDescuento=TotalLamparas-TotalLamparas*0.20;
			}
			}

			//Si compra 3 lamparas:
			if(cantidad==3){
				if(marca=="ArgentinaLuz"){
					precioDescuento=TotalLamparas-TotalLamparas*0.15;
				}
				else{
					if(marca=="FelipeLamparas"){
						precioDescuento=TotalLamparas-TotalLamparas*0.1;
					}
					else{
						precioDescuento=TotalLamparas-TotalLamparas*0.05;
					}
				}
			}
		}
	}//Aqui finaliza el else correspondiente a la compra de 5 lamparas o menos--------------
	
	//Se muestra por id el precio con el descuento.
	document.getElementById('precioDescuento').value=precioDescuento;

	precioIIBB=precioDescuento+precioDescuento*0.1;
	/*Si el precio con el descuento supera los $120 se ejecuta el siguiente if y se
	muestra el mensaje del impuesto por ingresos brutos.*/
	/*if(precioDescuento>120){
		alert("Usted pago $"+precioIIBB+" de IIBB.");
	}
}
*/
{
	var precio;
	var descuento;
	var IVA=0.1;
	var marca;
    var cantidad;
    var precioIIBB;

    cantidad=document.getElementById("Cantidad").value;
    marca=document.getElementById("Marca").value;
    cantidad=parseInt(cantidad);
    precio=35;

    	if (cantidad>5) 
    	{
    		descuento=cantidad*precio*0.5;
    	}

    switch(cantidad)
    {
    	case 5:
    	if (marca=="ArgentinaLuz")
    	{
    		descuento=cantidad*precio*0.6;

    	}
    	else
    	{
    		descuento=cantidad*precio*0.7;
    	}
    	break;
    	case 4:
    		if (marca=="ArgentinaLuz"||marca=="“FelipeLamparas”")
    		 {
    		 	descuento=cantidad*precio*0.75;		
    		 }
    		 else
    		 {
    		 	descuento=precio*cantidad*0.8;
    		 }
    		 break;
		case 3:
		if (marca=="ArgentinaLuz")
		 {
		 	descuento=cantidad*precio*0.85;
		 }
		 else
		 {
		 	if (marca=="FelipeLamparas") 
		 	{
		 		descuento=cantidad*precio*0.9;
		 	}
		 	else
		 	{
		 		descuento=cantidad*precio*0.95;

		 	}
		 }
		 break;
		 }    		 	 

		 	document.getElementById('precioDescuento').value=descuento;
		 	if (descuento>120) 
		 	{
		 		descuento=descuento+descuento*IVA;
		 		alert("Usted pago: $"+descuento);
		 	}	
    

}