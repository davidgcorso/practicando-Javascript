
/* Imprimir la tabla de multiplicar que se pida por parametro */

function tablaDeMultiplicar(numero) {
    let i = 1; 
    let resultado =0;
    while (i <= 10){
        resultado = numero * i;
        console.log(`${numero} * ${i} = ${resultado}`);
         i++;
    } 
}
tablaDeMultiplicar(5);