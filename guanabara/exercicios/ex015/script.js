function load() {
let msg = document.getElementById('msg')
let img = document.getElementById('image')
let date = new Date()
let hour = date.getHours()


msg.innerHTML = `Agora são ${hour} horas!`
if (hour >= 5 && hour < 12) {
    msg.innerHTML += '<br> <strong>Bom Dia!</strong>'
   img.src = 'image/manha.png'
   document.body.style.background = '#F2C357'
    //bom dia
} else if(hour >= 12 && hour < 18){
    msg.innerHTML += '<br> <strong>Boa Tarde!</strong>'
    img.src = 'image/tarde.png'
    document.body.style.background = '#6B3DF2'
    //boa tarde
} else if (hour >= 18 && hour <24) {
    msg.innerHTML += '<br> <strong>Boa Noite!</strong>'
    img.src = 'image/noite.png'
    document.body.style.background = '#031C59'
    //boa noite
} else {
    msg.innerHTML += '<br> <strong>Boa Madrugada!</strong>'
    img.src = 'image/noite.png'
    document.body.style.background = '#191B1C'
    // boa madrugada
}
    
}
