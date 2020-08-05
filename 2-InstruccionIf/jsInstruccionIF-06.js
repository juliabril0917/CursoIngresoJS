function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18)
	{
		alert("Es un Adulto");

	}
	else {
		if (edad >=13 && edad <=17){

			alert("Es un adolecente");
		}
		else { 
			alert(" Es un niño");
		}
		
	}



}//FIN DE LA FUNCIÓN