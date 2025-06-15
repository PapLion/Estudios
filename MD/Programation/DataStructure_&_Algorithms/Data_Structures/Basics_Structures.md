# 📚 Estructuras de Datos Básicas en Python

---

## 📦 Array (Arreglo)

### Descripción
Un **array** es una colección de elementos ordenados que se acceden por índice. En Python, las listas (`list`) cumplen este rol.

### Ventajas
- Acceso por índice en tiempo constante: `O(1)`
- Soporta cualquier tipo de dato

### Desventajas
- Costoso insertar/eliminar en el medio: `O(n)`
- Espacio contiguo en memoria

### Ejemplo en Python

```python
arr = [10, 20, 30]
arr.append(40)     # Agrega al final
arr.insert(1, 15)  # Inserta en índice 1
arr.pop()          # Elimina el último
print(arr[2])      # Acceso por índice
```

---

## 🔗 Linked List (Lista enlazada)

### Descripción
Una **lista enlazada** es una secuencia de nodos donde cada nodo apunta al siguiente.

### Ventajas
- Inserciones/eliminaciones eficientes en los extremos: `O(1)`
- No requiere espacio contiguo

### Desventajas
- Acceso por índice es lento: `O(n)`
- Más uso de memoria por los punteros

### Ejemplo en Python

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        curr = self.head
        while curr.next:
            curr = curr.next
        curr.next = new_node
```

---

## 🎢 Queue (Cola)

### Descripción
Una **cola** es una estructura FIFO (First In, First Out).

### Ventajas
- Orden natural de procesamiento
- Eficiente para sistemas de espera o tareas

### Desventajas
- Inserciones solo al final y eliminaciones solo al frente

### Ejemplo en Python (usando `collections.deque`)

```python
from collections import deque

cola = deque()
cola.append('A')  # Entra A
cola.append('B')  # Entra B
print(cola.popleft())  # Sale A
```

---

## 🥞 Stack (Pila)

### Descripción
Una **pila** es una estructura LIFO (Last In, First Out).

### Ventajas
- Ideal para control de flujo (como llamadas de función, deshacer)

### Desventajas
- Solo se accede al elemento superior

### Ejemplo en Python (usando lista)

```python
pila = []
pila.append(1)
pila.append(2)
pila.append(3)
print(pila.pop())  # Sale 3
```

---

## 🧠 Hash Table (Tabla hash / Diccionario)

### Descripción
Una **tabla hash** almacena pares clave-valor y permite acceso eficiente por clave.

### Ventajas
- Acceso e inserción promedio en `O(1)`
- Muy útil para búsquedas rápidas

### Desventajas
- Colisiones pueden afectar rendimiento
- Uso de memoria más alto

### Ejemplo en Python

```python
tabla = {'nombre': 'Ana', 'edad': 25}
tabla['pais'] = 'Ecuador'
print(tabla['nombre'])  # Ana
del tabla['edad']       # Eliminar clave
```

---
