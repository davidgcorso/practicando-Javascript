const sumar = (a,b) => a+b;
const restar = (a,b) =>  a-b;
const multiplicar = (a,b) =>  a*b;
const dividir = (a,b) =>  a/b;
const cuadradoDeNumero =(a) => multiplicar(a,a);
const promedioDeTresNumeros = (a,b,c) =>  (sumar(a,b) + c)/3;
const calcularPorcentaje = (a,b) => multiplicar(a,b)/100;
const GeneradorDePorcentaje = (a,b) => multiplicar(a,100)/b;
console.log('-------------- Testeo de Operaciones / Calculadora --------------');
console.log(sumar(2,3));
console.log(restar(4,1));
console.log(multiplicar(100,100));
console.log(dividir(10,2));
console.log(cuadradoDeNumero(20));
console.log(promedioDeTresNumeros(10,10,10));
console.log(`${calcularPorcentaje(30,100)}%`);
console.log(`${calcularPorcentaje(3,100)}%`);



