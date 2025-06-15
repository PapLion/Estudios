# ⏱️ Complejidades de Tiempo Comunes (Big-O)

Las complejidades de tiempo miden cómo crece el tiempo de ejecución de un algoritmo conforme crece la entrada `n`.

---

## 🟢 **O(1) — Tiempo Constante**

### Significado
El tiempo de ejecución no depende del tamaño de la entrada.

### Ejemplo
```python
def get_first_element(arr):
    return arr[0]
```

### Características
- Súper eficiente
- Usualmente operaciones sobre índices o variables

---

## 🟡 **O(log n) — Tiempo Logarítmico**

### Significado
Cada paso reduce el tamaño del problema a la mitad.

### Ejemplo
```python
def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

### Características
- Muy eficiente para grandes volúmenes de datos
- Usado en estructuras balanceadas como árboles o búsquedas binarias

---

## 🟠 **O(n) — Tiempo Lineal**

### Significado
El tiempo crece proporcionalmente al tamaño de la entrada.

### Ejemplo
```python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
```

### Características
- Escalable, pero puede ser lento con millones de elementos

---

## 🔵 **O(n log n) — Tiempo Log-Lineal**

### Significado
Mezcla lo lineal y lo logarítmico (dividir y conquistar).

### Ejemplo
```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)
```

### Características
- Mejor tiempo posible para algoritmos de comparación de ordenamiento

---

## 🔴 **O(n²), O(n³), etc. — Tiempo Polinomial**

### Significado
El tiempo crece con una potencia del tamaño de entrada.

### Ejemplo
```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
```

### Características
- Común en algoritmos de fuerza bruta
- No escalable para grandes `n`

---

## 🔥 **O(2ⁿ) — Tiempo Exponencial**

### Significado
El tiempo se **duplica** con cada unidad adicional de entrada.

### Ejemplo
```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)
```

### Características
- Inviable para entradas grandes
- Usado en backtracking, problemas NP-completos

---

## 💀 **O(n!) — Tiempo Factorial**

### Significado
El tiempo de ejecución es proporcional al factorial del tamaño de entrada.

### Ejemplo
```python
import itertools

def all_permutations(arr):
    return list(itertools.permutations(arr))
```

### Características
- Extremadamente lento incluso con `n = 10`
- Usado en algoritmos de permutación total (viaje del vendedor, etc.)

---

## 📊 Comparación Visual (Crecimiento según `n`)

| n  | O(1) | O(log n) | O(n) | O(n log n) | O(n²) | O(2ⁿ) | O(n!) |
|----|------|----------|------|------------|-------|--------|--------|
| 5  | 1    | ~2.3     | 5    | ~11.6      | 25    | 32     | 120    |
| 10 | 1    | ~3.3     | 10   | ~33        | 100   | 1024   | 3.6e6  |
| 20 | 1    | ~4.3     | 20   | ~86        | 400   | 1e6    | 2.4e18 |

---

¿Quieres que haga un gráfico o animación de estos crecimientos? ¿O que los vincule a algoritmos específicos?
