function contar(){
    // Pegando o valor dos inputs
    let inicio_input = document.getElementById("inicio").value
    let fim_input = document.getElementById("fim").value
    let passo_input = document.getElementById("passo").value
    let msg_contagem = document.getElementById("msg_contagem")
    // Transformando no tipo de número
    let inicio = Number(inicio_input)
    let fim = Number(fim_input)
    let passo = Number(passo_input)
    // Apagando o paragrafo
    msg_contagem.innerHTML = ""
    // Contagens
    if (passo == 0){
        alert("Passo Inválido, considerando PASSO 1.")
        passo = 1
    }
    if(inicio_input.length === 0 || fim_input.length === 0){
        msg_contagem.innerHTML = "Impossivel contar."
    }
    else{
        if(inicio < fim){
            msg_contagem.innerHTML = "Contando: <br>"
            for(let cont = inicio; cont <= fim; cont+= passo){
                msg_contagem.innerHTML += `${cont} &#x1F449; `
            }
        }
        else if (fim < inicio){
            msg_contagem.innerHTML = "Contando: <br>"
            for(let cont = inicio; cont >= fim; cont -= passo){
                msg_contagem.innerHTML += `${cont} &#x1F449; `
            }
        }
    }   msg_contagem.innerHTML += "&#x1F3C1;"
}