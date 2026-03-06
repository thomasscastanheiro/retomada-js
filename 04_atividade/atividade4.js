// adiciona as bolinhas
    const btnBolinhas = document.getElementById("addBolinhas");
    let total = 0; // contador de bolinhas
    let bolinhas = ""; // conteudo das bolinhas
    let bola = '<div class="bolinha></div>'; // conteudo para adicionar

// ação de clique
    btnBolinhas.addEventListener("click", () => {
        total = total+1;
        bolinhas = "";
        for (let index = 0; index < total; index++) {
            bolinhas = bolinhas+bola;
        }
        document.getElementById("agrupaBolinhas").innerHTML = bolinhas;
    });