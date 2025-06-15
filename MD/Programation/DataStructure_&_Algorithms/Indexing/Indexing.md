# 🗂️ Indexing: Linear vs Tree-Based

El **indexing** es una técnica que permite **acceder a datos de manera eficiente** sin escanear todos los elementos. Se usa mucho en bases de datos, sistemas de archivos y estructuras de datos.

---

## 1️⃣ Indexado Lineal (Linear Indexing)

### 🔍 ¿Qué es?
- El índice es una **lista ordenada o secuencial**.
- Cada entrada del índice apunta directamente al dato.

### 📦 Ejemplo clásico: Arrays

```python
arr = [10, 20, 30, 40, 50]
print(arr[2])  # Acceso directo O(1)
```

### 🧠 Concepto
- El índice **coincide con la posición** (offset).
- Muy eficiente si el acceso es **secuencial o directo**.

### 🛠️ En archivos
Un archivo de texto puede tener un índice como:
```
Índice: [0, 100, 200, 300] → cada número es el byte inicial de cada bloque de datos
```

### ✅ Ventajas
- Rápido con datos ordenados o de tamaño fijo
- Implementación simple

### ❌ Desventajas
- Escaneo completo en búsquedas no directas
- No se adapta bien a inserciones o datos variables

---

## 🌳 Indexado Basado en Árboles (Tree-Based Indexing)

### 🔍 ¿Qué es?
- Se usa una **estructura jerárquica** (como árboles) para organizar claves de forma que se pueda **buscar, insertar y eliminar rápidamente**.

---

### 📘 Ejemplo: Binary Search Tree (BST)

```python
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

# BST: [10, 5, 15]
```

- Permite buscar claves con **O(log n)** (si está balanceado)

---

### 📗 Ejemplo: B-Trees y B+ Trees (en bases de datos)

- Usado en sistemas de almacenamiento (como MySQL, SQLite, etc.)
- Cada nodo puede contener **muchas claves**
- Acceso en disco es minimizado

```
Nivel 1: [10, 20, 30]
         /   |    \
Nivel 2: ... ...  ...
```

---

### 📈 Ventajas
- Rápido para **rango de búsquedas** (`>=`, `<=`)
- Soporta inserciones y eliminaciones dinámicas
- Escala bien con grandes volúmenes de datos

### 📉 Desventajas
- Más complejidad de implementación
- Puede usar más memoria

---

## 🧮 Comparación Rápida

| Característica      | Linear Indexing     | Tree-Based Indexing   |
|---------------------|---------------------|------------------------|
| Acceso secuencial    | Muy rápido (O(1))   | O(log n) (si es BST)   |
| Búsqueda general     | O(n)                | O(log n)               |
| Inserción/Eliminación| Costoso             | Rápido en estructuras balanceadas |
| Flexibilidad         | Baja                | Alta                   |
| Uso común            | Arrays, archivos planos | Bases de datos, grandes volúmenes |

---

## ✅ ¿Cuándo usar cada uno?

- **Linear Indexing**: cuando el acceso es directo y los datos son estáticos.
- **Tree-Based Indexing**: cuando necesitas búsquedas rápidas, datos dinámicos o acceso por rango.

---

¿Quieres que lo extienda a hashing-based indexing, o una visualización gráfica de un árbol B o B+?
