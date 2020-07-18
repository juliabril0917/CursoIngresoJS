/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoDeTerreno;
    let AnchoDelTerreno;
    let perimetro;


    let cantidad;

    largoDeTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    AnchoDelTerreno = parseFloat(document.getElementById("txtIdAncho").value);

    perimetro = (largoDeTerreno + AnchoDelTerreno) * 2;

    cantidad = perimetro *3;

    alert("La cantidad de alambre necesario es de " + cantidad + "metros");



}
function Circulo () 
{
    let radio;
    let diametro;
    let perimetro;
    let alambre;
     
    /*una variable puede variar y una constante es como si fuera una variable 
    de solo lectura, la contastante la puedo leer pero no la puedo escribir, solo la puedo escribir en el lugar 
    donde la declaro, a una constante le puedo declarar le valor solo donde escribo la contaste*/

    radio = parseInt(document.getElementById("txtIdRadio").value);

    diametro = radio *2;

    perimetro = 2 * 3.14 * radio; // perimetro = pi tambien se puede poner como Math.a

    alambre = perimetro *3;

    alert("La cantidad de alambre necesario es de " + alambre + " metros");


}
function Materiales () 
{
    let largo;
    let ancho; 
    let area;
    let cemento;
    let cal;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    area = largo * ancho;

    cemento = area *2;

    cal = area *3;
    
    alert("Para hacer el contrapiso de un terreno de " + area + " se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
    
}