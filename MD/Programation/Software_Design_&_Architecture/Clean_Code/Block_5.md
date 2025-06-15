# 🧼 Clean Code - Bloque 5

## 13. ⚖️ Command Query Separation (CQS)

### 💡 Idea
Una función **o bien hace algo (comando)** o **devuelve algo (consulta)**, pero **nunca ambas cosas**.

Esto ayuda a entender qué esperar de cada función y a reducir side effects inesperados.

### ❌ Ejemplo malo (mezcla comando + query)
```python
def save_user(user):
    db.save(user)
    return db.get_all_users()  # Devuelve cosas además de guardar
```

### ✅ Ejemplo bueno
```python
def save_user(user):
    db.save(user)

def get_all_users():
    return db.get_all()
```

### 🧠 Consejo mental
> "Cada función tiene una intención. Si hace más de una cosa, va a ocultar errores."

---

## 14. 🧘 Keep It Simple and Refactor Often

### 💡 Idea
El código **simple** es mejor que el código "inteligente". Y **refactorar frecuentemente** mantiene tu base limpia, robusta y lista para crecer.

No busques la solución más sofisticada al inicio. Buscá la más clara. Y una vez que funcione, **mejorala** sin cambiar su comportamiento.

### ❌ Ejemplo malo (complejo antes de tiempo)
```python
def process_data(data):
    return reduce(lambda acc, x: acc + x * 2 if x % 2 == 0 else acc, data, 0)
```

### ✅ Ejemplo bueno (claro y refactorable)
```python
def process_data(data):
    total = 0
    for x in data:
        if x % 2 == 0:
            total += x * 2
    return total
```

> Luego, si querés, lo podés refactorar:
```python
def process_data(data):
    return sum(x * 2 for x in data if x % 2 == 0)
```

### 🧠 Consejo mental
> "Primero hacelo que funcione. Después hacelo limpio. Después hacelo rápido."

---

## 🧠 Recap de Bloque 5

| Principio                        | En una frase                                |
|---------------------------------|---------------------------------------------|
| `Command Query Separation`      | O cambia algo, o responde algo — nunca ambos |
| `Keep it simple & refactor`     | Simple > brillante. Mejorá después. Siempre |

---

# ✅ Checklist Final de Clean Code

- [x] ✅ Sé consistente con estilos y estructuras
- [x] ✅ Usá nombres significativos (y evitá comentarios innecesarios)
- [x] ✅ Mantené todo pequeño: funciones, clases, archivos
- [x] ✅ Preferí funciones puras (sin efectos colaterales)
- [x] ✅ Reducí la complejidad ciclomática (menos `if`, `for` anidados)
- [x] ✅ Evitá pasar `nulls`, flags o booleans
- [x] ✅ Separá tu código del framework
- [x] ✅ Usá las estructuras correctas para cada problema
- [x] ✅ Tests rápidos, claros e independientes
- [x] ✅ Organización por actor (módulos lógicos)
- [x] ✅ Separá consultas de comandos
- [x] ✅ KISS: Keep it simple, stupid. Refactorá sin miedo

