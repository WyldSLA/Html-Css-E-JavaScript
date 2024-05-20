
function calcular(){
    let peso = document.getElementById("peso_input").value
    let altura = document.getElementById("altura_input").value
    let msg = document.getElementById("msg_imc")
    let ps = parseFloat(peso)
    let alt = parseFloat(altura) / 100
    let imc = ps / (alt*alt)
    msg.innerHTML = `<p>Seu IMC é de: ${imc.toFixed(2)}</p>`
}

