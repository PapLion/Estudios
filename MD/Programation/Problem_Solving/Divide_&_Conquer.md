# ⚔️ Divide y Vencerás — en detalle

## 🧠 ¿Qué es?
Es una estrategia algorítmica que consiste en **dividir un problema grande en partes más pequeñas del mismo tipo**, resolverlas por separado (usualmente de forma **recursiva**) y luego **combinar los resultados**.

---

## 🔁 Etapas del método

1. **Dividir (Divide):**  
   Separar el problema en subproblemas similares.

2. **Conquistar (Conquer):**  
   Resolver cada subproblema de forma recursiva o directa.

3. **Combinar (Combine):**  
   Unir los resultados parciales en una solución completa.

---

## ✅ Cuándo usarlo

Usalo si:
- El problema puede **dividirse naturalmente**.
- La **combinación de subresultados** es más fácil que resolver todo junto.
- Hay **estructura recursiva o jerárquica** (árboles, listas, decisiones binarias).

---

## 📦 Ejemplo: Merge Sort

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(a, b):
    result = []
    i = j = 0
    while i < len(a) and j < len(b):
        if a[i] < b[j]:
            result.append(a[i])
            i += 1
        else:
            result.append(b[j])
            j += 1
    result += a[i:]
    result += b[j:]
    return result
```

---

## 📊 Complejidad

- Tiempo: `O(n log n)`
- Espacio: `O(n)`

---

## 🧠 Ejemplos clásicos

| Problema                   | Divide                            | Combina                            |
|----------------------------|------------------------------------|------------------------------------|
| Binary Search              | Mitad del array                    | Elegir izquierda/derecha           |
| Quick Sort                 | Menores/pivote/mayores             | Concatenar                         |
| Strassen Matrix Mult.      | Subdividir matrices grandes        | Fórmulas para combinar             |
| Karatsuba Multiplicación   | Mitades de números grandes         | Fórmula específica                 |

---

## 🔥 Ventaja oculta

Paralelización: los subproblemas pueden resolverse **en paralelo**.

---
