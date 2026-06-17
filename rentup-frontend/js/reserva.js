const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

const imoveis = {
    1: "Casa da Serra",
    2: "Chácara Recanto",
    3: "Apartamento Centro"
};

document.getElementById("imovelSelecionado").textContent =
    `Imóvel selecionado: ${imoveis[id]}`;