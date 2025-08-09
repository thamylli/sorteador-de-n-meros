//ao clicar no botão
function sortear(){
    //guardando os valores dados pelo usuário
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    //mais de um valor sorteado, vamos guardálo
    let numerosSorteados=[]
    let numero;
    for (i=0;i<quantidade;i++){
        numero=sortearNumero(de,ate);
        numerosSorteados.push(numero);
    }
    //exibindo os valores sorteados no monitor
    let valores = document.getElementById('resultado');
    valores.innerHTML=`os numeros sorteados são: ${numerosSorteados}`;
    mudarStatusDoBotao();
}

//sortear valores
function sortearNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1))+min ;
}

//botão reiniciar
function reiniciar(){
  mensagemInicial();
  limparCampo();
  mudarStatusDoBotao();
}

//função de ativação do botão
function mudarStatusDoBotao() {
        let botao = document.getElementById('btn-reiniciar');
        if (botao.classList.contains('container__botao-desabilitado')) {
                botao.classList.remove('container__botao-desabilitado');
                botao.classList.add('container__botao');
        } else {
                botao.classList.remove('container__botao');
                botao.classList.add('container__botao-desabilitado');
        }
}



//função de limpeza de caixas de texto
function mensagemInicial(){
  let valores = document.getElementById('resultado');
  valores.innerHTML='Número soteados: nenhum até agora';
}

function limparCampo(){
  document.getElementById('quantidade').value='';
  document.getElementById('de').value='';
  document.getElementById('ate').value='';
}