/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2;
	let resultado;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	
	numero1 = parseInt(numero1);

	// numero1 = parseint(document.getElementById("textIdNumeroUno")).value;

	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero2 = parseInt(numero2);

	//numero2 = parseInt(document.getElementyById(txtIdNumeroDos)).value;



    resultado = numero1 + numero2;

	alert("la suna es " + resultado);

	//las cajas se llaman entradas de tipo texto. lo que me devuelve el vcalue es algo de tipo texo, no importa sin son numero, para que los tome como numeros y pueda sumarlos tengo que usar parce es comvertir las cadenas de texto es  numoeros, el parseint los convierte en numeros enteros

	//cuando son numeros el operador mas los suma, cuando son cadena de textos los concatena.

	//los numeros van sin comillas porque las comillas son para las cadenas de texto
}

