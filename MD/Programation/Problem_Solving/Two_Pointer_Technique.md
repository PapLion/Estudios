# 👫 Two Pointer Technique

## 💡 ¿Qué es?

Una técnica donde se usan **dos punteros (índices)** que recorren una estructura de datos (array, string, etc.) **desde diferentes lugares** (inicio-fin, ambos desde el principio, etc.), y se mueven según ciertas condiciones.

> Es especialmente útil en arrays ordenados o cuando se busca **optimizar recorridos dobles**.

---

## 🎯 ¿Cuándo usarla?

Usala si el problema:
- Usa arrays o strings.
- Involucra **pares de elementos** o relaciones entre posiciones.
- Pide:
  - Sumas objetivo (target)
  - Subarrays que cumplen condiciones
  - Detectar duplicados
  - Invertir cosas (arrays, strings, listas)
  - Palíndromos

---

## 🔁 Patrones típicos

### 1. **Desde ambos extremos**

Cuando el array está **ordenado**, se puede comenzar con un puntero al principio (`left`) y otro al final (`right`).

Ejemplo clásico: **Two Sum en array ordenado**

```python
def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        curr_sum = arr[left] + arr[right]
        if curr_sum == target:
            return (left, right)
        elif curr_sum < target:
            left += 1
        else:
            right -= 1
    return None
```

---

### 2. **Ambos punteros desde el principio**

Cuando tenés que **explorar subarrays** o encontrar combinaciones con restricciones dinámicas.

Ejemplo: **Subarray con suma menor a `k`**

```python
def count_subarrays(arr, k):
    left = total = 0
    for right in range(len(arr)):
        k -= arr[right]
        while k < 0:
            k += arr[left]
            left += 1
        total += right - left + 1
    return total
```

---

### 3. **Para recorrer y comparar**

Ejemplo: **Detectar palíndromos**

```python
def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True
```

---

## 🔧 Ventajas

- Tiempo lineal: `O(n)`
- Usa espacio constante: `O(1)`
- Elegante y más fácil de razonar que bucles anidados
- En muchos casos reemplaza la fuerza bruta doble

---

## 📊 Ejemplos comunes

| Problema                                 | Patrón usado          |
|------------------------------------------|------------------------|
| Two Sum (array ordenado)                 | Extremos               |
| Valid Palindrome                         | Extremos               |
| Merge de dos arrays ordenados            | Ambos desde inicio     |
| Subarrays con propiedades (suma, etc.)   | Ambos desde inicio     |
| Remover duplicados de un array ordenado  | Avance condicional     |

---

## 🔥 Consejo mental

Si estás por usar dos bucles anidados sobre un array, **pensá si podés controlar ambos lados con dos punteros** que se mueven condicionalmente.

---
