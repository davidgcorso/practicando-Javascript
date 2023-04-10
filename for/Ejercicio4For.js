/* 7. Se ingresa por teclado un número natural de hasta 2 cifras, si tiene una cifra que muestre lo mínimo que le falta para ser un número de 2 cifras; de lo contrario, que muestre lo mínimo que le falta para ser un número de 3 cifras. Considerar que el usuario ingresa números de hasta dos cifras. */

const cifrasFaltantes = (n) => {
    let faltante = 0;
    if (n<10){
    for (let i=n; i<=10; i++){
    faltante =+1;
}} else if (n>=10 && n<=100){
for (let x=n; x<=100; x++){
    faltante =+1;
}}
return console.log(faltante);
}
cifrasFaltantes(50);

/* 8. Hacer un algoritmo que muestre el promedio de varias notas o de N notas ingresadas, se debe definir el valor de N para conocer la cantidad de notas a ingresar. */

const promedioNotas = (...n) => {
    let suma = 0;
    let arrayLength = n.length;
    n.forEach(function(a){suma += a;});

return  console.log(suma/arrayLength);
}
 promedioNotas(4,4,4,4);

 /* 9. Hacer un programa que calcule la suma de los N primeros números naturales, dónde N es el número límite ingresado por teclado. */

const contar = (numeroLimite) => {
let resultado = 0;
for (let i = 0; i<=numeroLimite; i++) {
    resultado+=i;
}
return console.log(resultado);
}
contar(3);