/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	 
	let numero;
	let positivos = 0;
	let negativos = 1; 
	let seguir;
	let flag = 0;
	
	do { 
		     numero = parseInt(prompt("Ingrese un numero"));

		if (numero >= 0 ){

			 positivos = positivos + numero;

		}
		else {
			flag = 1;

			 negativos = negativos * numero;
		}

	     seguir = prompt("Quiere ingresar otro numero?");
		
	   } while(seguir == "si");

		     if (flag == 0){
			 
			 negativos = 0;
		 }
		 
		 document.getElementById("txtIdSuma").value = positivos;
	     document.getElementById("txtIdProducto").value = negativos;

	   

	   


		
		
	

}//FIN DE LA FUNCIÓN