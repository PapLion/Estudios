# 🧮 Notación Asintótica: Big-O, Big-Θ y Big-Ω

Las notaciones asintóticas describen el **comportamiento del tiempo de ejecución o uso de memoria** de un algoritmo **cuando el tamaño de entrada `n` tiende a infinito**.

---

## 🅾️ Big-O (O grande) — **Cota Superior**

### Significado
- Describe el **peor caso**.
- Proporciona un **límite superior** del crecimiento.
- Nos asegura que el algoritmo **nunca será peor que eso**.

### Ejemplo

```python
def buscar_elemento(arr, target):
    for item in arr:
        if item == target:
            return True
    return False
```

- En el **peor caso** (cuando no encuentra el `target`): `O(n)`

---

## 🟰 Big-Θ (Theta grande) — **Cota Ajustada (Exacta)**

### Significado
- Describe el **caso promedio realista**.
- El algoritmo **siempre se comporta** en este orden.
- **Límite superior y límite inferior al mismo tiempo**.

### Ejemplo

```python
def imprimir_elementos(arr):
    for item in arr:
        print(item)
```

- Siempre recorre todos los elementos.
- Complejidad: `Θ(n)`

> Si el tiempo de ejecución está acotado por arriba y por abajo por una función `f(n)`, entonces es `Θ(f(n))`.

---

## 🪛 Big-Ω (Omega grande) — **Cota Inferior**

### Significado
- Describe el **mejor caso**.
- El algoritmo **como mínimo se comportará así**.

### Ejemplo

```python
def buscar_en_lista(arr, target):
    if arr[0] == target:
        return True
    for item in arr:
        if item == target:
            return True
    return False
```

- Si el `target` está en la primera posición: `Ω(1)`
- Pero en el peor caso puede ser `O(n)`

---

## 📊 Comparación General

| Notación  | Caso que describe | Qué mide                   |
|-----------|-------------------|----------------------------|
| **O(f(n))** | Peor caso         | Tiempo máximo              |
| **Θ(f(n))** | Caso promedio     | Tiempo exacto/ajustado     |
| **Ω(f(n))** | Mejor caso        | Tiempo mínimo              |

---

## 📌 Ejemplo Ilustrativo

Supón este algoritmo:

```python
def ejemplo(arr):
    if arr[0] == 0:
        return True  # constante
    for item in arr:  # lineal
        if item == 999:
            return True
    return False
```

- **Ω(1)** si `arr[0] == 0` (caso ideal)
- **O(n)** si tiene que revisar todo el arreglo
- **Θ(n)** si siempre debe iterar por completo

---

## 🎓 Consejos

- Siempre se da `Big-O` como **garantía de rendimiento**.
- `Big-Θ` se da cuando se conoce el comportamiento exacto.
- `Big-Ω` rara vez se usa solo; acompaña análisis teóricos.

---

¿Te gustaría que lo explique con gráficas o más visualizaciones comparativas entre las 3 notaciones?
