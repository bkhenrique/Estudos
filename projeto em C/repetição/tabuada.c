#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i, tabuada;
printf("Digite o valor da tabuada:");
scanf("%d",&tabuada);

    for (i=1; i<=10; i++)
    {
        /* code */
       printf("%d x %d = %d\n", i, tabuada, i*tabuada);
    }
    


   
    system("pause");
}
    
