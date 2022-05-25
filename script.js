const containerjs = document.querySelector(".container");
const container2js = document.querySelector(".container2");
const mapeamentojs = document.querySelector(".mapeamento");
const mapeamento2js = document.querySelector(".mapeamento2");

const nomes = ["Miguel", "Arthur", "Heitor", "Bernardo", "Valentina", "Lorenzo", "Gabriel", "Rafael", "Lara", "Giovanna", "Maria", "Lívia", "Isabella", "Eloá", "Yasmin", "Rafaela", "Helena",]

nomes.forEach((letra, numero, array) => {
    if(numero % 2 != 0){
        containerjs.innerHTML += `
            <p></p>
        `
    }else{
        containerjs.innerHTML += `
            <p> ${letra} ${numero}</p>
        `
    }
})
//------------------------------------------
nomes.forEach((letra, numero) => {
    if(numero % 2 == 0){
        container2js.innerHTML += `
            <p></p>
        `
    }else{
        container2js.innerHTML += `
            <p> ${letra} ${numero}</p>
        `
    }
})

//---------------------------------------------------------------


const num = [1, 2, 3, 4, 5];

let resultado = num.map(function (e) {
    return e * 2;
})

resultado.forEach((numero) => {
    mapeamentojs.innerHTML += `
        ${numero}
    `
})

const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'
]
/*
function obj(json){
    JSON.parse(json)
}

function apenaspreco(produto){
    produto.preco
}
*/
let obj = json => JSON.parse(json)
let apenaspreco = produto => produto.preco

let resultado2 = carrinho.map(obj).map(apenaspreco);

mapeamentojs.innerHTML = resultado2;

const carrinho2 = [
    {nome: "borracha", preco: 1500, fragil: true},
    {nome: "caderno", preco: 2000, fragil: true},
    {nome: "kit de lapis", preco:  150, fragil: true},
    {nome: "caneta", preco: 499, fragil: false}
]
/*
function caro(produto){
    produto.preco >= 500;
}*/

const caro = produto => produto.preco >= 500;
const produto = fragil => fragil.fragil;

let resultado3 = carrinho2.filter(caro).filter(produto);

mapeamento2js.innerHTML = JSON.stringify(resultado3);
