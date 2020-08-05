function mostrar()
{
	let i = 0;
	let numeroIngresado;
	let suma = 0;
	let promedio;


	while (i < 5 ){

		numeroIngresado = parseInt(prompt("Ingrese un numero: "));
		
		suma = suma + numeroIngresado;

		i++
	}

	promedio = suma / 5;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;

	

	

 

	
}
	