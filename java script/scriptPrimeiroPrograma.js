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

// =  operador de atribuiçao
// ==  igual a ou equal to
// === valor e tipo igual

//multiplas condiçoes
// && (e) duas verdadeiras
// || (ou) uma das duas verdadeiras
//