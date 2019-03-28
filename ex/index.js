const produto = {
    nome: 'Caneta Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    return { ...objeto } //'...' operador rest ou spread copia objeto
}

const novoProduto = clone(produto);
console.log(novoProduto);

novoProduto.nome = 'Caneta azul';
console.log(novoProduto);