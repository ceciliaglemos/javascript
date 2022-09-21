function converter() {
let celsius = prompt('Digite uma temperatura em °C(Celsius)')
let kelvin = Number(celsius) + 273
let fahr = Number(celsius) * 1.8 + 32
let res = document.getElementById('res')

res.innerHTML = (`<h1>A temperatura de ${celsius}°C, corresponde a... </h1>`)
res.innerHTML += (`<p>${kelvin} K (Kelvin)</p>`)
res.innerHTML += (`<p>${fahr} °F (Fahrenheit)</p>`)
}