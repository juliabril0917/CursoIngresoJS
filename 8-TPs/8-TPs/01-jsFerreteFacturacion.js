/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;

    let suma;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    suma = parseFloat (precio1) + parseFloat (precio2) + parseFloat (precio3);

    alert(suma);

	
}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;

    let promedio;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    suma = parseFloat (precio1) + parseFloat (precio2) + parseFloat (precio3);

    promedio = suma / 3;

    alert("El promedio es " + promedio.toFixed(2));

}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let iva

    let precioFinal;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    suma = parseFloat (precio1) + parseFloat (precio2) + parseFloat (precio3);

    iva= suma * .21 ;

    precioFinal = suma + iva;

    alert("El importe final es " + precioFinal.toFixed(2));
}