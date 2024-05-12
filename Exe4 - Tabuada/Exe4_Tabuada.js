function gerar_tabuada(){
let num_input = document.getElementById("num").value
let msg_tabuada = document.getElementById("msg_tabuada")
let numero = Number(num_input)
msg_tabuada.innerText = ""
if(num_input.length == 0){
    alert("ERRO: Adicione um número")
} else{
for(let cont = 1; cont <= 10; cont++){
    let item = document.createElement("option")
    item.text = `${cont} x ${numero} = ${numero * cont}`
    msg_tabuada.appendChild(item)
}}
}