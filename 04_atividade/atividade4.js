// adiciona as bolinhas
const btnBolinhas = document.getElementById("addBolinhas");
const btnRemoverBolinhas = document.getElementById("removerBolinhas");
const btnBolinhas5 = document.getElementById("addBolinhas5");
const btnRemoverBolinhas5 = document.getElementById("removerBolinhas5");
let total = 0; // contador de bolinhas
let bolinhas = ""; // conteúdo das bolinhas
let bola = '<div class="bolinha"></div>'; // conteúdo para adicionar

// ação de clique
btnBolinhas.addEventListener("click", () => {
    total = total + 1;
    bolinhas = "";

    for (let i = 0; i < total; i++) {
        bolinhas = bolinhas + bola;
    }

    document.getElementById("agrupaBolinhas").innerHTML = bolinhas;
});

btnRemoverBolinhas.addEventListener("click", () => {
    total = total - 1;
    bolinhas = "";

    for (let i = 0; i < total; i++) {
        bolinhas = bolinhas + bola;
    }

    document.getElementById("agrupaBolinhas").innerHTML  = bolinhas;
});

btnRemoverBolinhas5.addEventListener("click", () => {
    total = total - 5;
    bolinhas = "";

    for (let i = 0; i < total; i++) {
        bolinhas = bolinhas + bola;
    }

    document.getElementById("agrupaBolinhas").innerHTML  = bolinhas;
});

btnBolinhas5.addEventListener("click", () => {
    total = total + 5;
    bolinhas = "";

    for (let i = 0; i < total; i++) {
        bolinhas = bolinhas + bola;
    }

    document.getElementById("agrupaBolinhas").innerHTML  = bolinhas;
});