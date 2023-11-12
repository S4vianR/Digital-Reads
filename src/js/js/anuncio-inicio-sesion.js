const anuncioCloseButton = document.getElementById('anuncioCloseButton');
const anuncioDiv = document.getElementById('anuncioDiv');

anuncioCloseButton.addEventListener('click', () => {
    anuncioDiv.innerHTML = 'Cerraste este anuncio!';
    anuncioDiv.classList.add('text-center','font-bold','text-xl','text-black', 'bg-slate-100','p-2','mb-2');
});