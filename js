// Dados dos produtos
const produtos = [
{ id: 1, nome: "Aspirina", preco: 10.99, imagem: "aspirina.jpg" },
{ id: 2, nome: "Ibuprofeno", preco: 12.99, imagem: "ibuprofeno.jpg" },
{ id: 3, nome: "Paracetamol", preco: 8.99, imagem: "paracetamol.jpg" },
{ id: 4, nome: "Vitamina C", preco: 15.99, imagem: "vitamina-c.jpg" },
{ id: 5, nome: "Suplemento", preco: 20.99, imagem: "suplemento.jpg" },
{ id: 6, nome: "Dipirona", preco: 5.99, imagem: "dipirona.jpg" },
{ id: 7, nome: "Anti-Inflamatorio em Gel", preco: 18.99, imagem: "antiinflamatorio.jpg" },
{ id: 8, nome: "Antialergico", preco: 18.99, imagem: "antialergico.jpg" }
];
 
// Carregar produtos
const produtosSection = document.getElementById("produtos");
produtos.forEach((produto) => {
const produtoHTML = `
<div class="produto">
<img src="${produto.imagem}" alt="${produto.nome}">
<h3>${produto.nome}</h3>
<p>R$ ${produto.preco.toFixed(2)}</p>
<button class="adicionar-carrinho" data-id="${(link unavailable)}">Adicionar ao carrinho</button>
</div>
`;
produtosSection.innerHTML += produtoHTML;
});
 
// Adicionar produtos ao carrinho
const carrinho = [];
const listaCarrinho = document.getElementById("lista-carrinho");
document.querySelectorAll(".adicionar-carrinho").forEach((botao) => {
botao.addEventListener("click", () => {
const produtoId = (link unavailable);
const produto = produtos.find((p) => (link unavailable) == produtoId);
if (!carrinho.includes(produto)) {
carrinho.push(produto);
atualizarCarrinho();
}
});
});
 
// Atualizar carrinho
function atualizarCarrinho() {
lista
