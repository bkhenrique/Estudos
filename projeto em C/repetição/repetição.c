#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numero;
    numero=1;
    // while é extrutura boleana

    while (numero <= 10)
    {
        /* code */
        printf("%d\n", numero);
        numero = numero+1;
    }

    // do {
    //     /* code */
    //    printf ("%d\n", numero);
    //    numero = numero+1;
    // } while (numero <= 10);

    // for é uma expressao condicionada para contagem,  ate uma determinada condição ser falsa
    // for (numero=1; numero<=10; numero++)
    // {
    //     /* code */
    //     printf("%d\n",numero);
    // }
    // (numero++) é a mesma coisa de (numero= numero+1)
    return 0;
}