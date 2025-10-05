function verImagem(){
    console.log("botao1 exec")
    let botao1 = document.getElementById("botao1");
    let area = document.getElementById("area");
    let texto = document.getElementById("texto");
    texto.innerText = "caixa dágua";
    area.removeChild(botao1);
    texto.innerHTML = "caixa d'água";
    let imagem = document.createElement("img");
    imagem.src = "https://pedraopvc.vteximg.com.br/arquivos/ids/201199-800-800/caixa-dagua-2000-litros-polietileno-azul-com-tampa-fortlev-1.0.jpg?v=638394571715230000";
    imagem.alt = "caixa dágua";
    imagem.id = "imagem";
    area.appendChild(imagem);
    let botao2 = document.createElement("button");
    area.appendChild(botao2)
    botao2.innerText = "voltar";
    botao2.onclick = voltar;
}

function voltar(){
    console.log("botao2 exec")
    botao2 = document.getElementById("botao2");
    let area = document.getElementById("area");
    area.removeChild(botao2);
    let botao1 = document.createElement("button")
    botao1.onclick = verImagem;
    botao1.innerText = "CLIQUE-ME";
    let texto = document.getElementById("texto");
    texto.innerHTML = "texto inicial";
    let imagem = document.getElementById("imagem");
    area.removeChild(imagem);
    area.appendChild(botao1);
}




//document.getElementById(string id) => retorna o elemento/objeto HTML do ID especificado.

/*
.innerHTML = valor => substitui o valor HTML dentro da tag
          += valor => adiciona no final da tag

.innerText = valor => faz o mesmo, mas com o texto "visível"
*/

//.createElement(string tag) => cria e retorna a tag html
//.appendChild(HTMLELement) => adiciona um objeto já criado previamente a arvore abaixo do nodo especificado