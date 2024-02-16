const bttConverte = document.querySelector (".bttconverte")

function convertValues (){
    const inputConverteValor = document.querySelector (".input-converte").value /* o .Value é so para chamar o valor */
    const valorConverte = document.querySelector(".converte-um") /*Valor pra converter*/
    const valorConvertido = document.querySelector(".converte-dois") /*Valor convertido*/

    const dolarToday = 5.2

    const converterValor = inputConverteValor / dolarToday

    valorConverte.innerHTML = inputConverteValor

    console.log(converterValor)
}

bttConverte.addEventListener ("click", convertValues)