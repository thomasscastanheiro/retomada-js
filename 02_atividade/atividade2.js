// instancia o objeto botao
    const btnTrocaCor = document.getElementById("trocacor");
    let caixaTexto = document.getElementById('caixa');

// evento de clique
    btnTrocaCor.addEventListener("click", () => {
        // captura o nome do elemento
        let caixaTexto = document.getElementById('caixa');

        // valida o nome da cor
        if( caixaTexto.className === "verde" ){
            caixaTexto.classList.add('amarelo');
            caixaTexto.classList.remove('verde');
        }else{
            caixaTexto.classList.add('verde');
            caixaTexto.classList.remove('amarelo');
        }

        // exibe no console
        console.log(caixaTexto.className);
    });
// troca texto
    const btnTrocaTexto = document.getElementById("trocatexto");
    btnTrocaTexto.addEventListener("click", () => {
        if( caixaTexto.innerText === "inter" ){
            document.getElementById("caixa").innerHTML = "cruzeiro";
        }else{
            document.getElementById("caixa").innerHTML = "inter"
        }
    });
