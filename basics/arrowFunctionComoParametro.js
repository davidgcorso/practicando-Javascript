function findElement(arr, func) {
    let num = 0;
  
    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }
  
    return undefined;
  }
 console.log(findElement([1, 2, 3, 4,5,6,7,8,9], num => num % 2 === 0));