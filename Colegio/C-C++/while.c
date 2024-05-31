#include <stdio.h>
#include <conio.h>
void main(){
int c = 1;
float nota,suma,pro;
while (c<=5){
printf("Ingrese la nota %d:", c);
scanf("%f",&nota);
suma=suma+nota;
c=c+1;
}
pro=suma/5;
gotoxy(15,6);printf("El promedio es:  %f", pro);
getch();
}