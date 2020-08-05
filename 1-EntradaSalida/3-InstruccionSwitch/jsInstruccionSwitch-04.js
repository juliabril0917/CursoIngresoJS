function mostrar()
{
	let mes;
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes) {

		
		case "Febrero": alert ("Este mes no tiene m 28 dias");
		break;

		case "Junio":
		case "Septiembre":
		case "Noviembre":
		case "Abril": alert ("Este mes tiene 30 dias");
		break;

		default : alert ("Este mes tiene 31 dias ");
	}



}//FIN DE LA FUNCIÓN