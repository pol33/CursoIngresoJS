/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Declaro la variables.
	var NumeroUno;
	var NumeroDos;
	//var Suma;
	var Resultado;
	Resultado=66;
	//Tomo los numeros por ID.
	NumeroUno=document.getElementById('numeroUno').value;
	NumeroDos=document.getElementById('numeroDos').value;

	//Resultado=NumeroUno+NumerDos;
	//Los convierto en enteros.
	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);
   	
   	//Realizo la suma.
	Resultado=NumeroUno+NumeroDos;
	//Muestro la suma.
	alert("La suma es: "+Resultado);
	//alert(Resultado);

}

