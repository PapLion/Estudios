#include <stdio.h>
int main() {
    char nom [20];
    float nt1,nt2,nt3,p1,mt1,mt2,mt3,p2,ct1,ct2,ct3,p3,s1,s2,s3;
     printf("ingresa nombre del estudiante:");
     scanf("%s", nom);
     //here begin the notes of the 1st quarter
    printf("ingresa 1er nota  del 1er trimestre:");
    scanf("%f",& nt1);  //list
    printf("ingresa 2da nota  del 1er trimestre:"); // list
     scanf("%f",& nt2); //list
     printf("ingresa 3ra nota  del 1er trimestre:");    //list
    scanf("%f",& nt3);  //list
      printf("ingresa 1er proyecto del 1er trimestre:");    //list
     scanf("%f",& p1);
     float n1=nt1*0.30;
     float n2=nt2*0.30;
     float n3=nt3*0.30;
     float proyec1=p1*0.10;
     float ntt1=(nt1+nt2+nt3);
     float t1=ntt1*0.30;
     //here begin the notes of the 2nd quarter
      printf("ingresa 1er nota  del 2do trimestre:");    //list
    scanf("%f",& mt1);  //list
    printf("ingresa 2da nota  del 2do trimestre:"); // list
     scanf("%f",& mt2); //list
       printf("ingresa 3ra nota  del 2do trimestre:");    //list
    scanf("%f",& mt3);  //list
      printf("ingresa 1er proyecto del 2do trimestre:");    //list
     scanf("%f",& p2);
     float m1=mt1*0.30;
     float m2=mt2*0.30;
     float m3=mt3*0.30;
     float proyec2=p2*0.10;
     float ntt2=(mt1+mt2+mt3);
     float t2=ntt2*0.30;
     //here begin the notes of the 3th quarter
      printf("ingresa 1er nota  del 3er trimestre:");    //list
    scanf("%f",& ct1);  //list
    printf("ingresa 2da nota  del 3er trimestre:"); // list
     scanf("%f",& ct2); //list
       printf("ingresa 3ra nota  del 3er trimestre:");    //list
    scanf("%f",& ct3);  //list
      printf("ingresa 1er proyecto del 3er trimestre:");    //list
     scanf("%f",& p3);
     float c1=ct1*0.30;
     float c2=ct2*0.30;
     float c3=ct3*0.30;
     float proye3=p3*0.10;
     float ntt3=(ct1+ct2+ct3);
     float t3=ntt3*0.30;
     float pro1=(ntt1+ntt2+ntt3)*(0.10);
     float promedio=(t1+t2+t3+pro1);
     float pro2=(p1+p2+p3)/3;
     if (pro2 >= 7){
      printf("\n %s su promedio es: %3.2f aprobado",nom,pro2);
     }else if(pro2>=5){
        printf("\n %s su promedio es: %3.2f supletorio",nom,pro2);
      }
     else if(pro2<=4.99)
      {
         printf("\n %s su promedio es: %3.2f perdio el aÃ±o:",nom,pro2);
      }else{
          printf("\n Usted a ingresado unos datos erroneos, porfavor ingrese nuevamente los datos para que el programa se ejecute correctamente");
      }
    getc;
    return 0;
}
