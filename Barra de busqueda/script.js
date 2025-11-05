const peliculas = [
'Interstellar', 'Inception', 'Matrix', 'Avatar', 'Blade Runner', 'Dune', 'Alien', 'Star Wars', 'Tron', 'Ex Machina'
];


const input = document.getElementById('buscar');
const btn = document.getElementById('btnBuscar');
const res = document.getElementById('resultados');


btn.addEventListener('click', () => {
const texto = input.value.toLowerCase();
const filtradas = peliculas.filter(p => p.toLowerCase().includes(texto));
res.innerHTML = filtradas.map(p => `<li>${p}</li>`).join('');
});