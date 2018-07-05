/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var primerNumero;

	primerNumero = document.getElementById("sueldo").value;

    var primernumeroconvertido;

	primernumeroconvertido = parseInt(primerNumero);

	document.getElementById("resultado").value = primernumeroconvertido * 1.1;

}
