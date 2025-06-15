# 🧠 Estructuras de Datos Complejas en Python

---

## 🌲 Árbol 2-3 (2-3 Tree)

### Descripción
Un **árbol 2-3** es un árbol de búsqueda balanceado donde cada nodo puede tener:
- 1 dato y 2 hijos (nodo 2)
- 2 datos y 3 hijos (nodo 3)

### Propiedades
- Siempre balanceado
- Altura mínima garantizada
- Inserción/eliminación con redistribución o fusión

### Aplicaciones
- Fundamento para árboles B
- Ideal para búsqueda eficiente con balance automático

> ⚠️ Complejo de implementar. En Python se usa más como teoría base.

---

## 🌳 Árbol B y B+ (B-Tree y B+ Tree)

### 📘 B-Tree

#### Descripción
Un **B-Tree** es un árbol m-ario balanceado usado principalmente en bases de datos y sistemas de archivos.

#### Características
- Cada nodo puede tener múltiples claves
- Todas las hojas están a la misma profundidad
- Inserción/borrado sin rebalanceo costoso

```python
class BTreeNode:
    def __init__(self, t, leaf=False):
        self.t = t  # grado mínimo
        self.leaf = leaf
        self.keys = []
        self.children = []
```

---

### 📗 B+ Tree

#### Descripción
Un **B+ Tree** es una extensión del B-Tree donde:
- Las claves **solo se almacenan en las hojas**
- Las hojas están **enlazadas** para recorrido secuencial eficiente

#### Ventajas
- Búsqueda y recorrido más rápidos
- Ideal para índices en bases de datos

#### Diferencias clave vs B-Tree
- Internos solo dirigen el camino
- Todas las claves están en hojas, ordenadas y encadenadas

> ⚠️ Más complejo, pero dominante en sistemas como SQL.

---

## 🪜 Skip List

### Descripción
Una **Skip List** es una estructura probabilística que permite buscar, insertar y eliminar en tiempo esperado `O(log n)` usando múltiples niveles de listas enlazadas.

### Ventajas
- Simpler de implementar que árboles balanceados
- Excelente rendimiento promedio

### Desventajas
- Uso extra de espacio
- Rendimiento no garantizado (pero bueno en práctica)

### Ejemplo básico en Python

```python
import random

class Node:
    def __init__(self, key, level):
        self.key = key
        self.forward = [None] * (level + 1)

class SkipList:
    def __init__(self, max_level=4, p=0.5):
        self.max_level = max_level
        self.p = p
        self.header = Node(None, self.max_level)
        self.level = 0

    def random_level(self):
        lvl = 0
        while random.random() < self.p and lvl < self.max_level:
            lvl += 1
        return lvl
```

---

## 🗂️ ISAM (Indexed Sequential Access Method)

### Descripción
**ISAM** es una estructura de índice utilizada en almacenamiento secuencial con acceso indexado.

### Estructura
- **Índice estático**: construido inicialmente y no cambia dinámicamente
- **Datos secuenciales**: organizados en bloques con punteros

### Ventajas
- Acceso rápido a bloques de datos
- Rendimiento estable para consultas frecuentes

### Desventajas
- Poco eficiente para inserciones dinámicas
- Requiere reorganización periódica

### Aplicaciones
- Sistemas de archivos antiguos
- Bases de datos de solo lectura o con pocos cambios

> ISAM es más un diseño de almacenamiento que una estructura implementada en RAM.

---

¿Quieres que te prepare también explicaciones similares para **Tries**, **Suffix Trees**, **Segment Trees**, **Fenwick Trees (BIT)** o estructuras de algoritmos como **Union-Find**?
