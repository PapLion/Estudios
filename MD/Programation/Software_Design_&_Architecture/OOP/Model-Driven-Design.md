# 🧠 Model-Driven Design (MDD) / Domain-Driven Design (DDD)

> Enfoca el diseño del software en torno a un **modelo del dominio**, que representa el conocimiento y comportamiento del problema real que estás resolviendo.

---

## 1. 🧱 Domain Models

### 💡 ¿Qué es un Domain Model?
Es una **representación conceptual rica del dominio** (el problema real) codificada en objetos y relaciones.

### ✅ Características
- Representa **entidades, relaciones, reglas de negocio** y comportamientos.
- Usa un **lenguaje ubicuo (domain language)** común entre desarrolladores y expertos del negocio.
- Vive en el **centro del sistema** (no es solo una base de datos glorificada).

### 📦 Ejemplo
```python
class CuentaBancaria:
    def __init__(self, numero, titular):
        self.numero = numero
        self.titular = titular
        self.saldo = 0

    def depositar(self, monto):
        if monto <= 0:
            raise ValueError("Monto inválido")
        self.saldo += monto

    def retirar(self, monto):
        if monto > self.saldo:
            raise ValueError("Fondos insuficientes")
        self.saldo -= monto
```

---

## 2. 🚫 Anemic Models

### 💡 ¿Qué son?
Modelos donde los objetos **solo tienen datos (atributos)** y **no encapsulan lógica**. La lógica se mueve a otros servicios, perdiendo el poder del paradigma OO.

### 🛑 Problemas
- Rompen encapsulamiento.
- Mezclan lógica de negocio en servicios sin cohesión.
- Son anti-patrón en DDD.

### 📦 Ejemplo de modelo anémico
```python
# Modelo solo con datos
class CuentaBancaria:
    def __init__(self, saldo):
        self.saldo = saldo

# Lógica en servicios externos
def depositar(cuenta, monto):
    cuenta.saldo += monto
```

---

## 3. 🏗️ Layered Architecture

### 💡 ¿Qué es?
Es una arquitectura **en capas**, separando las responsabilidades del sistema para lograr acoplamiento bajo y alta cohesión.

### 🧱 Capas típicas:
1. **UI / Presentation Layer** – Interfaz con el usuario o API.
2. **Application Layer** – Orquesta casos de uso del sistema.
3. **Domain Layer** – Contiene la lógica de negocio (core del sistema).
4. **Infrastructure Layer** – Conexión con el mundo exterior (DB, red, email, etc.).

### 📦 Diagrama simplificado

```
[ UI ] --> [ Application Layer ] --> [ Domain Model ] <--> [ Infrastructure ]
```

---

## 4. 🗣️ Domain Language (Ubiquitous Language)

### 💡 ¿Qué es?
Un lenguaje común que **usan desarrolladores y expertos del dominio**, sin ambigüedades.

### ✅ Beneficios
- Facilita comunicación clara entre todos los involucrados.
- Se refleja directamente en los **nombres de clases, métodos y objetos**.
- Ayuda a que el modelo sea **expresivo, preciso y mantenible**.

### 📌 Ejemplo
Si estás construyendo software bancario, usás términos como:
- `Cuenta`, `Transferencia`, `Saldo`, `Cliente`, `Retiro`, etc.

---

## 5. 🔐 Class Invariants

### 💡 ¿Qué son?
Reglas o condiciones que **siempre deben mantenerse verdaderas** dentro de una clase.

### ✅ Se usan para:
- Garantizar **consistencia del estado interno**.
- Prevenir errores lógicos.
- Hacer que los objetos sean **auto-protegidos**.

### 📦 Ejemplo
```python
class Inventario:
    def __init__(self):
        self.stock = 0

    def agregar(self, cantidad):
        assert cantidad > 0
        self.stock += cantidad

    def remover(self, cantidad):
        if cantidad > self.stock:
            raise ValueError("Stock insuficiente")
        self.stock -= cantidad

    def _invariante():
        assert self.stock >= 0
```

---

## ✅ Conclusión

| Concepto             | Función Principal                                        |
|----------------------|----------------------------------------------------------|
| Domain Model         | Representa reglas y comportamientos del negocio real     |
| Anemic Model         | Antipatron: datos sin lógica, rompe DDD                  |
| Layered Architecture | Organización limpia por responsabilidades                |
| Domain Language      | Lenguaje común entre devs y expertos del dominio         |
| Class Invariants     | Garantiza consistencia interna de los objetos            |

