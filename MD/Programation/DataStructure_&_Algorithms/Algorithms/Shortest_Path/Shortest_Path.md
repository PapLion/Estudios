# 🚀 Clase: Algoritmos de Caminos Más Cortos (Shortest Path)

Estos algoritmos encuentran la distancia más corta entre dos nodos en un grafo. Se usan en mapas, redes, IA, videojuegos, y más.

---

## 📍 1. Dijkstra’s Algorithm

- Usa una cola de prioridad (heap) para explorar el camino más corto desde un nodo inicial.
- Funciona **solo con pesos positivos**.
- Complejidad: **O((V + E) log V)** con heap.

```python
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]  # (distancia, nodo)
    
    while pq:
        current_distance, current_node = heapq.heappop(pq)
        
        for neighbor, weight in graph[current_node]:
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances

# Ejemplo de grafo
graph = {
    'A': [('B', 1), ('C', 4)],
    'B': [('C', 2), ('D', 5)],
    'C': [('D', 1)],
    'D': []
}

print("Distancias desde A:", dijkstra(graph, 'A'))
```

---

## 💡 2. Bellman-Ford Algorithm

- Soporta **pesos negativos**.
- Detecta ciclos negativos.
- Complejidad: **O(V * E)**

```python
def bellman_ford(graph, V, start):
    distances = {v: float('inf') for v in range(V)}
    distances[start] = 0

    for _ in range(V - 1):
        for u, v, weight in graph:
            if distances[u] + weight < distances[v]:
                distances[v] = distances[u] + weight

    # Detección de ciclos negativos
    for u, v, weight in graph:
        if distances[u] + weight < distances[v]:
            print("¡Ciclo negativo detectado!")
            return None

    return distances

# Lista de aristas (u, v, peso)
edges = [
    (0, 1, 4),
    (0, 2, 5),
    (1, 2, -3),
    (2, 3, 4)
]

print("Distancias desde 0:", bellman_ford(edges, 4, 0))
```

---

## 🌟 3. A* (A-Star) Algorithm

- Usa heurística para **encontrar el camino más corto más rápidamente**.
- Muy usado en videojuegos y mapas.
- Complejidad: **O(E)** con una buena heurística.

```python
import heapq
import math

def heuristic(a, b):
    # Distancia Euclidiana
    return math.sqrt((a[0]-b[0])**2 + (a[1]-b[1])**2)

def a_star(graph, start, goal, coords):
    open_set = [(0, start)]
    came_from = {}
    g_score = {node: float('inf') for node in graph}
    g_score[start] = 0
    
    f_score = {node: float('inf') for node in graph}
    f_score[start] = heuristic(coords[start], coords[goal])
    
    while open_set:
        _, current = heapq.heappop(open_set)
        
        if current == goal:
            path = []
            while current in came_from:
                path.append(current)
                current = came_from[current]
            path.append(start)
            return path[::-1]
        
        for neighbor, cost in graph[current]:
            tentative_g = g_score[current] + cost
            if tentative_g < g_score[neighbor]:
                came_from[neighbor] = current
                g_score[neighbor] = tentative_g
                f_score[neighbor] = tentative_g + heuristic(coords[neighbor], coords[goal])
                heapq.heappush(open_set, (f_score[neighbor], neighbor))
    
    return None

# Grafo con coordenadas para heurística
graph = {
    'A': [('B', 1.5), ('C', 2)],
    'B': [('D', 2)],
    'C': [('D', 1)],
    'D': []
}

coords = {
    'A': (0, 0),
    'B': (1, 1),
    'C': (1, 0),
    'D': (2, 0)
}

print("Camino A* de A a D:", a_star(graph, 'A', 'D', coords))
```

---

## 📝 Comparación de Algoritmos

| Algoritmo      | Soporta Pesos Negativos | Detecta Ciclos Negativos | Heurística | Complejidad        |
|----------------|--------------------------|---------------------------|------------|--------------------|
| Dijkstra       | ❌ No                    | ❌ No                    | ❌ No      | O((V + E) log V)   |
| Bellman-Ford   | ✅ Sí                    | ✅ Sí                    | ❌ No      | O(V * E)           |
| A*             | ❌ No (usualmente)       | ❌ No                    | ✅ Sí      | O(E) (si es bueno) |

---

¿Quieres que la próxima clase sea sobre **algoritmos de búsqueda de caminos en laberintos**, **backtracking**, o estructuras como **árboles, pilas, colas, heaps**?
