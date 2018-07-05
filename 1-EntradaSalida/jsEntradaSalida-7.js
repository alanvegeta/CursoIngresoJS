/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
	var primernumeroconvertido;

	var segundonumeroconvertido;

function sumar()
{	
	obtenerNumeros ();
	
	alert ( primernumeroconvertido + segundonumeroconvertido );
}

function restar()
{
	obtenerNumeros ();

	alert ( primernumeroconvertido - segundonumeroconvertido );

}

function multiplicar()
{ 
	obtenerNumeros ();

	alert ( primernumeroconvertido * segundonumeroconvertido );

}

function dividir()
{
	obtenerNumeros ();

	alert ( primernumeroconvertido / segundonumeroconvertido );
}


function obtenerNumeros ()

{
	var primerNumero;

	var segundoNumero;

	primerNumero = document.getElementById("numeroUno").value;

	segundoNumero = document.getElementById("numeroDos").value;



	primernumeroconvertido = parseInt(primerNumero);

	segundonumeroconvertido = parseInt(segundoNumero);


}