# 🧼 Clean Code - Bloque 2

## 4. 📦 Keep Methods, Classes, Files Small

### 💡 Idea
El cerebro humano se satura fácil. Mientras **más pequeñas sean tus unidades de código**, más fáciles de entender, probar y mantener serán.

### 📌 Guías generales
- Métodos: ideal ≤ 20 líneas.
- Clases: ideal ≤ 100-200 líneas.
- Archivos: ideal ≤ 300 líneas (modulariza).

### ✅ Ejemplo bueno
```python
class UserService:
    def get_user(self, user_id):
        return db.query(User).get(user_id)

    def send_welcome_email(self, user):
        email_service.send(user.email, "¡Bienvenido!")
```

### ❌ Ejemplo malo (todo en una función)
```python
def handle_user_signup(user_data):
    # validate, save, send email, log... todo en una sopa gigante
```

### 🧠 Consejo mental
> "Si un bloque hace más de una cosa... ya es demasiado."

---

## 5. 🧪 Pure Functions

### 💡 Idea
Una **función pura**:
- Siempre da el mismo resultado con los mismos inputs.
- No tiene efectos secundarios (no modifica variables globales, ni escribe archivos, etc).

### ✅ Ejemplo bueno
```python
def square(x):
    return x * x
```

### ❌ Ejemplo malo
```python
result = 0
def add_to_result(x):
    global result
    result += x  # efecto secundario oculto
```

### 🧠 ¿Por qué importa?
- Se testean fácil.
- No rompen otras partes del sistema.
- Hacen que el código sea más funcional y predecible.

---

## 6. 🧠 Minimize Cyclomatic Complexity

### 💡 Idea
La *complejidad ciclomática* mide cuántos caminos distintos puede tomar el flujo del código. **Menos caminos = más claridad**.

### 🔢 Reglas generales
- 1–5: 👍 ideal
- 6–10: 😬 aceptable
- >10: 🔥 refactor urgente

### ❌ Ejemplo malo (muchas ramas)
```python
def process_order(order):
    if order.status == "pending":
        if order.payment and order.user:
            if not order.cancelled:
                # 💥 demasiadas condiciones anidadas...
```

### ✅ Ejemplo bueno (extrae decisiones)
```python
def is_order_processable(order):
    return (
        order.status == "pending" and
        order.payment and
        order.user and
        not order.cancelled
    )

def process_order(order):
    if is_order_processable(order):
        ...
```

### 🧠 Consejo mental
> "Si necesitas hacer scroll para entender todas las condiciones, tenés un problema."

---

## 🧠 Recap de Bloque 2

| Principio                            | En una frase                              |
|-------------------------------------|-------------------------------------------|
| `Métodos/clases/archivos pequeños` | Divide y vencerás                         |
| `Pure functions`                   | Código predecible = código confiable      |
| `Menor complejidad ciclomática`   | Menos caminos = menos bugs                |

