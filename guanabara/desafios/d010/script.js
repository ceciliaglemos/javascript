function calc() {
    let res = document.querySelector('div#res')
    var a = Number(prompt('Qual o valor de a?'))
    var b = Number(prompt('Qual o valor de b?'))
    var c = Number(prompt('Qual o valor de c?'))
    var result = b ** 2 - (4 * a * c)

    res.innerHTML = (`<h1>Resolvendo Bhaskara</h1>`)
    res.innerHTML += (`<p>A equação atual é ${a}x² + ${b}x + 2 = 0</p>`)
    res.innerHTML += (`<p>O cálculo realizado será &Delta; = ${b}² - 4 . ${a} . ${c}</p>`)
    res.innerHTML += (`O valor calculado foi &Delta; = ${result}`)
}