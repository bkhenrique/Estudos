const idade = prompt('Qual sua idade?');

if(idade < 18 ){
    console.log("você é uma Criança")
}else if(idade >= 18 && idade <60){
    console.log("você é um Adulto")
}else if(idade >= 60 ){
    console.log("você é um Idoso")
}
console.log(`Sua idade: ${idade}`)
// condicional
// < menor q 
// > maior q
// == igual
// >= maior ou igual
// <= menor ou igual
// != diferente

// ternario

// =  operador de atribuiçao
// ==  igual a ou equal to
// === valor e tipo igual

//multiplas condiçoes
// && (e) duas verdadeiras
// || (ou) uma das duas verdadeiras
//

//ternario

let isMember = true
let shipping = isMember ? 2 :10 //se for true 2 se nao 10

console.log(isMember ? 'Você é membro':'Você não é membro')
console.log('Frete: '+ shipping)

//switch

let profission = prompt('Qual sua profissão? Bombeiro, Policial, Fiscal, Outros');
console.log('Profissão: ' + profission)
switch(profission){
    case 'bombeiro':
        console.log('Sua camiseta será vermelha')
        break
    case 'polocial':
        console.log('Sua camiseta será azul')
        break
    case 'fiscal':
        console.log('Sua camiseta será verde')
        break
    case profission:
        console.log('Sua camiseta será preta')
        break
}

// declarando função

function gravidade() {
    console.log('a gravidade do planeta é:');
    console.log(9.8);
}
gravidade();

function somar(n1, n2){
    let resultado = n1 + n2;
    console.log('Resultado: ' + resultado);
}
somar(10, 15);