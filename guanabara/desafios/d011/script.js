function verificar() {
    const res = document.querySelector('div#res')
    var ano = Number(prompt('Qual é o ano que você quer verificar?'))
    const divisor = 4
    var resto = ano % 4

    res.innerHTML = (`<h1> Analisando o ano de ${ano}</h1>`)
    if (resto == 0) {
        res.innerHTML += (`<p>O ano de ${ano} É BISSEXTO &#x2705;</p>`)
    } else {
        res.innerHTML += (`<p>O ano de ${ano} NÃO É BISSEXTO &#x274C;</p>`)
    }
    
}