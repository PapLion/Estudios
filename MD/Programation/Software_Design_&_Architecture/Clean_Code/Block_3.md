# 🧼 Clean Code - Bloque 3

## 7. 🚫 Avoid Passing Nulls or Booleans

### 💡 Idea
Evitá pasar `None` o booleanos como argumentos, porque hacen que las funciones se ramifiquen, dependan de condiciones implícitas, y generen bugs difíciles de rastrear.

### ❌ Ejemplo malo
```python
def render_profile(user, show_email=False):
    if user is None:
        return "Error"
    if show_email:
        return f"{user.name} ({user.email})"
    return user.name
```

### ✅ Ejemplo bueno (dividí responsabilidades)
```python
def render_profile(user):
    return user.name

def render_profile_with_email(user):
    return f"{user.name} ({user.email})"
```

### 🧠 Consejo mental
> Si una función hace cosas muy distintas según un parámetro booleano, dividila en dos funciones claras.

---

## 8. 🧼 Keep Framework Code Distant

### 💡 Idea
Tu lógica de negocio no debería depender directamente del framework (FastAPI, Flask, Django, etc.). **Acoplá tus decisiones, no tu código**.

### ❌ Ejemplo malo
```python
@app.post("/users")
def create_user(request: Request):
    user = User(**request.json())  # Lógica de negocio dentro del endpoint
    db.add(user)
    db.commit()
```

### ✅ Ejemplo bueno (separación de capas)
```python
@app.post("/users")
def create_user(request: Request):
    data = request.json()
    user = create_user_use_case(data)  # Lógica separada

def create_user_use_case(data):
    user = User(**data)
    db.add(user)
    db.commit()
    return user
```

### 🧠 Consejo mental
> "Tu app debería poder vivir sin FastAPI. O al menos, debería costar poco mudarla."

---

## 9. 🧱 Use Correct Constructs

### 💡 Idea
No fuerces estructuras de control, tipos de datos o patrones solo porque "funcionan". Python (y todo lenguaje) te da **herramientas correctas** para cada cosa.

### ❌ Ejemplo malo
```python
for i in range(len(users)):
    print(users[i])
```

### ✅ Ejemplo bueno
```python
for user in users:
    print(user)
```

Otro ejemplo: usar `dict` cuando deberías usar una clase, o usar `list` para buscar elementos sin necesidad (en lugar de `set`).

### 🧠 Consejo mental
> "Usá el martillo para clavar. No el destornillador solo porque te quedó a mano."

---

## 🧠 Recap de Bloque 3

| Principio                           | En una frase                                   |
|------------------------------------|------------------------------------------------|
| `Avoid nulls/booleans`            | Funciones con lógica separada son más limpias |
| `Keep framework code distant`     | Tu código debería sobrevivir sin el framework |
| `Use correct constructs`          | Python ya pensó en eso. Usá lo que corresponde |

