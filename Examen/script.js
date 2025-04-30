/*Ejercicio 1 slice
const plantas = ["bugambilia", "rosas", "arbustos", "suculentas","hierbas"];
 const seleccionadas = plantas.slice(0, 4); //el primer valor 0 es el indice y el 3 es el elemento, hasta donde queremos que se muestre
console.log(seleccionadas); 

Ejercicio 2 metodo push
const musica = ["Pop", "Rock", "Metal"];
const seleccionadas = musica.push("Cumbia");
console.log(seleccionadas);

 Ejercicio 3 metodo pop
let numeros = ["10","20","30","40","50"];
let ultimo = numeros.pop();
console.log(numeros);

  Ejercicio 4 metodo LastIndexOf
let nombre = ["Edwin","Oswaldo", "Santiago","Edwin","David","Edwin" ];
let pos = nombre.lastIndexOf("Edwin")
console.log("Edwin" + pos)
*/
// Ejercicio 5 Metodo some
let edad = ["15","12","18","20"]; 
const hayMayor = edad.some(edad => edad <= 18);
console.log(hayMayor);
