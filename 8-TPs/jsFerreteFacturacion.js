/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{/*
	var precio1;
	var precio2;
	var precio3;
	var suma;

	precio1=document.getElementById('PrecioUno').value;
	precio2=document.getElementById('PrecioDos').value;
	precio3=document.getElementById('PrecioTres').value;
	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);

	suma=precio1+precio2+precio3;

	alert("La suma es "+suma);

}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var promedio;

	precio1=document.getElementById('PrecioUno').value;
	precio2=document.getElementById('PrecioDos').value;
	precio3=document.getElementById('PrecioTres').value;
	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);
	
	promedio=(precio3+precio2+precio1)/3;
	
	alert("El promedio es "+promedio);
}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var precioFinal;
	var IVA;

	precio1=document.getElementById('PrecioUno').value;
	precio2=document.getElementById('PrecioDos').value;
	precio3=document.getElementById('PrecioTres').value;
	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);
	
	IVA=(precio1+precio2+precio3)*0.21;

	precioFinal=(precio1+precio2+precio3)+IVA;

	alert("El precio final con el IVA ES "+precioFinal);

}*/
		var precio1=parseInt(document.getElementById('PrecioUno').value);
		var precio2=parseInt(document.getElementById('PrecioDos').value);
		var precio3=parseInt(document.getElementById('PrecioTres').value);
		var suma;
		var IVA=0.21;

		suma=precio1+precio2;

		alert("La suma es "+suma);

	}

