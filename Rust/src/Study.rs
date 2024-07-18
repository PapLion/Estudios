//Constantes
const MAYORIA_DE_EDAD = 18;

//Static
static MAYOR_DE_MIEMBRO = 15;

fn main(){
    //Declaración, Variables y  Constantes
    let  name = "Soy  Jesús uwu"; //Local
    //Interpolación
    println!("Ola soy {}", name);
    println!("ola yo tmb soy {name}");
    println!("La mayoria de edad es {MAYORIA_DE_EDAD}");
    //Tipos de datos de variables
    let is_rust_cool: bool = true;
    let number: i32 = 10;
    let number2: u32 = 10;
    let number3: f32 = 10.5;
    let letter : str = "hola";
    let char_var : char = "a";
    let my_tuple: (i32, u8, f64) = (500, 2, 20.5);
    

    //Shadowing

    //Mutabilidad
    let mut edad = 20;
    edad = 21;

}