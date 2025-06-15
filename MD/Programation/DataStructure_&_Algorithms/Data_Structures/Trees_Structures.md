# 🌳 Estructuras de Árbol en Python

---

## 🌿 Árbol Binario (Binary Tree)

### Descripción
Un **árbol binario** es una estructura donde cada nodo tiene como máximo dos hijos: izquierdo y derecho.

### Ventajas
- Útil como base para estructuras más complejas (BST, AVL, etc.)
- Facilita representación jerárquica

### Desventajas
- No garantiza orden ni eficiencia de búsqueda

### Ejemplo en Python

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
```

---

## 🔍 Árbol Binario de Búsqueda (Binary Search Tree - BST)

### Descripción
Un **BST** es un árbol binario con la propiedad:
- Todos los nodos del subárbol izquierdo son menores
- Todos los del subárbol derecho son mayores

### Ventajas
- Búsqueda, inserción y eliminación en `O(log n)` en promedio

### Desventajas
- Puede desbalancearse (y volverse lineal `O(n)`)

### Ejemplo en Python

```python
class BST:
    def __init__(self):
        self.root = None
    
    def insert(self, root, key):
        if not root:
            return Node(key)
        if key < root.data:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)
        return root
```

---

## ⚖️ AVL Tree

### Descripción
Un **AVL Tree** es un BST auto-balanceado que mantiene la diferencia de altura entre subárboles en `[-1, 0, 1]`.

### Ventajas
- Búsqueda, inserción y eliminación siempre en `O(log n)`
- Evita el peor caso del BST

### Desventajas
- Más complejo de implementar
- Rotaciones adicionales al insertar/eliminar

### Ejemplo simplificado de rotación derecha

```python
def rightRotate(y):
    x = y.left
    T2 = x.right

    x.right = y
    y.left = T2

    return x
```

---

## 🌲 B-Tree

### Descripción
Un **B-Tree** es un árbol auto-balanceado generalizado con múltiples hijos por nodo. Ideal para bases de datos y sistemas de archivos.

### Propiedades clave
- Cada nodo puede tener más de dos hijos
- Mantiene los datos ordenados y balanceados

### Ventajas
- Muy eficiente en lectura/escritura de disco
- Uso óptimo de espacio y tiempo en estructuras grandes

### Desventajas
- Complejo de implementar

### Ejemplo básico de nodo

```python
class BTreeNode:
    def __init__(self, t, leaf=False):
        self.t = t  # grado mínimo
        self.leaf = leaf
        self.keys = []
        self.children = []
```

---

## 🧱 Heap

### Descripción
Un **heap** es un árbol binario completo con una propiedad especial:
- **Min-heap**: cada nodo ≤ sus hijos
- **Max-heap**: cada nodo ≥ sus hijos

### Ventajas
- Acceso al elemento mínimo/máximo en `O(1)`
- Inserción y eliminación en `O(log n)`

### Desventajas
- No sirve para búsquedas arbitrarias eficientes

### Ejemplo en Python (min-heap usando `heapq`)

```python
import heapq

heap = []
heapq.heappush(heap, 5)
heapq.heappush(heap, 3)
heapq.heappush(heap, 8)
print(heapq.heappop(heap))  # Sale 3 (mínimo)
```

---

¿Quieres que continuemos con **Grafos**, **Tries**, **Segment Trees**, **Fenwick Trees** o alguna otra estructura específica?
