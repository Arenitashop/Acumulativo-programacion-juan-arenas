function generarPDF() {
const doc = new Blob(['🎬 Comprobante de Entrada al Cine Noir'], { type: 'application/pdf' });
const enlace = document.createElement('a');
enlace.href = URL.createObjectURL(doc);
enlace.download = 'entrada.pdf';
enlace.click();
}


document.getElementById('descargar').addEventListener('click', generarPDF);
document.getElementById('volver').addEventListener('click', () => {
alert('Volviendo a la página anterior...');
});