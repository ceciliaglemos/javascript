function contar (){
    const res = document.querySelector('#res')
    var numI = document.querySelector('#numI')
    var numF = document.querySelector('#numF')
    var pass = document.querySelector('#passo')

    if (numI.value.length == 0 || numF.value.length == 0 || pass.value.length == 0) {
        alert('[ERROR] Insira todos os valores para continuar')
    } else { 
        res.innerHTML = ('<p>Contando:</p>')
       var inc = Number(numI.value)
       var fin = Number(numF.value)
       var pa = Number(pass.value)
    
       if (pa <= 0) {
        window.alert('Passo inválido. Será utilizado Passo = 1')
        pa = 1
       } 

       if (inc < fin) {
        //contagem crescente
        for (var c = inc; c <= fin; c+=pa) {
            res.innerHTML += (`${c} &#x1F449;`)
        }
       } else {
        //contagem decrescente
        for (var c = inc; c >= fin; c-=pa) {
            res.innerHTML += (`${c} &#x1F449;`)
        } 
       }
       res.innerHTML += (`&#x1F3C1;`)
    }

    


}