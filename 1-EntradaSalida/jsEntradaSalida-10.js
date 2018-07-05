/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var primerNumero;

	primerNumero = document.getElementById("importe").value;

    var primernumeroconvertido;

	primernumeroconvertido = parseInt(primerNumero);

	document.getElementById("resultado").value = primernumeroconvertido * 0.75;

}
