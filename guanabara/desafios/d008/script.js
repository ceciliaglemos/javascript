function calc() {
    let prod = prompt('qual é o produto que você está comprando?')
    var preço = prompt(`Qual o preço de ${prod}?`)
    var valorbt = preço.replace(",",".")
    let res = document.querySelector('div#res')
    var desc = Number(valorbt) * 10 / 100
    var valorlq = Number(valorbt) - Number(desc)

    res.innerHTML = (`<h1>Calculando desconto de 10% para ${prod}</h1>`)
    res.innerHTML += (`<p>O preço original era de R$${valorbt}.</p>`)
    res.innerHTML += (`<p>Você acaba de ganhar R$${desc.toFixed(2)} de desconto (-10%).</p>`)
    res.innerHTML += (`<p>No fim, você vai pagar R$${valorlq.toFixed(2)} no produto ${prod}.</p>`)
}