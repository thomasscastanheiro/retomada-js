//soma dos valores
const btnSoma = document.getElementById("somar");
btnSoma.addEventListener("click", () => {
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;
    let soma = parseInt(numero1) + parseInt(numero2);
    document.getElementById("resultado").innerText = "O resultado é: "+soma;
});