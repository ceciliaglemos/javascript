//
var cotdolar = prompt('Antes de mais nada, Quanto está a cotação do dolar agora?')
var cotdolar = cotdolar.replace(",",".")
function converter() {
    var real = prompt('Quantos R$ você tem na carteira?')
    var real = real.replace(",",".")
    let res = document.querySelector('div#res')
    var dolar = Number(real)/Number(cotdolar)
    var dolar = Number(dolar)

    res.innerHTML = (`<h1>Com R$${real} é possível comprar até US$${dolar.toFixed(2)} </h1>`)
}