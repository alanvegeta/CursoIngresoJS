/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var primerNumero;

	var segundoNumero;

	var resultado;

	primerNumero = document.getElementById("numeroDividendo").value;

	segundoNumero = document.getElementById("numeroDivisor").value;

	var primernumeroconvertido;

	var segundonumeroconvertido;

	primernumeroconvertido = parseInt(primerNumero);

	segundonumeroconvertido = parseInt(segundoNumero);

	resultado = primernumeroconvertido % segundonumeroconvertido;

	
	 alert ("el resto es " +  resultado);

}
