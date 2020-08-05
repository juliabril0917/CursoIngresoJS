function mostrar()
{

	let numero;
	
	numero = parseInt(prompt("ingrese un numero"));

	for (let i = 0; i <= numero; i++){

		if (i % numero == 0 ) { 

			contador++
		} 
		
	
	}

	if (contador > 2){

		alert (numero + "no es primo")
	}
	else
          alert(numero + "Es primo");

}//FIN DE LA FUNCIÓN