import random

def jogar_forca():
    print("Bem-vindo ao jogo da Forca!")
    
    with open("./palavras.txt", "r") as arquivo:
        palavras = arquivo.readlines()
        
    palavra_secreta = random.choice(palavras).strip()
    tamanho_palavra = len(palavra_secreta)
    letras_certas = ["_" for letra in palavra_secreta]
    
    enforcou = False
    acertou = False
    erros = 0
    
    print("A palavra tem", tamanho_palavra, "letras.")
    print(letras_certas)
    
    while (not enforcou and not acertou):
        chute = input("Digite uma letra: ").strip().lower()
        
        if (chute in palavra_secreta):
            index_letra = 0
            for letra in palavra_secreta:
                if (chute == letra):
                    letras_certas[index_letra] = letra
                index_letra += 1
        else:
            erros += 1
            print("Errrrooouuuu! Faltam", 6-erros, "tentativas.")
        
        enforcou = (erros == 6)
        acertou = ("_" not in letras_certas)
        print(letras_certas)
    
    if (acertou):
        print("Boaaa !")
    else:
        print("Perrdeuuuu! A palavra secreta era:", palavra_secreta)

if __name__ == "__main__":
    jogar_forca()
