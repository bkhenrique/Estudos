string = input("Digite uma string que contenha 'ado' em sua palavra: ")

contador = 0

for i in range(len(string)):
    if string[i:i+3] == "ado":
        contador += 1

print("A substring 'ado' aparece", contador, "vezes na string.")
