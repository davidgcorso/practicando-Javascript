/* Cortar string desde donde se le indique con el segundo parametro */

function truncateString(str, num) {
    let cut ="";
        if(num >= str.length) { 
          num = str.length;
          return  console.log(str);
        } else
        
        return console.log(`${cut =str.slice(str[0], num)}...`);
      }
      
      truncateString("cortar en este string", 8+2);