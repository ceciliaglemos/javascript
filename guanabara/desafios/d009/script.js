function calc() {
    var res = document.querySelector('div#res')
    let nome = prompt ('Qual o nome do funcionário?')
    var slr = prompt(`Qual é o salário de ${nome}`)
    var por = prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)
    var aumnt = Number(slr) * Number(por) / 100
    var srlRe = Number(slr) + Number(aumnt)
    var slr = slr.replace(',','.')
    var por = por.replace(',','.')
    


    res.innerHTML = (`<h1>${nome} recebeu um aumento salarial!</h1>`)
    res.innerHTML += (`<p>O salário atual era de R$${slr}.</p>`)
    res.innerHTML += (`<p>Com um aumento de ${por}%, o salário vai aumentar R$${aumnt.toFixed(2)} no próximo mês.</p>`)
    res.innerHTML += (`<p>E a partir daí, ${nome} vai passar a ganhar R$${srlRe.toFixed(2)}.</p>`)
}

