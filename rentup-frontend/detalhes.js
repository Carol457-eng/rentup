const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

const imoveis = {
    1: {
        titulo: "Casa da Serra",
        cidade: "⭐ 4.9 • Campo Grande - MS",
        preco: "R$ 250/noite",
        hospedes: "Até 6 hóspedes",
        imagem: "imagens/casa1.jpg",
        descricao: "Casa ampla com piscina, churrasqueira, Wi-Fi e estacionamento."
    },

    2: {
        titulo: "Chácara Recanto",
        cidade: "⭐ 4.8 • Bonito - MS",
        preco: "R$ 350/noite",
        hospedes: "Até 10 hóspedes",
        imagem: "imagens/casa2.jpg",
        descricao: "Chácara perfeita para famílias e grupos."
    },

    3: {
        titulo: "Apartamento Centro",
        cidade: "⭐ 4.7 • Dourados - MS",
        preco: "R$ 180/noite",
        hospedes: "Até 4 hóspedes",
        imagem: "imagens/casa3.jpg",
        descricao: "Apartamento confortável no centro."
    }
};

const imovel = imoveis[id];

if (imovel) {

    document.title = `${imovel.titulo} - HospedaBem`;
    document.getElementById("imagem").src = imovel.imagem;

    document.getElementById("btnReserva").href =
    `reserva.html?id=${id}`;

    document.getElementById("titulo").textContent = imovel.titulo;
    document.getElementById("cidade").textContent = imovel.cidade;
    document.getElementById("preco").textContent = imovel.preco;
    document.getElementById("hospedes").textContent = imovel.hospedes;
    document.getElementById("descricao").textContent = imovel.descricao;
    document.getElementById("imagem").src = imovel.imagem;

} else {

    document.body.innerHTML = `
        <div class="container mt-5">
            <h1>Imóvel não encontrado</h1>

            <a href="cliente.html" class="btn btn-primary mt-3">
                Voltar para a Home
            </a>
        </div>
    `;
}