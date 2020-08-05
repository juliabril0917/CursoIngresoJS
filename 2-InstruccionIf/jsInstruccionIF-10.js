function mostrar()
{
	let nota;
	let maximo = 10;
	let minimo = 1;


	nota = Math.round(Math.random()* (maximo - minimo)+ minimo); /* nota = math. round(math.random()* 9 + 1*/ 

	if (nota >=9 ){

		alert("Exelente. Nota =" + nota);
		
		}

		else if (nota >= 4 ){

			alert("Aprobo. Nota =" + nota); }

			else {

		 
				alert("Vamos la proxima se puede. Nota =" + nota);
			}
	



}//FIN DE LA FUNCIÓN