
//Objetivo 1- Quando passar o mouse em cima do personagem na listagem, devdemos selecioná-lo
//    passo1- pegar personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles.
const personagens = document.querySelectorAll('.personagem');
//passo2- adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter',() => {
        if(window.innerWidth < 450){
            window.scrollTo({top:0, behavior:'smooth'});
        }

        //passo3- verificar se já existe um personagem selecionado, se sim, devdemos remover a seleção dele.
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        //Objetivo 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem.
        //passo1- pegar o elemento do personagem grande para adicionar informações nele.
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        //passo2- alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./imagens/card-${idPersonagem}.png`;
        //passo3- alterar o nome do personagem grande.
        const  nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        //passo4- alterar a descrição do personagem grande.
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
})

