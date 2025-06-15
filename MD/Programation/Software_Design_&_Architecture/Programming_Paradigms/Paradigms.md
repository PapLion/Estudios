# 🧠 Paradigmas de Programación

## 1️⃣ Programación Estructurada

### 💡 Idea central
El código sigue una **estructura secuencial**, con bloques bien definidos (condicionales, bucles, funciones). Su enfoque es en **el "cómo" se hacen las cosas**, paso a paso.

### 🔧 Características
- Uso de funciones y procedimientos.
- Control de flujo claro: `if`, `for`, `while`.
- Código organizado linealmente.
- Evita el uso de `goto`.

### ✅ Ejemplo
```python
def calcular_area(base, altura):
    return base * altura

if __name__ == "__main__":
    base = float(input("Base: "))
    altura = float(input("Altura: "))
    print("Área:", calcular_area(base, altura))
```

### 🧠 Mentalidad
> “Decime paso por paso cómo se resuelve el problema.”

---

## 2️⃣ Programación Funcional

### 💡 Idea central
Se basa en funciones **puras**, sin efectos secundarios. El estado no cambia. Se usa mucho en ciencia de datos, procesamiento masivo y sistemas concurrentes.

### 🔧 Características
- Funciones puras: mismo input → mismo output.
- No hay estado mutable (sin `for`, sin cambiar variables).
- Uso intensivo de funciones de orden superior (`map`, `filter`, `reduce`).
- Funciones como ciudadanos de primera clase (se pueden pasar como datos).

### ✅ Ejemplo
```python
def cuadrado(x):
    return x * x

nums = [1, 2, 3, 4]
cuadrados = list(map(cuadrado, nums))
print(cuadrados)  # [1, 4, 9, 16]
```

### 🧠 Mentalidad
> “Qué se quiere lograr, no cómo. Sin tocar nada más allá de mi función.”

---

## 3️⃣ Programación Orientada a Objetos (OOP)

### 💡 Idea central
Modela el mundo real usando **clases** (planos) y **objetos** (instancias con datos y comportamiento). Se enfoca en **quién** hace algo (actor) y cómo se comporta.

### 🔧 Características
- Encapsulamiento: cada objeto maneja su propio estado.
- Herencia: clases hijas pueden extender/modificar clases padres.
- Polimorfismo: distintas clases pueden compartir interfaz común.
- Abstracción: se oculta lo complejo, se expone lo esencial.

### ✅ Ejemplo
```python
class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

    def hablar(self):
        pass

class Perro(Animal):
    def hablar(self):
        return "Guau!"

class Gato(Animal):
    def hablar(self):
        return "Miau!"

mascotas = [Perro("Firulais"), Gato("Michi")]
for m in mascotas:
    print(m.nombre, "dice", m.hablar())
```

### 🧠 Mentalidad
> “¿Quién está actuando? ¿Cómo se comporta este actor?”

---

## 🧩 Comparación rápida

| Paradigma        | Enfoque              | Estado mutable | Estilo         | Uso común                      |
|------------------|----------------------|----------------|----------------|--------------------------------|
| Estructurada     | Secuencia de pasos   | Sí             | Procedural     | Scripts, CLI, microtareas      |
| Funcional        | Declarativo          | No             | Basado en funciones | Ciencia de datos, concurrencia |
| Orientada a Objetos | Modelado de actores | Sí (en objetos) | Basado en clases | Apps grandes, videojuegos, GUIs |

