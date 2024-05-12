let num = document.getElementById("input_num")
let lista = document.getElementById("lista")
let res = document.getElementById("res")
let valores = []

function isNumber(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }
  else{
    return false
  }
}
function inList(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}
function adicionar(){
  if(isNumber(num.value) && !inList(num.value, valores)){
    let item = document.createElement("option")
    item.text = `O valor ${num.value} foi adicionado.`
    lista.appendChild(item)
    valores.push(Number(num.value))
    res.innerHTML = ""
  }else{
    alert("[ERRO] Valor inválido ou duplicado.")
  }
  num.value = ""
  num.focus()
}

function finalizar(){
  if(valores.length == 0){
    alert("Adicione valores.")
  }else{
    let qtnd_elemn = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(ps in valores){
      soma+= valores[ps]
      if(valores[ps] > maior){
        maior = valores[ps]
      }
      if(valores[ps] < menor){
        menor = valores[ps]
      }
    }
    media = soma / qtnd_elemn
    res.innerHTML = ""
    res.innerHTML += `<p>Ao total, temos ${qtnd_elemn} números cadastrados.</p>`
    res.innerHTML += `<p>Maior valor: ${maior} </p>`
    res.innerHTML += `<p>Menor valor: ${menor} </p>`
    res.innerHTML += `<p>Soma de todos os elementos: ${soma} </p>`
    res.innerHTML += `<p>Média de todos os elementos: ${media.toFixed(2)} </p>`
  }
}