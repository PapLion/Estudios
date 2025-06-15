# 🏗️ Clase: Minimum Spanning Tree (MST)

Un **Minimum Spanning Tree (MST)** es un subconjunto de aristas de un grafo que conecta **todos los nodos**, sin ciclos, y con el **costo total mínimo**.

---

## 🧠 ¿Para qué se usa?

- Construcción de redes (eléctricas, carreteras, internet)
- Compresión de datos
- Diseño de circuitos
- Juegos y simulaciones de mapas

---

## 📘 Requisitos Previos

- Grafos ponderados
- Representación con listas de adyacencia o listas de aristas
- Uso de estructuras como colas de prioridad o conjuntos disjuntos (union-find)

---

## 📐 1. Prim's Algorithm (Usa estructuras tipo heap)

- Comienza desde un nodo y expande la MST seleccionando la **arista de menor peso** que conecta un nodo dentro de la MST con uno fuera.
- Usa un **heap (priority queue)** para encontrar rápidamente el nodo más barato.

### ✅ Python - Prim’s Algorithm

```python
import heapq
from collections import defaultdict

def prim(graph, start):
    visited = set()
    min_heap = [(0, start)]
    total_cost = 0

    while min_heap:
        cost, node = heapq.heappop(min_heap)
        if node in visited:
            continue

        visited.add(node)
        total_cost += cost
        print(f"Añadiendo nodo {node} con costo {cost}")

        for neighbor, weight in graph[node]:
            if neighbor not in visited:
                heapq.heappush(min_heap, (weight, neighbor))

    print(f"Costo total del MST: {total_cost}")

# Grafo como lista de adyacencia
graph = {
    'A': [('B', 1), ('D', 3)],
    'B': [('A', 1), ('D', 4), ('C', 2)],
    'C': [('B', 2), ('D', 5)],
    'D': [('A', 3), ('B', 4), ('C', 5)]
}

prim(graph, 'A')
```

---

## 🔗 2. Kruskal's Algorithm (Usa conjuntos disjuntos)

- Ordena **todas las aristas** por peso.
- Añade aristas al MST si **no forman ciclos** (usando union-find).
- Más eficiente en grafos dispersos.

### ✅ Python - Kruskal’s Algorithm

```python
class UnionFind:
    def __init__(self, vertices):
        self.parent = {v: v for v in vertices}

    def find(self, node):
        if self.parent[node] != node:
            self.parent[node] = self.find(self.parent[node])  # Path compression
        return self.parent[node]

    def union(self, u, v):
        root_u = self.find(u)
        root_v = self.find(v)
        if root_u != root_v:
            self.parent[root_v] = root_u
            return True
        return False

def kruskal(edges, vertices):
    uf = UnionFind(vertices)
    mst = []
    total_cost = 0

    # Ordenar aristas por peso
    edges.sort(key=lambda x: x[2])

    for u, v, weight in edges:
        if uf.union(u, v):
            mst.append((u, v, weight))
            total_cost += weight
            print(f"Añadiendo arista ({u}-{v}) con peso {weight}")

    print(f"Costo total del MST: {total_cost}")
    return mst

# Lista de aristas (u, v, peso)
edges = [
    ('A', 'B', 1),
    ('A', 'D', 3),
    ('B', 'C', 2),
    ('B', 'D', 4),
    ('C', 'D', 5)
]
vertices = ['A', 'B', 'C', 'D']

kruskal(edges, vertices)
```

---

## 📝 Comparación Rápida

| Algoritmo  | Ideal Para...       | Estructura | Complejidad        |
|------------|---------------------|------------|-------
