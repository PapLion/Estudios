# 🌳 Clase: Tree Traversal (Recorridos en Árboles)

Los algoritmos de recorrido en árboles permiten visitar todos los nodos de una estructura de árbol en un orden específico. Son fundamentales en estructuras de datos, inteligencia artificial, compiladores, y más.

---

## 🧠 ¿Qué es un recorrido de árbol?

Es una forma de visitar todos los nodos de un árbol de manera **sistemática**.

Hay dos categorías principales:
- **DFS (Depth-First Search)**:
  - In-order
  - Pre-order
  - Post-order
- **BFS (Breadth-First Search)** (lo veremos en otra clase)

---

## 🌿 Árbol de ejemplo

Considera este árbol binario para todos los recorridos:

```
       A
      / \
     B   C
    / \   \
   D   E   F
```

Representado en código:

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Crear el árbol
root = Node('A')
root.left = Node('B')
root.right = Node('C')
root.left.left = Node('D')
root.left.right = Node('E')
root.right.right = Node('F')
```

---

## 🔁 1. In-order Traversal (Izquierda → Raíz → Derecha)

- Se usa comúnmente en árboles binarios de búsqueda (BST) para obtener elementos ordenados.
- Visita: `D → B → E → A → C → F`

```python
def in_order(node):
    if node:
        in_order(node.left)
        print(node.value, end=' '),
        in_order(node.right)

print("In-order traversal:")
in_order(root)
```

---

## 🔁 2. Pre-order Traversal (Raíz → Izquierda → Derecha)

- Útil para copiar árboles o serializarlos.
- Visita: `A → B → D → E → C → F`

```python
def pre_order(node):
    if node:
        print(node.value, end=' '),
        pre_order(node.left)
        pre_order(node.right)

print("\nPre-order traversal:")
pre_order(root)
```

---

## 🔁 3. Post-order Traversal (Izquierda → Derecha → Raíz)

- Se usa en liberación de memoria o cálculo de expresiones.
- Visita: `D → E → B → F → C → A`

```python
def post_order(node):
    if node:
        post_order(node.left)
        post_order(node.right)
        print(node.value, end=' ')

print("\nPost-order traversal:")
post_order(root)
```

---

## 📝 Comparación Rápida

| Tipo       | Orden de Visita        | Uso Común                           |
|------------|------------------------|-------------------------------------|
| In-order   | Izq → Raíz → Der       | Obtener datos ordenados (BST)       |
| Pre-order  | Raíz → Izq → Der       | Serializar/copiar árboles           |
| Post-order | Izq → Der → Raíz       | Borrar o evaluar árboles de expresión |

---

¿Te gustaría que en la siguiente clase veamos **Breadth-First Search (BFS) en árboles** o avanzamos con **Minimum Spanning Tree (Prim y Kruskal)**?
