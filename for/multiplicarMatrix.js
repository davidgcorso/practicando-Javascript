/* Multiplica todos los numeros de una matriz*/

function multiplyAll(arr) {
    let product = 1;
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length; j++){
      product = product * arr[i][j];
    }
  }
    return product;
  }
  
  console.log(multiplyAll([[1, 2], [3, 1], [4, 1]]));