function mostrar()
{
	 var precio;
	 var porcentajeDescuento;
	 var descuento;
	 var precioconDescuento;
	 var precioIVA;
	 var precioFinal;

	  precio=prompt("Inggrese el precio");
	  porcentajeDdescuento=prompt("Ingrese el descuento");

	  precio=parseInt(precio);
	  porcentajeDescuento=parseInt(porcentajeDescuento);

	  descuento=precio*porcentajeDescuento;

	  precioconDescuento=precio-descuento;

	  precioIVA=precio*0.21;


	  precioFinal=precio*descuento+precioIVA;

	  alert("El descuento es"+descuento+"El precio con descuento es "+precioconDescuento+" el IVA es "+precioIVA);

	  document.getElementById('precioFinal').value=precioFinal;

	  




}
