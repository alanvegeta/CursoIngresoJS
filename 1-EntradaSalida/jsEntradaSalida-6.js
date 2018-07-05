/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;

	var segundoNumero;

	var resultado;

	primerNumero = document.getElementById("numeroUno").value;

	segundoNumero = document.getElementById("numeroDos").value;

	var primernumeroconvertido;

	var segundonumeroconvertido;

	primernumeroconvertido = parseInt(primerNumero);

	segundonumeroconvertido = parseInt(segundoNumero);

	resultado = primernumeroconvertido + segundonumeroconvertido;

	
	 alert ("la suma es " +  resultado);





	
	//"numeroUno" primer id

	// segundo id "numeroDos"


}

