// adiciona as bolinhas
const btnBolinhas = document.getElementById("addBolinhas");
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