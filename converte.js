const bttConverte = document.querySelector (".bttconverte")
const selectMoeda = document.querySelector (".select-moeda")

function convertValues (){
    const inputConverteValor = document.querySelector (".input-converte").value /* o .Value é so para chamar o valor */
    const valorConverte = document.querySelector(".fundo") /*Valor pra converter*/
    const valorConvertido = document.querySelector(".fundo-convertido") /*Valor convertido*/

    console.log (selectMoeda.value)
    const dolarToday = 5.2
    const euroToday = 6.2

    const converterValor = inputConverteValor / euroToday

    valorConverte.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL"}).format (inputConverteValor)
    valorConvertido.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD"}).format (converterValor) 

    console.log(converterValor)
}

bttConverte.addEventListener ("click", convertValues)