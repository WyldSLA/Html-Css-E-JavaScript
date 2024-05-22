let peso = document.getElementById("peso_input")
let altura = document.getElementById("altura_input")
let msg = document.getElementById("msg_imc")

function analisarValor(peso, altura){
    if(peso <= 0 || altura <= 0){
        return true
    }else{
        return false
    }
}

function calcular(){
    if(!analisarValor(peso.value, altura.value)){
        let ps = parseFloat(peso.value)
        let alt = parseFloat(altura.value) / 100
        let imc = ps / (alt*alt)
        msg.innerHTML = `<p>Seu IMC é de: ${imc.toFixed(2)}</p>`
    }else{
        alert("Insira os dados corretamente.")
    }
}

