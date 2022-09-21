function clicar() {
    let num = prompt('Digite um número inteiro qualquer:')
    let ant = Number(num)-1
    let suc = Number(num)+1
    alert(`Antes do ${num}, temos o número ${ant}.
Depois do ${num}, temos o número ${suc}`)
}