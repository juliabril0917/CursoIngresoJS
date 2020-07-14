/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;

	//obtengo el nombre y la edad de las cajas de texto a traves de su id y  los guardo en las variables correspondientes


	nombre = document.getElementById("txtIdNombre").value;

	edad = document.getElementById("txtIdEdad").value;

	//operador mas es el operador de concatenacion si yo quiero agregar una cadena de caracteres tengo quehacerlo con el operador mas, concatenando, poniendo una palabra acontiniacion de la otra.
	//hay que dejar un espacio dentro de las comillas para que la cadena no se  pegue a la variable 
	//

	alert("Ustedes se llama " + nombre + " y tiene " + edad +" años");


}

