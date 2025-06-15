# 🧩 Merge Intervals

## 💡 ¿Qué es?

Técnica para combinar intervalos que se solapan, muy útil en problemas de ranges, horarios, eventos, segmentos, etc.

---

## 📦 ¿Cuándo usarlo?

- Reservas de tiempo
- Rangos de IP
- Segmentos de memoria
- Problemas de cobertura

---

## ⚙️ Algoritmo

1. Ordenar los intervalos por inicio
2. Comparar cada intervalo con el anterior (o último en lista final)
3. Si se superponen, los combinás
4. Si no, lo agregás como uno nuevo

---

## ✅ Ejemplo

```python
def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []

    for interval in intervals:
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            merged[-1][1] = max(merged[-1][1], interval[1])
    
    return merged
```

---

## ⏱ Complejidad

- Tiempo: `O(n log n)` por el sort
- Espacio: `O(n)` en el peor caso

---

## 🧠 Consejo mental

> Si ves pares `(start, end)` y te piden **comprimir o eliminar solapamientos**, esto es **merge intervals**.

---
