valores = list()

def adicionar_numeros():
    while True:
        num = int(input("Adicione um número: "))
        if num == 999:
            break
        valores.append(num)

def analisar_numeros(valores):
    soma = 0
    media = 0
    for num in valores:
        soma += num
    media = soma / len(valores)

    return soma, media

adicionar_numeros()
soma, media = analisar_numeros(valores)

print(soma, " ", media)