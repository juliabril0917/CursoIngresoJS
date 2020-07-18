/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let Fahrenheit;
    let centigrados; 

    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);

    Fahrenheit = temperatura;

    centigrados = (temperatura - 32) * 0.556; /* (temperatura - 32) / 1.8 */

    alert( temperatura + " fahrenheit son "+ centigrados.toFixed(2) + " centigrados" );
}

function CentigradosFahrenheit () 
{
	let temperatura;
    let centigrados;
    let Fahrenheit; 

    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);

    centigrados = temperatura;

    Fahrenheit = temperatura * 1.8 + 32;

    alert( temperatura + " centigrados son "+ Fahrenheit .toFixed(2)+ " fahrenheit");
}
