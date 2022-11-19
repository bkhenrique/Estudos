#include <stdio.h >
#include<stdlib.h>


/* == igualdade  , < menoor q , > maior q , diferente != ,  e && , ou || , nao !, if , else , 
if (condição) {
}
else if (condição) {
}
else if (condição) {
}
else {
} */

int main()
{

float nota1, nota2, media;
		printf("nota Avaliação 1:");/* printf e para aparecer uma menssagem */
		scanf("%f",&nota1);
		
		printf("nota 2:");
		scanf("%f",&nota2);
		
		media = (nota1 + nota2)/2;
		
        if(media >=9)
        {
            printf("perfeito A %.1f\n", media);/* code */
 
        }else if (media >=7 && media <=8.9)
        {
            printf("passou raspando B %.1f\n", media);/* code */
        }else if (media >=4.5 && media <=6)
        {
            printf("Recuperação C %.1f\n", media);
        }else if (media <=4.4)
        {
                    printf("reprovado D %.1f\n", media);
      
        }
        
	return 0;
    

	
}

