
function verificarIdade(){
    let data = new Date()
    let ano_atual = data.getFullYear()
    let ano_input = document.getElementById("txt_ano")
    let res = document.getElementById("res")
    if(ano_input.value.length == 0 || ano_input.value > ano_atual){
        alert("Preencha corretamente")
    }
    else{
        let sex_input = document.getElementsByName("radiosex")
        let idade = ano_atual - parseInt(ano_input.value)
        let gen = ""
        if(sex_input[0].checked){
            gen = "Homem"
        }
        else{
            gen = "Mulher"
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
    }
}