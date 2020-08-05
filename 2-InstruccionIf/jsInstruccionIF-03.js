function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if ( edad >= 18)  {

		alert(" Usted es mayor de edad");
		/* else sigmifica falso em ingles, se usa if 
		else es cuanod tengo que hacer que una condicion tiene que ser falsa o verasdera*/ 
	}
	 else {

		alert("Usted es menor de edad ");



	 }


}//FIN DE LA FUNCIÓN