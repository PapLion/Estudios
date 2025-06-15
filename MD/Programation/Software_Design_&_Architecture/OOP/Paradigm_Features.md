# 🧱 OOP Paradigm Features

## 1. 🧩 Abstract Classes

### 💡 ¿Qué son?
Una clase abstracta es una clase que no puede ser instanciada por sí misma. Se utiliza como **base para otras clases** y puede contener métodos abstractos (sin implementación) y métodos normales (con implementación).

### ✅ Características
- Sirven como plantillas.
- Definen estructura común sin implementación completa.
- Obligan a las subclases a implementar ciertos métodos.
- En Python, se definen usando `abc.ABC` y `@abstractmethod`.

### 📦 Ejemplo en Python
```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def hablar(self):
        pass

class Perro(Animal):
    def hablar(self):
        return "Guau"
```

---

## 2. 🧱 Concrete Classes

### 💡 ¿Qué son?
Son clases que se pueden instanciar directamente. Tienen **implementaciones completas** de todos sus métodos.

### ✅ Características
- Implementan toda la funcionalidad necesaria.
- Pueden heredar de clases abstractas.
- Son las que realmente se usan en el código para crear objetos.

### 📦 Ejemplo
```python
class Gato(Animal):
    def hablar(self):
        return "Miau"

g = Gato()
print(g.hablar())  # Miau
```

---

## 3. 🕵️ Scope / Visibility (Ámbito y visibilidad)

### 💡 ¿Qué es?
Controla **quién puede acceder o modificar** atributos y métodos de una clase. En algunos lenguajes esto es estricto (Java, C++), pero en Python es por convención.

### ✅ Tipos en Python

| Tipo        | Notación       | Significado                              |
|-------------|----------------|------------------------------------------|
| Público     | `nombre`       | Accesible desde cualquier lugar          |
| Protegido   | `_nombre`      | Convención: solo desde la clase y sus hijas |
| Privado     | `__nombre`     | Name mangling: acceso restringido        |

### 📦 Ejemplo
```python
class Persona:
    def __init__(self):
        self.nombre = "Dani"        # público
        self._estado = "activo"     # protegido
        self.__clave = "secreta"    # privado
```

---

## 4. 🧮 Interfaces

### 💡 ¿Qué son?
Son **contratos** que definen qué métodos debe tener una clase, pero no cómo implementarlos.  
En lenguajes como Java o C#, se definen con la palabra `interface`.  
En Python, usamos clases abstractas puras para simular interfaces.

### ✅ Características
- No contienen lógica, solo definiciones de métodos.
- Obligan a las clases que las implementan a definir esos métodos.
- Promueven diseño limpio y consistente.

### 📦 Ejemplo de "interfaz" en Python
```python
from abc import ABC, abstractmethod

class Volable(ABC):
    @abstractmethod
    def volar(self):
        pass

class Pajaro(Volable):
    def volar(self):
        return "Estoy volando"
```

---

## 🧩 Comparación rápida

| Concepto         | ¿Se instancia? | ¿Tiene métodos implementados? | ¿Obliga a implementar métodos? |
|------------------|----------------|-------------------------------|---------------------------------|
| Abstract Class   | ❌             | ✅ (algunos)                  | ✅ (los abstractos)             |
| Concrete Class   | ✅             | ✅                            | ❌                              |
| Interface        | ❌             | ❌                            | ✅                              |

