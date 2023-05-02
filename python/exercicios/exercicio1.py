string1 = input("Digite a primeira palavra: ")
string2 = input("Digite a segunda palavra: ")

print("Conteúdo da primeira palavra:", string1)
print("Conteúdo da segunda palavra:", string2)

print("Comprimento da primeira palavra:", len(string1))
print("Comprimento da segunda palavra:", len(string2))

if len(string1) == len(string2):
    if string1 == string2:
        print("As strings possuem conteudos iguais.")
    else:
        print("As strings possuem o mesmo tamanho, mas são diferentes.")
else:
    print("As strings possuem tamanho diferentes.")
