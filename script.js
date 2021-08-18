const imagens = document.querySelectorAll('.container img');
const imagemModal = document.querySelector('.modal img');
const modal = document.querySelector('.modal')

function abrir(source) {
    console.log(source)
    modal.style.display = 'flex'
    imagemModal.src = source;
}

imagens.forEach(function (imagem) {
    imagem.addEventListener('click', function (event) {
        abrir(event.target.src);
    })
})

modal.addEventListener('click', function () {
    modal.style.display = 'none'
})