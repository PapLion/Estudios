# 📘 Clase: Algoritmos de Búsqueda en Python

En esta clase veremos varios algoritmos de búsqueda fundamentales, incluyendo explicaciones y ejemplos prácticos en Python. Los algoritmos se dividen en dos grupos principales: para **listas**, **grafos** y **árboles**.

---

## 🔎 1. Binary Search (Búsqueda Binaria)

- Se aplica sobre **listas ordenadas**.
- Divide el espacio de búsqueda a la mitad en cada paso.
- Tiempo de ejecución: **O(log n)**

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        print(f"Buscando entre {arr[left:right+1]}, medio: {arr[mid]}")
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# Ejemplo
arr = [1, 3, 5, 7, 9, 11]
target = 7
print("Resultado:", binary_search(arr, target))
```

---

## 🔎 2. Linear Search (Búsqueda Lineal)

- Recorre todos los elementos uno a uno.
- No necesita que la lista esté ordenada.
- Tiempo de ejecución: **O(n)**

```python
def linear_search(arr, target):
    for i, value in enumerate(arr):
        print(f"Revisando índice {i}, valor: {value}")
        if value == target:
            return i
    return -1

# Ejemplo
arr = [4, 2, 9, 7, 5]
target = 7
print("Resultado:", linear_search(arr, target))
```

---

## 🌐 3. Breadth First Search (BFS) en Grafos

- Recorre el grafo **por niveles**.
- Usa una **cola** (`queue`).
- Tiempo de ejecución: **O(V + E)** (vértices + aristas)

```python
from collections import deque

def bfs_graph(graph, start):
    visited = set()
    queue = deque([start])
    
    while queue:
        node = queue.popleft()
        if node not in visited:
            print(f"Visitando: {node}")
            visited.add(node)
            queue.extend(neighbor for neighbor in graph[node] if neighbor not in visited)
    return visited

# Ejemplo
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': [],
    'F': []
}
bfs_graph(graph, 'A')
```

---

## 🌐 4. Depth First Search (DFS) en Grafos

- Recorre el grafo **profundamente antes de retroceder**.
- Usa una **pila** (stack) o recursión.
- Tiempo de ejecución: **O(V + E)**

```python
def dfs_graph(graph, start, visited=None):
    if visited is None:
        visited = set()
    print(f"Visitando: {start}")
    visited.add(start)
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs_graph(graph, neighbor, visited)
    return visited

# Ejemplo
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': [],
    'F': []
}
dfs_graph(graph, 'A')
```

---

## 🌳 5. Breadth First Search (BFS) en Árboles

- Recorre **nivel por nivel** como en los grafos, pero más simple.
- Usa una **cola** (`queue`).

```python
from collections import deque

class Node:
    def __init__(self, value):
        self.value = value
        self.children = []

def bfs_tree(root):
    queue = deque([root])
    
    while queue:
        node = queue.popleft()
        print(f"Visitando: {node.value}")
        for child in node.children:
            queue.append(child)

# Ejemplo
root = Node('A')
root.children = [Node('B'), Node('C')]
root.children[0].children = [Node('D'), Node('E')]
root.children[1].children = [Node('F')]

bfs_tree(root)
```

---

## 🌳 6. Depth First Search (DFS) en Árboles

- Va hasta el fondo de cada rama antes de retroceder.
- Usa **recursión**.

```python
def dfs_tree(node):
    if node is None:
        return
    print(f"Visitando: {node.value}")
    for child in node.children:
        dfs_tree(child)

# Reutilizamos el mismo árbol del ejemplo anterior
dfs_tree(root)
```

---

¿Preguntas o quieres que pasemos a algoritmos como Dijkstra, A* o búsqueda en profundidad limitada? 🚀
