
// inserindo as cores na força bruta na paleta de cores
// document.getElementsByClassName('color')[0].style.backgroundColor='rgb(0,0,0)'
// document.getElementsByClassName('azul')[0].style.backgroundColor='rgb(0,0,0)'
// document.getElementsByClassName('black')[0].style.backgroundColor='rgb(0,0,0)'
// document.getElementsByClassName('black')[0].style.backgroundColor='rgb(0,0,0)'

// inserindo as cores dinâmicamente na paleta de cores
// var mt = document.getElementsByClassName('color')
// for (var t = 0; t < mt.length; t++) {
//     if (t == 0) {
//         mt[0].style.backgroundColor = 'rgb(0,0,0)';
//     } else if (t == 1) {
//         mt[1].style.backgroundColor = 'rgb(0,0,255)';
//     } else if (t == 2) {
//         mt[2].style.backgroundColor = 'rgb(0,255,0)';
//     } else {
//         mt[3].style.backgroundColor = 'rgb(255,255,0)';
//     }
// }

var mt = document.getElementsByClassName('color')
for (var t = 0; t < mt.length; t++) {
    const inserirColor = mt[t];
    if (t == 0) {
        inserirColor.style.backgroundColor = 'rgb(0,0,0)';
    } else if (t == 1) {
        inserirColor.style.backgroundColor = 'rgb(0,0,255)';
    } else if (t == 2) {
        inserirColor.style.backgroundColor = 'rgb(0,255,0)';
    } else {
        inserirColor.style.backgroundColor = 'rgb(255,255,0)';
    }
}

// criação dinâmica das divis
for (let x = 0; x < 25; x+=1) {
    var d1 = document.createElement("div");
    d1.setAttribute('class', 'pixel');
    document.getElementById('pixel-board').appendChild(d1);
}
// Configuração css das divs pelo js
var t = document.getElementById('pixel-board');
t.style.maxWidth = '210px'

function selecionarCor(event) {
    var cor = event.target //pesquisar esse diacho de event
    var c = cor.style.backgroundColor
    console.log(c);
}
// colocando o ouvinte  nas classes da paleta na força bruta
// document.querySelectorAll('.color')[0].addEventListener('click', selecionarCor);
// document.querySelectorAll('.color')[1].addEventListener('click', selecionarCor);
// document.querySelectorAll('.color')[2].addEventListener('click', selecionarCor);
// document.querySelectorAll('.color')[3].addEventListener('click', selecionarCor);

// colocando o ouvinte  nas classes da paleta com for
var paletaArray = document.getElementsByClassName('color')
for (let ouvinteColor = 0; ouvinteColor < paletaArray.length; ouvinteColor+=1) {
    const addOuvinte = paletaArray[ouvinteColor];
    addOuvinte.addEventListener('click', selecionarCor)
     //  o código abaixo funcionou porem há muito código desnecessario
    // document.querySelectorAll('.color')[ouvinteColor].addEventListener('click', selecionarCor)
}

// add ou remover classes pelo js
// var tclasse = document.getElementsByClassName('color')[0];
// tclasse.classList.toggle ('selected')//add ou remover quando não tem classe
// tclasse.hasClass('selected') //verificar se a classe existe(nãofuncionou)
// tclasse.classList.remove ('selected') // remove class
// tclasse.classList.add('selected') //add class


//** */ ao carregar a pagina a cor preta deve estar selecionada e conter inicialmente a classe 'selected' e somente ela

function carregarBlack(){
    var tclasse = document.getElementsByClassName('color')[0];
    tclasse.classList.toggle ('selected')
    tclasse.target
    corB = tclasse.style.backgroundColor
    console.log(tclasse);
}
carregarBlack()
//window.onload=carregarBlack()


//**selecionar outra cor da paleta ao mesmo tempo que a classe selected é removida e adcionada na nova cor 





//**pintar o quadro de pixels com a cor selecionada

function selecionarBoard(){
    if 
console.log('deu certo!')
}
// colocando o ouvinte  nas classes do board com for
var pixelBoard = document.getElementsByClassName('pixel')
for (let ouvintePixel = 0; ouvintePixel < pixelBoard.length; ouvintePixel+=1) {
    const addOuvinteP = pixelBoard[ouvintePixel];
    addOuvinteP.addEventListener('click', selecionarBoard)
}

//**botão limpar id ='clear-board' com texto 'Limpar', limpa totalmente o quadro de pixels



//**criar um input para o usuario escolher o tamanho do quadro de pintura tamanho entre 5 e 50, input deve conter id ='board-size' o novo quadro deve conter o preencimento branco, o botão deve conter o id = 'generate-board'e o nome "VQV", o input deve receber valores maiores que 0 condição devera estar nos atributos do elemento input,o input devera estar posicionado entre a paleta de cores e o quadro de pixels o botão devera estar posicionado ao lado do input, valor não digitado retorna um alert "Board inválido"



//**caso o usuario digite < que 5 considerar 5 padrao
//caso o usuario digite > que 50 considerar 50 padrão



//**carregar as cores da paleta aleatóriamente ao carregar a pagina