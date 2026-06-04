let valorUsuario = document.querySelector("#valor");
let moedaUsuario = document.querySelector("#moedas");
let btn = document.querySelector("#btn");

btn.addEventListener("click", pegarMoeda);

function pegarMoeda() {
    const moeda = moedaUsuario.value;

    fetch(`https://economia.awesomeapi.com.br/json/last/${moeda}`)
        .then((res) => res.json())
        .then((data) => {
            displayResultado(data, moeda);
        })
        .catch((erro) => {
            console.log(erro);
        });
}

function displayResultado(data, moeda) {

    const chave = moeda.replace("-", "");

    const valorAtual = data[chave].bid;

    const cotacao = (
        valorAtual * valorUsuario.value
    ).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    const divRes = document.querySelector(".display-res");
    const divContainer = document.querySelector(".container");

    divContainer.classList.add("style-container");

    divRes.innerHTML = `
        <div class="resultado">
            <p>${chave.replace("BRL", "")} ${valorUsuario.value}</p>
            <p>${cotacao}</p>
        </div>
    `;
}
