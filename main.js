function carregarRecados() {
    const gridRecados = document.getElementById("mural-recados");
    const recadosSalvos = JSON.parse(localStorage.getItem("mural_outubro_rosa")) || [];
    
    recadosSalvos.forEach(recado => {
        const card = document.createElement("div");
        card.className = "card-recado";
        card.innerHTML = `<p>"${recado.texto}"</p><span>- ${recado.nome}</span>`;
        gridRecados.appendChild(card);
    });
}

function adicionarRecado() {
    const inputNome = document.getElementById("mural-nome");
    const inputMsg = document.getElementById("mural-mensagem");
    const gridRecados = document.getElementById("mural-recados");

    if (inputMsg.value.trim() === "") {
        alert("Por favor, digite uma mensagem antes de fixar no mural!");
        return;
    }

    const nomeValido = inputNome.value.trim() === "" ? "Anônimo" : inputNome.value.trim();
    
    const novoCard = document.createElement("div");
    novoCard.className = "card-recado novo-card";
    novoCard.innerHTML = `<p>"${inputMsg.value}"</p><span>- ${nomeValido}</span>`;
    gridRecados.insertBefore(novoCard, gridRecados.firstChild);

    const recadosSalvos = JSON.parse(localStorage.getItem("mural_outubro_rosa")) || [];
    recadosSalvos.unshift({ nome: nomeValido, texto: inputMsg.value });
    localStorage.setItem("mural_outubro_rosa", JSON.stringify(recadosSalvos));

    inputMsg.value = "";
    inputNome.value = "";
}

document.getElementById("btn-enviar-mural").addEventListener("click", adicionarRecado);
window.addEventListener("DOMContentLoaded", carregarRecados);
