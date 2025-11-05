const imgs = document.querySelectorAll('img');
const lista = document.getElementById('lista');


imgs.forEach(img => {
img.addEventListener('click', () => {
const item = document.createElement('li');
item.textContent = img.alt;
item.addEventListener('click', () => item.remove());
lista.appendChild(item);
});
});