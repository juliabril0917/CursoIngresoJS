/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let seguir;
	let flag = 0;

	
	do {
		     numeroIngresado = parseInt(prompt("Ingrese un numero: "));
		 
		 /*if (flag == 0){

			 numeroMaximo = numeroIngresado;
			 numeroMinimo = numeroIngresado;
			 flag = 1;

		 }*/
		 
		if ( flag == 0 || numeroIngresado > numeroMaximo){

			 numeroMaximo = numeroIngresado;

			
		}

		if (flag == 0 || numeroIngresado < numeroMinimo){

			 numeroMinimo = numeroIngresado;
			 flag = 1;

		}

		 seguir = prompt("Quiere ingresar otro numero?: ");


	}while ( seguir == "si" );

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN