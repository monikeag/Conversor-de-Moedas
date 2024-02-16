const bttConverte = document.querySelector(".bttconverte")
const selectMoeda = document.querySelector(".select-moeda")

function convertValues() {
    const inputConverteValor = document.querySelector(".input-converte").value /* o .Value é so para chamar o valor */
    const valorConverte = document.querySelector(".fundo") /*Valor pra converter*/
    const valorConvertido = document.querySelector(".fundo-convertido") /*Valor convertido*/

    console.log(selectMoeda.value)
    const dolarToday = 5.2
    const euroToday = 6.2
    const bitcoinToday = 260.060

    if (selectMoeda.value == 'dolar') {
        valorConvertido.innerHTML = 
        new Intl.NumberFormat("em-US", { style: "currency", currency: "USD" }).format(inputConverteValor/dolarToday)
    }

    if (selectMoeda.value == 'euro') {
        valorConvertido.innerHTML = 
        new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputConverteValor/euroToday)
    }

    if (selectMoeda.value == 'bitcoin') {
        valorConvertido.innerHTML = 
        new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputConverteValor * bitcoinToday)
    }

   

   valorConverte.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputConverteValor)
    
    console.log(converterValor)
}

bttConverte.addEventListener("click", convertValues)