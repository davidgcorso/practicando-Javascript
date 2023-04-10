/* ------Valoración de peliculas------ */

const valoracionPeliculas = (calificacion) => {
    respuesta = "";
    switch (calificacion){
        case "muy mala":
        case "mala":
        case "mediocre":
            respuesta = `Calificaste la pelicula como ${calificacion}. Lo lamentamos mucho , gracias por tu visita`;
            break;
        case "buena":
        case "muy buena":
            respuesta = `Calificaste la pelicula como ${calificacion}. Nos salegra que la hayas disfrutado , gracias por tu visita`;
            break;
        default: respuesta = "Ingresaste un valor inválido";
    }
    return console.log(respuesta);
}
valoracionPeliculas("muy buena");
valoracionPeliculas("terrible");