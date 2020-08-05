function mostrar()
{
	let edad;
	let estadocivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadocivil = document.getElementById("estadoCivil").value;

	if (edad < 18 && estadocivil != "Soltero")
	{
		
		alert("Eres muy joven para no estar soltero");

	}
	
	
			


}//FIN DE LA FUNCIÓN