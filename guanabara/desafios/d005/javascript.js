function converter() {
let distm = prompt('Digite uma distância em metros (m)')
let km = Number(distm) / 1000
let hm = Number(distm) / 100
let dam = Number(distm) / 10
let dm = Number(distm) * 10
let cm = Number(distm) * 100
let mm = Number(distm) * 1000
let res = document.getElementById('res')

res.innerHTML = (`<h1>A distância de ${distm} metros, corresponde a... </h1>`)
res.innerHTML += (`<p>${km} quilômetros (Km)</p>`)
res.innerHTML += (`<p>${hm} hectômetros (Hm)</p>`)
res.innerHTML += (`<p>${dam} decâmetros (Dam)</p>`)
res.innerHTML += (`<p>${dm} decímetros (dm)</p>`)
res.innerHTML += (`<p>${cm} centímetros (cm)</p>`)
res.innerHTML += (`<p>${mm} milímetros (mm)</p>`)
}
