function mostrar()
{
	let estacion;
	let destino;
	let aumento = 0;
	let descuento = 0;
	const PRECIO = 15000;


	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion){

		case "invirno":
			switch (destino){
				case "Bariloche":
					aumento = 20;
				break;
				    case "Mar del plata":
						descuento = 20;
					    break;
					        case "Cataratas":
						    case "Cordoba":
								descuento = 10;
							break;
			}
			break;
		case "verano":
			
			switch (destino){
				case "Bariloche":
					descuento = 20;
				break;
				    case "Mar del plata":
						aumento = 20;
					    break;
					        case "Cataratas":
						    case "Cordoba":
								aumento = 10;
							break; }
			break;

		case "otoño":	
		case "primavera":
			
			switch (destino){
				case "Bariloche":	
				case "Mar del plata":
				case "Cataratas":
					aumemto = 10;
				break; }

		
		break;
				
	




		

	

}//FIN DE LA FUNCIÓN