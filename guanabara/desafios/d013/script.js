function calc() {
    const res = document.querySelector('div#res')
    var nome = prompt('Nome e Sobrenome do Aluno')
    var nota1 = Number(prompt(`Primeira Nota de ${nome}:`).replace(',','.'))
    var nota2 = Number(prompt(`Segunda Nota de ${nome}:`).replace(',','.'))
    var nota3 = Number(prompt(`Terceiraa Nota de ${nome}:`).replace(',','.'))
    var media = (nota1 + nota2 + nota3)/3

    res.innerHTML = (`<h1>Analisando a situação de ${nome}</h1>`)
    res.innerHTML += (`<p>Com as notas ${nota1}; ${nota2} e ${nota3} <strong>sua média é ${media.toFixed(2)}</strong></p>`)

    if (media >= 7.0) {
        res.innerHTML += (`<p>Com média acima de 7,0 o aluno está <span id='apr'>APROVADO</span></p>`)
    } else if (media <= 7.0 && media >= 5.0) {
        res.innerHTML += (`<p>Com média entre de 5,0 e 6,0 o aluno está <span id='rec'>RECUPERAÇÃO</span></p>`)
    } else  if (media < 5.0) {
        res.innerHTML += (`<p>Com média abaixo de 5,0 o aluno está <span id='rep'>REPROVADO</span></p>`)
    }

}