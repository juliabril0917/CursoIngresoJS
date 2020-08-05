/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");

	while ( !(sexoIngresado == 'f' || sexoIngresado == 'F' || sexoIngresado == 'm' || sexoIngresado == 'M')) 
	 {
		sexoIngresado = prompt ("Sexo invalido. Ingrese f o m");

     } 
	 
	 if (sexoIngresado == 'f' || sexoIngresado == 'F'){

		sexoIngresado = "Femenino";

		document.getElementById("txtIdSexo").value = sexoIngresado;

	 }

	 else if (sexoIngresado == 'm' || sexoIngresado == 'M'){

		sexoIngresado = "Masculino";

		document.getElementById("txtIdSexo").vale = sexoIngresado;
	 }

	
	  






	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN