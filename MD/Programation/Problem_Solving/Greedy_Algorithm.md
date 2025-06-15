# 🦅 Greedy Algorithm (Algoritmos Codiciosos)

## 💡 ¿Qué es?

Una estrategia algorítmica donde en cada paso **se elige la mejor opción local inmediata**, con la esperanza de que eso lleve a una **solución óptima global**.

> "Tomá lo mejor ahora, sin mirar al futuro".

---

## 🧠 Idea clave

- Se toma una **decisión óptima en el momento**, sin volver atrás ni considerar múltiples caminos.
- No garantiza la mejor solución en todos los problemas, pero **cuando funciona**, suele ser la forma más rápida y simple.

---

## 📦 Cuándo usarlo

Usalo cuando:
- El problema tiene **estructura óptima local** que conduce a una solución global óptima (**greedy choice property**).
- Tiene **subestructura óptima** (un subproblema puede resolverse como el problema completo).
- Quieren minimizar/maximizar una cantidad (tiempo, dinero, peso, costo, etc.).

---

## ✅ Ejemplos famosos

| Problema                                | Funciona Greedy |
|-----------------------------------------|-----------------|
| Cambio de monedas (solo si es canónico) | ✅ A veces       |
| Actividades que no se superpongan       | ✅ Sí            |
| Huffman coding                          | ✅ Sí            |
| Kruskal's algorithm (mínimo árbol)      | ✅ Sí            |
| Dijkstra (sin pesos negativos)          | ✅ Sí            |
| Problema del viajante (TSP)             | ❌ No (en general) |

---

## 📌 Ejemplo clásico: Actividades sin superposición

```python
# Dadas actividades con inicio y fin, maximizar la cantidad de actividades sin superposición
activities = [(1, 3), (2, 5), (4, 6), (7, 9)]

def max_activities(activities):
    activities.sort(key=lambda x: x[1])  # Ordenar por tiempo de finalización
    count = 0
    last_end = 0

    for start, end in activities:
        if start >= last_end:
            count += 1
            last_end = end

    return count
```

---

## 📈 Complejidad típica

- Tiempo: depende del problema, muchas veces `O(n log n)` si requiere ordenamiento.
- Espacio: usualmente `O(1)` o `O(n)`.

---

## 🧨 Precauciones

- A veces **no funciona**. Si el problema necesita explorar todas las posibilidades (backtracking/dp), greedy puede fallar.
- Hay que **probar que cumple las propiedades**:
  - **Greedy Choice Property**: la mejor elección local lleva a la global.
  - **Optimal Substructure**: los subproblemas también tienen soluciones óptimas dentro de la solución general.

---

## 🔥 Tip final

Cuando te pidan **minimizar** o **maximizar** algo rápidamente sin reexplorar decisiones… **pensá Greedy primero**.  
Si no funciona, ahí sí pasás a DP o backtracking.

---
