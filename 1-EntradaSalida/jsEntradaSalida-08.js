/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numerodividendo;
	let numerodivisor;
	let resto;

	numerodividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	numerodivisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	resto = numerodividendo / numerodivisor;


	alert("El resto es "+ resto);

	//parsefloat lee los numeros con decimales.

}
