/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	// defino la variable
	var input;
	//obtengo el elemento con la informacion necesaria.
	input = document.getElementById("elNombre");
	// defino otra variable
	var nombre;
	nombre = input.value;
	alert("El nombre es " + nombre);

}


