//COM JQUERY
let item = $('#texto')

$('#apagarSelecionados').hide() // Sumindo o botão Apagar Selecionados

function verificarItem(){ // Função para verificar se o dado inserido é valido
    const item = $('#texto')
    if(item.val() == ''){ //dado invalido
        alert('Insira um produto valido')
    }
    else { // dado valido
        adicionar(item) //chamando a funcao adicionar passando o input como parametro
        console.log(item)
    }
}

function adicionar(item){ // Função que add o valor do input da UL
    const li = $('<li>').append(item.val()).append('<button type="button" id="apagar" class="btn btn-outline-danger"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></button>')
    $('ul').append(li)
    item.val('')
    item.focus()
    $('#apagarSelecionados').show() // Mostrando o botão Apagar Selecionados


}
$('ul').on('click', '#apagar', function() { //Função para apagar a LI quando clicada no botão
    console.log(this) //buttão
    let liApagar = $(this).closest('li') //pegando a li pai do botão
    liApagar.fadeOut(2000, function(){ // apagando a li pai com efeito fadeOut
        liApagar.remove()
    })
    item.focus()
    
})

$('ul').on('click', 'li', function () { //Função para selecionar as li
    let li = $(this)
    li.css('background-color', 'lightgreen') // Mudando a cor da li
    li.addClass('selecionado') // Adicionando a classe "selecionado" na li

    
})

$('body').on('click', '#apagarSelecionados', function() { // Função para apagar selecionados
    let selecionados = $('li.selecionado') // pega as li com a classe "selecionado"
    selecionados.fadeOut(2000, function () {
        selecionados.remove()
    })
})



//JS PURO
/*
const item = document.querySelector('#texto')
const ul = document.querySelector('ul')


function adicionar(){
    const li = document.createElement('li')
    li.innerHTML = `JS puro ${item.value}`
    ul.appendChild(li)
    item.value = ''
    item.focus()

}*/
