#include <stdio.h>
#include <conio.h>
void main ()
{
int cod;
float lib,tp,pre;
printf("**********************\n");
printf("exportadora de camaron \n");
printf("**********************\n");
printf("ingrese el codigo del camaron:");
scanf("%d",& cod);
switch(cod)
{
case 1:
printf ("\n tipo extra");
printf("\n precio $6.50");
pre= 6.50;
printf("ingrese las libras a exportar:");
scanf("%f",& lib);
break;
case 2:
printf("\n premiun");
printf("\n precio $10.50");
pre = 11.50;
printf("ingrese las libras a exportar:");
scanf("%f",& lib);
break ;
case 3:
printf("\n tipo super premiun");
printf("\n precio $ 13.50");
pre= 13.50;
printf("ingrese las libras a exportar:");
scanf("%f",& lib);
break;
default:printf("\n el codigo es incorrecto");
}
tp= lib*pre;
printf("\n el total a pagar es:%5.2f",tp);
getchar();
}
