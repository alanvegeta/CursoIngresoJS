/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//mi variable se llama nombre
	var nombre = prompt("Pone tu nombre");
	var apellido = prompt("Pone tu apellido");
	//ya guarde el nombre en mi variable.
	//con alert muestro mi variable
	//alert(nombre);
	alert("Mi nombre es " + nombre + " " + apellido);
}