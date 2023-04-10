/* Agregar mayuscula a la primera letra del string ingresado como parametro */
function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let index in newTitle) {
      updatedTitle[index] = newTitle[index][0].toUpperCase() + newTitle[index].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }

  let resultado = titleCase("champion")
  console.log(resultado)