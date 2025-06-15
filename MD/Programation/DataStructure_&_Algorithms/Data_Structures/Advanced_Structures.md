# 🧠 Estructuras de Datos Avanzadas en Python

---

## 🔡 Trie (Árbol de Prefijos)

### Descripción
Un **Trie** es un árbol donde cada nodo representa un carácter. Se usa para almacenar cadenas eficientemente por sus prefijos.

### Ventajas
- Búsqueda de palabras y prefijos en `O(m)` (`m` = longitud de la palabra)
- Memoria eficiente si hay muchos prefijos comunes

### Ejemplo en Python

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            node = node.children.setdefault(char, TrieNode())
        node.is_end = True

    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end
```

---

## 📐 Segment Tree

### Descripción
Un **Segment Tree** es una estructura de árbol binario que permite realizar **consultas de rango** (como sumas, mínimos, etc.) y **actualizaciones** eficientes.

### Complejidad
- Construcción: `O(n)`
- Consulta/Actualización: `O(log n)`

### Ejemplo en Python (suma de rangos)

```python
class SegmentTree:
    def __init__(self, data):
        self.n = len(data)
        self.tree = [0] * (2 * self.n)
        for i in range(self.n):
            self.tree[self.n + i] = data[i]
        for i in range(self.n - 1, 0, -1):
            self.tree[i] = self.tree[2*i] + self.tree[2*i + 1]

    def query(self, l, r):  # suma en [l, r)
        l += self.n
        r += self.n
        res = 0
        while l < r:
            if l % 2:
                res += self.tree[l]
                l += 1
            if r % 2:
                r -= 1
                res += self.tree[r]
            l //= 2
            r //= 2
        return res
```

---

## 📊 Fenwick Tree (Binary Indexed Tree)

### Descripción
Un **Fenwick Tree** o **BIT** es una estructura eficiente para realizar **sumas prefix** y **actualizaciones**.

### Complejidad
- Consulta/Actualización: `O(log n)`
- Construcción: `O(n log n)`

### Ejemplo en Python

```python
class FenwickTree:
    def __init__(self, size):
        self.tree = [0] * (size + 1)

    def update(self, i, delta):
        while i < len(self.tree):
            self.tree[i] += delta
            i += i & -i

    def query(self, i):
        res = 0
        while i > 0:
            res += self.tree[i]
            i -= i & -i
        return res
```

---

## 🔗 Disjoint Set (Union-Find)

### Descripción
Una estructura para representar conjuntos disjuntos, útil en **algoritmos de grafos** como Kruskal.

### Operaciones clave
- `find(x)`: devuelve el representante del conjunto de `x`
- `union(x, y)`: une los conjuntos que contienen a `x` e `y`

### Optimización
- **Path compression** y **union by rank** hacen que las operaciones sean casi `O(1)` amortizado.

### Ejemplo en Python

```python
class DisjointSet:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # path compression
        return self.parent[x]

    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry:
            return
        if self.rank[rx] < self.rank[ry]:
            self.parent[rx] = ry
        else:
            self.parent[ry] = rx
            if self.rank[rx] == self.rank[ry]:
                self.rank[rx] += 1
```

---

## 🌿 Suffix Tree

### Descripción
Un **Suffix Tree** es un trie compacto que contiene todos los sufijos de una cadena.

### Ventajas
- Búsqueda de patrones en `O(m)`
- Usado en bioinformática, compresión, string matching

### Desventajas
- Difícil de implementar
- Requiere mucho espacio (aunque lineal)

> ⚠️ No se suele implementar desde cero. Se construye en `O(n)` usando Ukkonen’s algorithm (complejo).

---

## 📏 Suffix Array

### Descripción
Un **Suffix Array** es un arreglo que contiene los índices de los sufijos ordenados lexicográficamente.

### Ventajas
- Menos espacio que Suffix Tree
- Se puede usar junto con LCP array para búsquedas eficientes

### Ejemplo en Python

```python
def build_suffix_array(s):
    return sorted(range(len(s)), key=lambda i: s[i:])

# Ejemplo
s = "banana"
print(build_suffix_array(s))  # [5, 3, 1, 0, 4, 2]
```

---

¿Te gustaría que ahora prepare resúmenes o visualizaciones de estas es
