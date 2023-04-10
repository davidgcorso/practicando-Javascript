
/* sumar numeros de un array */
const arr = [1,2,3,4,5];
suma = 0;

arr.forEach((item) => {
   suma += item;
});

/* contar cuantes veces esta una letra o vocal en una palabra */
const letras = ["d","a","v","i","d", "s", "s", "i", "t", "o"];
let contador = {};

letras.forEach((item) => {
 if(contador[item]){
    contador[item]++;
 }
 else {
    contador[item] =1;
 }});

console.log(suma);
console.log(contador);