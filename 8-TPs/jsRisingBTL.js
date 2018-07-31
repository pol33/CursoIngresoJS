/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var EstadoCivil;
	var Sueldo;
	var legajo;
	var nacionalidad;

	edad=prompt("Por favor ingrese su edad");
	while((edad<18||edad>90)||isNaN(edad))
		{
			edad=prompt("Error ingrese una edad entre 18 y 90");
		} 

	sexo=prompt("Ingrese su sexo");
	while(sexo!="F"&&sexo!="M")
		{
			sexo=prompt("Error ingrese"+"F"+"para femenino"+"y"+"M"+"para masculino");
		}
	EstadoCivil=prompt("Ingrese su estado civil.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");
	EstadoCivil=parseInt(EstadoCivil);

	while(EstadoCivil<1||EstadoCivil>4)
		{
			EstadoCivil=prompt("Error vuelva a ingresar un estado civil valido.");
		}
	Sueldo=prompt("Si tiene un sueldo ingrese el monto");
	Sueldo=parseInt(Sueldo);
	while(isNaN(Sueldo)||(Sueldo<0||Sueldo>10000000))
		{
			Sueldo=prompt("Error ingrese por lo menos $0.00");
			Sueldo=parseInt(Sueldo);

		}
	legajo=prompt("Ingrese un numero telefonico");
	legajo=parseInt(legajo);
	while(isNaN(legajo)||legajo<9999999999)
		{
			legajo=prompt("Error ingrese el numero de area que es 54");
			legajo=parseInt(legajo);
		}	
	nacionalidad=prompt("Ingrese su nacionalidad");

	document.getElementById('Edad').value=edad;
	document.getElementById('Sexo').value=sexo;
	document.getElementById('EstadoCivil').value=EstadoCivil;
	document.getElementById('Sueldo').value=Sueldo;
	document.getElementById('Legajo').value=legajo;
	document.getElementById('Nacionalidad').value=nacionalidad;










}	
