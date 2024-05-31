#include <stdio.h>
#include <conio.h>

void main() {
    int edad;
    printf("Ingrese la edad: ");
    scanf("%d", &edad);
    if (edad >= 18 && edad <=35)
    {
        printf("uted tiene %d por lo tanto es aceptado", edad);
    }
    else
    {
        printf("uted tiene %d por lo tanto no es aceptado", edad);
    }
    getch();
}