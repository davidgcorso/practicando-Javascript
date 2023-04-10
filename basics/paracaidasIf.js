/* ------Abrir abrirParacaidas()------ */

const abrirParacaidas = (velocidad, altura) => {
if (velocidad <1000 && altura >= 2000 && altura < 3000){
    console.log("Puede abrir el paracaidas");
} else {
    console.log("Aún no debe ser abierto el paracaidas");
}
}
abrirParacaidas(500, 2000);