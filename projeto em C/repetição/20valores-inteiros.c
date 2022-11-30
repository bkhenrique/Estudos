#include <stdio.h>
#include <stdlib.h>

int main()
{
int valor, somavalor, i,menor,maior,inicio=1;
somavalor=0;
menor=0;
maior=0;

for (i=1; i<=20; i++)
{
    /* code */
    printf("Digite a nota:");
    scanf("%d", &valor);
    if (inicio == 1)
    {
     maior = valor;
     menor = valor;
    }   
    inicio = 0;
    if (valor > maior)
    {
        maior = valor;
    }
    if (valor < menor)
    {
       menor = valor;
    }
    somavalor= somavalor+valor;
    
    

}

printf("Media =%d\n",somavalor/20);
printf("Maior nota=%d\n",maior);
printf("Menor nota=%d\n",menor);


 

}
