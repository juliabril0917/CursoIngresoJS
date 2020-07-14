/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	
	let numero1;
	let numero2;
	let resultado;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	
	numero1 = parseInt(numero1);

	

	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero2 = parseInt(numero2);

	resultado = numero1 + numero2;

	alert("la suna es " + resultado);

}

function restar()
{
	let numerouno;
	let numerodos;
	let resultado;

	numerouno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numerodos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numerouno - numerodos;

	alert("La resta es "+ resultado);

}


function multiplicar()
{ 
	let numerouno;
	let numerodos;
	let resultado;

	numerouno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numerodos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numerouno * numerodos;

	alert("La multipliocacion es "+ resultado);

}

function dividir()
{
	let numerouno;
	let numerodos;
	let resultado;

	numerouno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numerodos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numerouno / numerodos;

	alert("La divicion es "+ resultado);
}

