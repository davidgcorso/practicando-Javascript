/* Repetir string ingresado en el parametro "str" la cantidad de veces estipulada en el parametro "num" */
const repeatStringNumTimes=(str, num) =>{
    let chain = "";
    for(let i=0; i<num; i++){
    if (num>0) {
      chain += str;
    } else {
      chain = "";
    } 
  }
  return console.log(chain);
}
  repeatStringNumTimes("*", 3);