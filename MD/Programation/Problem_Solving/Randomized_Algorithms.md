# 🎲 Randomized Algorithms (Algoritmos Aleatorizados)

## 💡 ¿Qué es?

Un algoritmo que toma **decisiones al azar** durante su ejecución. Usa un generador de números aleatorios para influir en su camino de ejecución o resultado.

> No siempre da el mismo resultado para la misma entrada.  
> Su poder está en que es rápido, simple y sorprendentemente eficaz en muchos casos.

---

## 📦 Tipos

### 1. **Las Vegas**

- Siempre da una **respuesta correcta**, pero el **tiempo de ejecución es aleatorio**.
- Ejemplo: QuickSort con pivote aleatorio.

### 2. **Monte Carlo**

- Tiene **tiempo fijo**, pero la **respuesta puede ser incorrecta con baja probabilidad**.
- Ejemplo: Test de primalidad de Miller-Rabin.

---

## 🎯 ¿Cuándo usarlo?

- Cuando los algoritmos deterministas son muy lentos.
- Cuando querés **evitar casos peores** artificiales (como en Quicksort).
- Cuando un resultado aproximado o probabilístico es suficiente.
- Para romper simetrías o evitar colisiones en hashing, búsqueda, etc.

---

## ⚡ Ejemplo 1: QuickSort con pivote aleatorio (Las Vegas)

```python
import random

def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = random.choice(arr)
    left = [x for x in arr if x < pivot]
    mid = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + mid + quicksort(right)
```

- ⏱ Tiempo promedio: `O(n log n)`
- 😎 Aleatoriza el pivote → **evita peores casos (`O(n²)`) artificiales**

---

## ⚡ Ejemplo 2: Primalidad probabilística (Monte Carlo)

```python
from random import randrange

def is_probably_prime(n, k=5):  # k = número de tests
    if n <= 3:
        return n == 2 or n == 3
    for _ in range(k):
        a = randrange(2, n - 1)
        if pow(a, n - 1, n) != 1:
            return False  # definitivamente compuesto
    return True  # probablemente primo
```

- Puede **fallar con baja probabilidad**, pero muy útil para números enormes (criptografía).

---

## 🔐 Otros usos comunes

| Área                          | Ejemplo                                 |
|-------------------------------|------------------------------------------|
| Criptografía                  | Generación de claves, primalidad         |
| Algoritmos de hashing         | Evitar colisiones                        |
| Sampling/estadística          | Algoritmos tipo Monte Carlo              |
| Juegos/simulación             | Movimiento aleatorio, generación mundo  |
| Algoritmos probabilísticos    | Skip Lists, Bloom Filters, etc.          |

---

## 🧨 Ventajas

- Rápidos y simples.
- Evitan peores casos intencionales.
- Muy útiles cuando el "error" es tolerable o improbable.

## ⚠️ Desventajas

- No garantizan consistencia siempre.
- Difíciles de testear y depurar.
- Algunos tienen error probabilístico → hay que **entender la probabilidad del fallo**.

---

## 🎯 Consejo mental

> Cuando tu algoritmo necesita evitar un patrón adverso o requiere explorar un espacio grande sin orden... **tirar los dados puede ser la mejor estrategia**.

---

## 🧪 Extra: Random Sampling

```python
import random

def pick_random_k(arr, k):
    return random.sample(arr, k)
```

- Útil para obtener muestras de un dataset enorme (muy usado en IA y estadística).

---
