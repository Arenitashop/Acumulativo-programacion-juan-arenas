function cambiar(id, valor) {
const stat = document.getElementById(id);
let numero = parseInt(stat.textContent);
numero += valor;
if (numero < 0) numero = 0;
stat.textContent = numero;
}