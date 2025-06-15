# 🧼 Clean Code - Bloque 4

## 10. ✅ Tests Should Be Fast and Independent

### 💡 Idea
Tus tests deben ser:
- **Rápidos**: para que se puedan correr todo el tiempo sin miedo.
- **Independientes**: para que el orden de ejecución no afecte el resultado.
- **Deterministas**: que no fallen "a veces sí, a veces no".

### ❌ Ejemplo malo
```python
# Este test depende de que 'db' esté en cierto estado
def test_get_users():
    assert len(get_users()) == 3
```

### ✅ Ejemplo bueno (uso de mocks o fixtures)
```python
def test_get_users_empty():
    db.clear()
    assert get_users() == []
```

### 🧠 Consejo mental
> "Si tenés miedo de correr todos los tests en cada cambio... ya no son tests, son obstáculos."

---

## 11. 🧠 Use Meaningful Names (revisitado)

### 💡 Idea
No pongas nombres vagos, temporales o crípticos. El nombre debe **explicar el propósito, no el tipo**.

### ❌ Ejemplos malos
```python
def f(x):
    return x * 0.9

tmp = get_data()
```

### ✅ Ejemplos buenos
```python
def apply_discount(price):
    return price * 0.9

raw_user_data = get_data()
```

### 🌱 Naming tips
- Función = acción → `get_user()`, `send_email()`
- Variable = sustantivo → `user`, `email_body`
- No repitas tipos: `user_list: List[User]` → `users`
- Evitá abreviaciones (excepto convenciones como `id`, `db`)

### 🧠 Consejo mental
> "Los nombres son mini-comentarios vivos. Que hablen por sí solos."

---

## 12. 👤 Organize Code by the Actor It Belongs To

### 💡 Idea
Agrupá tu código por **entidades lógicas** (usuarios, pedidos, productos...), no por capas técnicas (controladores, servicios, repositorios). Esto ayuda a navegar y mantener mejor.

### ❌ Ejemplo malo (estructura técnica clásica)
```
controllers/
    user_controller.py
services/
    user_service.py
models/
    user.py
```

### ✅ Ejemplo bueno (estructura por actor)
```
user/
    controller.py
    service.py
    model.py
```

### 🧠 Consejo mental
> "El código debería decirte en qué parte del sistema estás con solo ver la carpeta."

---

## 🧠 Recap de Bloque 4

| Principio                             | En una frase                                   |
|--------------------------------------|------------------------------------------------|
| `Tests rápidos e independientes`    | Testear debe ser un hábito, no un castigo      |
| `Nombres significativos`            | El nombre correcto hace innecesario un comentario |
| `Organización por actor`            | Pensá en usuarios, no en 'controladores'       |
