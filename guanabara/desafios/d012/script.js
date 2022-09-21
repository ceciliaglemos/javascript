function verificar() {
    const res = document.querySelector('div#res')
    var valorant = Number(prompt('Qual era o preço anterior do produto?').replace(',','.'))
    var valordps = Number(prompt('Qual é o preço atual do produto?').replace(',','.'))
    var vantm = valorant - valordps
    var vdpsm = valordps - valorant
    var porantm = (100 * vantm) / valorant
    var pordpsm = (100 * vdpsm) / valordps

   
    res.innerHTML = ('<h1>Analisando os valores informados</h1>')
    res.innerHTML += (`<p>O produto custava R$${valorant.toFixed(2)} e agora custa R$${valordps.toFixed(2)}</p> `)

    if (valorant > valordps) {
        res.innerHTML += (`<p>Hoje o produto está mais barato.</p>`)
        res.innerHTML += (`<p>O preço caiu R$${vantm} em relação ao preço anterior</p>`)
        res.innerHTML += (`<p>Uma variação de ${porantm.toFixed(2)}% pra baixo.</p>`)
    } else if (valorant < valordps) {
        res.innerHTML += (`<p>Hoje o produto está mais caro.</p>`)
        res.innerHTML += (`<p>O preço subiu R$${vdpsm} e relação ao preço anterior.</p>`)
        res.innerHTML += (`<p>Uma variação de ${pordpsm.toFixed(2)}% pra cima.</p>`)
    } else if (valorant ==  valordps){
        res.innerHTML += (`<p>Não houve alteração de preço.</p>`)
    }



}