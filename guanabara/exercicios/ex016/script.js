function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')


    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('rsex')
        var idade = ano - Number(fano.value)
        var gen = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gen = 'homem'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', 'image/childm.png')
            } else if (idade < 24) {
                img.setAttribute('src', 'image/youngm.png')
            } else if (idade < 65) {
                img.setAttribute('src', 'image/adultm.png')
            } else {
                img.setAttribute('src', 'image/seniorm.png')
            }

        } else if (fsex[1].checked) {
            gen = 'mulher'
            if (idade >= 0 && idade < 11){
                img.setAttribute('src', 'image/childf.png')
            } else if (idade < 24) {
                img.setAttribute('src', 'image/youngf.png')
            } else if (idade < 65) {
                img.setAttribute('src', 'image/adultf.png')
            } else {
                img.setAttribute('src', 'image/seniorf.png')
            }
        }
        res.innerHTML = `Detectamos: ${gen} com ${idade} anos.`
        res.appendChild(img)

    }
     
}