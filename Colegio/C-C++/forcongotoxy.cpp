#include <stdio.h>
#include <conio.h>
int main() {
    int pe, pa;
   printf("Ingrese el numero de la tabla que desea: ");
   scanf("%d",&pe);
   printf("Ingrese el numero hasta el que desea llegar: ");
   scanf("%d",&pa);
   gotoxy(29,4);printf("Tabla del %d",pe);
   for(int i = 1; i <= pa; i++){

    int r = pe * i;
    gotoxy(29,4+i);
    printf("%d x %d = %d \n", pe, i , r);
   }
   getch();
}