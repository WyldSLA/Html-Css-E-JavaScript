function carregar(){
let res_hora = document.getElementById("res_hora")
let img = document.getElementById("imagem")
let data = new Date()
let hora = data.getHours()
let corpo = document.body

res_hora.innerText = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    img.src = "img - manha.png"
    corpo.style.backgroundColor = "#A58C6B"
}
else if(hora >= 12 && hora < 18){
    img.src = "img - tarde.png"
    corpo.style.backgroundColor = "#769A8E" 
}
else{
    img.src = "img - noite.png"
    corpo.style.backgroundColor = "#0A101A"
}
}