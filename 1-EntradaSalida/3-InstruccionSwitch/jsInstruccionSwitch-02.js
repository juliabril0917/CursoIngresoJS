function mostrar()
{
	//tomo el mes
	let mes;
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes) {

		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio": alert("Falta para el invierno");
		break;
		case "Julio":
		case "Agosto": alert("Abrigate que hacve frio");
		break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Dicimebre": alert("Ya paso le invierno, ahora calor!!!");
		break;
		
	}




}//FIN DE LA FUNCIÓN