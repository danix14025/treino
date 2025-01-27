// Estoque inicial
let estoque = [
    { id: 1, nome: "Caneta", quantidade: 100, preco: 1.5 },
    { id: 2, nome: "Caderno", quantidade: 50, preco: 10.0 },
    { id: 3, nome: "Borracha", quantidade: 200, preco: 0.5 },
];

// Função para exibir o estoque
function exibirEstoque() {
    console.log("Estoque atual:");
    estoque.forEach(item => {
        console.log(`${item.id} - ${item.nome} | Quantidade: ${item.quantidade} | Preço: R$${item.preco}`);
    });
}

function adicionarItem(nome, quantidade, preco) {
    const id = estoque.length + 1; // Gera um ID automaticamente
    estoque.push({ id, nome, quantidade, preco });
    console.log(`Item "${nome}" adicionado com sucesso!`);
}

function atualizarQuantidade(id, novaQuantidade) {
    const item = estoque.find(produto => produto.id === id);
    if (item) {
        item.quantidade = novaQuantidade;
        console.log(`Quantidade do item "${item.nome}" atualizada para ${novaQuantidade}.`);
    } else {
        console.log("Item não encontrado!");
    }
}

function removerItem(id) {
    const index = estoque.findIndex(produto => produto.id === id);
    if (index !== -1) {
        const itemRemovido = estoque.splice(index, 1);
        console.log(`Item "${itemRemovido[0].nome}" removido do estoque.`);
    } else {
        console.log("Item não encontrado!");
    }
}

function buscarItem(nome) {
    const resultado = estoque.filter(produto => produto.nome.toLowerCase().includes(nome.toLowerCase()));
    if (resultado.length > 0) {
        console.log("Itens encontrados:");
        resultado.forEach(item => {
            console.log(`${item.id} - ${item.nome} | Quantidade: ${item.quantidade} | Preço: R$${item.preco}`);
        });
    } else {
        console.log("Nenhum item encontrado!");
    }
}
