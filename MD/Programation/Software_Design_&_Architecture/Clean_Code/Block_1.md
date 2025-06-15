# 🧼 Clean Code - Bloque 1

## 1. ✅ Be Consistent (Sé consistente)

### 💡 Idea
Tu código debe seguir un estilo **uniforme** en nombres, estructuras, espaciado, convenciones, etc. No tiene que ser perfecto, **solo coherente**.

### ✅ Ejemplo bueno
```python
def get_user_by_id(user_id):  # snake_case para funciones
    return db.query(User).filter(User.id == user_id).first()
```

### ❌ Ejemplo malo
```python
def GetUserById(userID):  # camelCase + inconsistencias en nombre
    return db.query(User).filter(User.id == user_id).first()
```

### 🧠 Consejo mental
> Si abrís tu archivo en 3 meses... ¿vas a poder entenderlo sin pelearte con él?

---

## 2. 🧠 Prefer Meaningful Names Over Comments

### 💡 Idea
Los **nombres claros** evitan la necesidad de comentarios innecesarios. Si tu variable se llama `elapsed_time`, no hace falta escribir `# tiempo transcurrido`.

### ✅ Ejemplo bueno
```python
def calculate_average_score(scores):  # ✔️ claro
    total = sum(scores)
    return total / len(scores)
```

### ❌ Ejemplo malo
```python
def calc(x):  # 😵 ¿qué es "x"?
    # calcula el promedio
    return sum(x) / len(x)
```

### 🧠 Consejo mental
> "El código debería explicarse por sí solo. Si necesitas comentarlo para entenderlo, el

