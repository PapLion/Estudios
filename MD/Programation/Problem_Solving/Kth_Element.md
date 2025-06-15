# 🔢 K-th Element Technique

## 💡 ¿Qué es?

Buscar el **k-ésimo elemento** (por posición o valor) dentro de una estructura de datos (lista, matriz, heap, etc.). Se aplica cuando no hace falta ordenar todo, solo encontrar **el valor que estaría en la posición `k` si estuviera ordenado**.

---

## 📦 Ejemplos comunes

- Encontrar la mediana (`k = n // 2`)
- K-ésimo elemento más pequeño o más grande
- K-th smallest element in a sorted matrix
- K-th largest sum, frequency, distance, etc.

---

## ⚙️ Métodos principales

### 1. **Heap (MinHeap/MaxHeap)**

```python
import heapq

def kth_smallest(nums, k):
    return heapq.nsmallest(k, nums)[-1]
```

- ✅ Fácil de implementar
- ⏱ Tiempo: `O(n log k)`

---

### 2. **QuickSelect (Versión parcial de QuickSort)**

```python
import random

def quickselect(arr, k):
    if len(arr) == 1:
        return arr[0]

    pivot = random.choice(arr)
    lows = [x for x in arr if x < pivot]
    highs = [x for x in arr if x > pivot]
    pivots = [x for x in arr if x == pivot]

    if k <= len(lows):
        return quickselect(lows, k)
    elif k <= len(lows) + len(pivots):
        return pivots[0]
    else:
        return quickselect(highs, k - len(lows) - len(pivots))
```

- ⏱ Promedio: `O(n)`
- ❌ Peor caso: `O(n²)`, pero rara vez ocurre si pivote aleatorio

---

### 3. **Binary Search on Answer**

Usado en estructuras como matrices ordenadas o rangos numéricos.

```python
def kth_smallest_matrix(matrix, k):
    n = len(matrix)
    lo, hi = matrix[0][0], matrix[-1][-1]
    
    def count_less_equal(x):
        count, j = 0, len(matrix) - 1
        for row in matrix:
            while j >= 0 and row[j] > x:
                j -= 1
            count += j + 1
        return count
    
    while lo < hi:
        mid = (lo + hi) // 2
        if count_less_equal(mid) < k:
            lo = mid + 1
        else:
            hi = mid
    return lo
```

---

## 🧠 Consejo mental

> Si no necesitás ordenar todo, **QuickSelect** o un **heap limitado** son más eficientes que `sort()`.

---
