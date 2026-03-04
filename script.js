d//modelo 1
// declaraçao de variavel
    let texto = window.prompt("Digite seu nome: ");

// adiciona conteudo dentro de um html
    document.getElementById("titulo").innerHTML = "Seja bem-vindo "+texto;

////////////////////////////////////////////////////////////////////////////////////////////////////////

//modelo 2
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

////////////////////////////////////////////////////////////////////////////////////////////////////////

//modelo 3
// soma os valores
    const btnSoma = document.getElementById("somar");
    btnSoma.addEventListener("click" () => {
        let numero1 = document.getElementById("numero1").value;
        let numero2 = document.getElementById("numero2").value;
        let soma = parseInt(numero1) + parseInt(numero2);
        console.log(soma);
    });

////////////////////////////////////////////////////////////////////////////////////////////////////////

//modelo 4
// adiciona bolinhas
    const btnBolinhas = document.getElementById("addBolinhas");
    let total = 0; // contador de bolinhas
    let bolinhas = ""; // conteudo das bolinhas
    let bola = '<div class="bolinha></div>'; // conteudo para adicionar

// acao de clique
    btnBolinhas.addEventListener("click" () => {
        total = total+1;
        bolinhas = "";
        for (let index = 0; index < total; index++) {
            bolinhas = bolinhas+bola;
        }
        document.getElementById("agrupaBolinhas").innerHTML = bolinhas;
    });