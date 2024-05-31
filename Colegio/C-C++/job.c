//una persona es admitida para un empleo , si es mayor a 25 años de edad 
//5 años de experiencia 
//elaora un programa que lea el nombre y edad de una persona y su experincia laboral
//luego visualice el menasaje aprobado para el trabajo o no aprobado para el trabajo
// Online C++ compiler to run C++ program online
#include <stdio.h>
int main() {
    char N[25];
    float ed,ex;
    printf ("\n ingrese el nombre del usuario:");
    scanf("%s",N);
     printf ("\n ingrese la edad:");
    scanf("%f",&ed);
    printf ("\n ingrese la experiencia:");
    scanf("%f",&ex);
    if(ed>25||ex>5)
    {
     printf ("\n aprobado %s,,%3.2f",N,ed );   
    }
    else 
    {
    printf ("\n no aprobado, %s,%3.2f",N,ed ); 
    }
return 0;
}