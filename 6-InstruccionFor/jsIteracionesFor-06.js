function mostrar()
{
	let numero;
	let contador = 0 ;
	

     numero = parseInt(prompt("ingrese un numero"));

	for (let i = 1; i <= numero; i++){

		if (i % 2 == 0) { 

			console.log(i)

			contador++
		} 
	
	}
          console.log("la cantidad de pares encontrados es " + contador);

}//FIN DE LA FUNCIÓN