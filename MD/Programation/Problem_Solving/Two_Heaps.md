# ⚖️ Two Heaps Pattern

## 💡 ¿Qué es?

Una técnica para mantener dinámicamente **medianas** o **dividir datos en mitades balanceadas** usando dos heaps:
- Un **Max-Heap** para la mitad inferior.
- Un **Min-Heap** para la mitad superior.

---

## 📦 ¿Cuándo usarlo?

- Calcular la **mediana de un stream** de números.
- Balancear dinámicamente un conjunto.
- Separar datos en “menores que” y “mayores que”.

---

## ⚙️ Ejemplo: Mediana en stream

```python
import heapq

class MedianFinder:
    def __init__(self):
        self.small = []  # Max-heap (invertido)
        self.large = []  # Min-heap

    def add_num(self, num):
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))
        
        if len(self.small) < len(self.large):
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def find_median(self):
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2
```

---

## ⏱ Complejidad

- Inserción: `O(log n)`
- Mediana: `O(1)`

---

## 🧠 Consejo mental

> Si necesitás mantener **la mediana en tiempo real**, pensá en **dos heaps** para balancear mitades.
